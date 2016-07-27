import {Component} from 'angular2/core';
import {ArtistService} from './../services/artist.service';

@Component ({
  selector: 'artists',
  template:`
        <h2>Artists</h2>
        {{title}}
        <ul>
          <li *ngFor="#artist of artists">
          {{ artist }}
          </li>
        </ul>
        `,
   providers: [ArtistService]
})
export class ArtistsComponent {
  authors: string[];
  title = "The artist of artists";
  
  constructor (artistService: ArtistService) {
    this.artists = artistService.getArtists();
  }
}

@Component({
    selector: 'artists',
    template: `
            <h2>Artists</h2>
        {{ title }}
        <ul>
            <li *ngFor = "#artist of artists">
            {{ artist }}
            </li>
        </ul>
            `,
    providers: [ArtistService]
})


export class ArtistComponent{
    authors: string[];
    title = "The title of the artists page";
    courses;
    
    constructor(artistService: ArtistService){
        this.courses = artistService.getArtists()
    }
}
