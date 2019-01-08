import { Component } from '@angular/core';

//import SONGS from './songs.json';

import SONGS from './songs.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  audioSrc = SONGS;

  title = 'musicplayer';
}
