import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArtworkService } from 'src/shared/services/artwork.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() image_id!:string;
  @Input() title!:string;
  @Input() workId!:string;
  @Input() artist!:string;
  @Input() image_alt!:string;
  @Output() deleteItemEvent = new EventEmitter<number> ();
  @Output() addItemEvent = new EventEmitter<number> ();
  inWishlist = false;
  ngOnInit(){
    if(this.artworkService.wishlist.find(wId => wId === +this.workId)){
      this.inWishlist = true;
    }
  }
  constructor(public artworkService:ArtworkService){
  }
  addToWishlist(id:number){
    this.inWishlist = this.artworkService.addToWishlist(id);
    if(!this.inWishlist){
      this.deleteItem(+this.workId)
    }else{
      this.addItemEvent.emit(id)
    }
  }

  deleteItem(id:number){
    this.deleteItemEvent.emit(id);
  }

  


}
