import { Component } from '@angular/core';
import { ArtworkService } from 'src/shared/services/artwork.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public artworkService:ArtworkService){}
  title = 'ArtWorkExplorer';
}
