import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworkDisplayComponent } from './artwork-display/artwork-display.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ArtworkExpandedComponent } from './artwork-expanded/artwork-expanded.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent

  },
  {
    path:"artworks",
    component:ArtworkDisplayComponent
  },
  {
    path : '*',
    component : HomeComponent
  },
  {
    path:"wishlist",
    component:WishlistComponent
  },
  {
    path:"Artwork/:id",
    component:ArtworkExpandedComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
