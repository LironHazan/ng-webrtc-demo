import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('hardwareVideo') hardwareVideo: any;

  video;
  _navigator = <any> navigator;
  localStream;

  ngOnInit() {

    const video = this.hardwareVideo.nativeElement;
    this._navigator = <any>navigator;

    this._navigator.getUserMedia = ( this._navigator.getUserMedia || this._navigator.webkitGetUserMedia
    || this._navigator.mozGetUserMedia || this._navigator.msGetUserMedia );

    this._navigator.mediaDevices.getUserMedia({video: true})
      .then((stream) => {
        this.localStream = stream;
        video.src = window.URL.createObjectURL(stream);
        video.play();
    });

  }

  stopStream() {
    let tracks = this.localStream.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
  }

}
