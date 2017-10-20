import {Component, OnInit} from '@angular/core';
// import { RtcMediaRecorderComponent } from './rtc-media-recorder/rtc-media-recorder.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  format = 'video/webm';
  constrains = {video: true, audio: false};

  constructor() {}

  ngOnInit() {}

  announceStart() {
    alert('Start recording!');
   // this.rtcMediaRecorderComponent.sendRecording('', '');
  }
}
