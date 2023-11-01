import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artwork,  ArtworkDisplayData,  WishlistedArtwork } from 'src/models/artwork-model';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  wishlist: number[] = []
  constructor(public httpClient: HttpClient) {
    this.getData(1, 12,'').subscribe(data => {
      console.log((data as Artwork).data)
    })
    if (window.localStorage.getItem("wishlist") === null) {
      window.localStorage.setItem("wishlist", JSON.stringify(this.wishlist));
    } else {
      this.wishlist = JSON.parse(window.localStorage.getItem("wishlist") as string);
    }
  }

  addToWishlist(id: number): boolean {
    let inWishlist = false;
    if (window.localStorage.getItem("wishlist") === null) {
      this.wishlist.push(id);
      window.localStorage.setItem("wishlist", JSON.stringify(this.wishlist));
    } else {
      this.wishlist = JSON.parse(window.localStorage.getItem("wishlist") as string);
      if (!(this.wishlist.find(wId => wId === id))) {
        this.wishlist.push(id);
        inWishlist = true;
      } else {
        const index = this.wishlist.findIndex(wId => wId === id);
        this.wishlist.splice(index, 1);
        inWishlist = false;
        this.getWishlistedData()
      }
      window.localStorage.setItem("wishlist", JSON.stringify(this.wishlist));
    }
    return inWishlist;
  }

  deleteFromWishlist(id: number) {
    this.wishlist = this.wishlist.filter(wId => wId !== id);
    // this.wishlist.splice(index, 1);
    window.localStorage.setItem("wishlist", JSON.stringify(this.wishlist));
  }

  getData(page: number, limit: number,search:string): Observable<Artwork> {
    return this.httpClient.get<Artwork>(`https://api.artic.edu/api/v1/artworks/search?q=${search}&fields=id,title,thumbnail,place_of_origin,artist_titles,date_display,image_id,alt_image_ids,artist_id&limit=${limit}&page=${page + 1}`)
  }

  getWishlistedData():Observable<WishlistedArtwork> {
    let ids = "ids=";
    this.wishlist.forEach(id => {
      ids = ids + id.toString() + ",";
    })
    ids = ids.slice(0,ids.length-1)
    const url = "https://api.artic.edu/api/v1/artworks?" + ids + "&fields=id,title,image_id,artist_titles"
    return this.httpClient.get<WishlistedArtwork>(url);
  }

  getDataById(id:number):Observable<ArtworkDisplayData>{
    return this.httpClient.get<ArtworkDisplayData>(`https://api.artic.edu/api/v1/artworks?ids=${id}&fields=id,title,image_id,thumbnail,artist_display,category_titles,place_of_origin,inscriptions,publication_history,exhibition_history,description,alt_img_ids`)
  }

  shareOnFacebook(shareUrl: string) {
    shareUrl = encodeURIComponent(shareUrl);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, 'sharer');
  }

  shareOnTwitter(shareUrl: string, desc: string) {
    shareUrl = encodeURIComponent(shareUrl);
    desc = encodeURIComponent(desc);
    window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${desc}`, 'sharer');
  }

  shareOnGooglePlus(shareUrl: string) {
    shareUrl = encodeURIComponent(shareUrl);
    window.open(`https://plus.google.com/share?url=${shareUrl}`, 'sharer');
  }

  shareOnPinterest(shareUrl: string, img: string, desc: string) {
    shareUrl = encodeURIComponent(shareUrl);
    img = encodeURIComponent(img);
    desc = encodeURIComponent(desc);
    window.open(`https://www.pinterest.com/pin/create/button?url=${shareUrl}&media=${img}&description=${desc}`, 'sharer');
  }
  


} 
