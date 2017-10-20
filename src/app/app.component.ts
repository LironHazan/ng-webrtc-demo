import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  format = 'video/webm';
  constrains = {video: true, audio: false};
  showVideoPlayer = false;

  constructor() {}

  ngOnInit() {}

  public handleVideoStream(blob) {
    // can send it to a server or play in another video player etc..
    console.log('do something with the recording' + blob);
  }

  announceStart() {
    alert('Start recording!');
  }
}
