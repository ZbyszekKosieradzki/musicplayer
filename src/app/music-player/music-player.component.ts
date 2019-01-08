import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {

  @Input() url: string = null;

  constructor() { }

  ngOnInit() {
  }

  play(){
console.log('play');
  }
  stop(){
    console.log('stop');
  }
}
