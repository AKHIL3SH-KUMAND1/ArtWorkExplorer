import { Component } from '@angular/core';
import { ArtworkService } from 'src/shared/services/artwork.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  constructor(public artworkService:ArtworkService){}

}
