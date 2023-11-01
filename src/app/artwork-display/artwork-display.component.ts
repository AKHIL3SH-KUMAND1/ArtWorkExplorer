import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Artwork, Data } from 'src/models/artwork-model';
import { ArtworkService } from 'src/shared/services/artwork.service';

@Component({
  selector: 'app-artwork-display',
  templateUrl: './artwork-display.component.html',
  styleUrls: ['./artwork-display.component.css']
})
export class ArtworkDisplayComponent implements OnInit {
  displayedArtworks:Data[] = [];
  pageIndex = 0;
  pageSize  = 12;
  itemAddedBool = false;
  total = 0;
  searchBar : FormGroup = new FormGroup({
    searchContent : new FormControl(''),
  })
  ngOnInit(): void {
    this.updateData(this.searchBar.value.searchContent)
  }
  constructor(public artworkService:ArtworkService){
    this.searchBar.valueChanges.subscribe(value=>{
      this.updateData(value.searchContent)
    })
  }

  /**
   * Everytime the search bar is loaded 
   * @param search : The search query returned from the reactive form field "searchContent"
   */
  updateData(search:string){
    this.artworkService.getData(this.pageIndex,this.pageSize,search).subscribe(
      data => {
      this.displayedArtworks = (data as Artwork).data;
      console.log(this.displayedArtworks)
      this.total = (data as Artwork).pagination.total;
    })
  }

  onChangePage(event:PageEvent){
    this.pageIndex = event.pageIndex;
    this.pageSize  =event.pageSize;
    this.updateData(this.searchBar.value.searchContent)
  }

  itemAdded(event:number){
    console.log(event);
    this.itemAddedBool = true;
    setTimeout(()=>{
      this.itemAddedBool = false;
    },1000)
  }
}
