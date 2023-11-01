import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtworkDisplayData, DisplayData } from 'src/models/artwork-model';
import { ArtworkService } from 'src/shared/services/artwork.service';

@Component({
  selector: 'app-artwork-expanded',
  templateUrl: './artwork-expanded.component.html',
  styleUrls: ['./artwork-expanded.component.css']
})
export class ArtworkExpandedComponent {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  url:string = ""
  artworkData:DisplayData[] = []
  constructor(private activatedRoute:ActivatedRoute,public artworkService:ArtworkService){
    this.activatedRoute.url.subscribe(value=> this.url = value.toString());
    this.activatedRoute.params.subscribe(param=>{
      const id = param['id'];
      artworkService.getDataById(id).subscribe(data=>{
        this.artworkData = (data as ArtworkDisplayData).data
        console.log(this.artworkData)
      })
    })
  }

  shareTwitter(){
    this.artworkService.shareOnTwitter(this.url,(this.artworkData[0].description as string))
  }

  shareFacebook(){
    this.artworkService.shareOnFacebook(this.url)
  }

  shareGoogle(){
    this.artworkService.shareOnGooglePlus(this.url)
  }

  sharePinterest(){
    this.artworkService.shareOnPinterest(this.url,("https://www.artic.edu/iiif/2/"+this.artworkData[0].image_id+"/full/843,/0/default.jpg"),(this.artworkData[0].description as string))
  }

  
}
