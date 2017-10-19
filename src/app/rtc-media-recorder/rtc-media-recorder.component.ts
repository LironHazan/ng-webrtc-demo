import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-rtc-media-recorder',
  templateUrl: './rtc-media-recorder.component.html',
  styleUrls: ['./rtc-media-recorder.component.css']
})
export class RtcMediaRecorderComponent implements OnInit {
  @ViewChild('recVideo') recVideo: any;
  @Input() format = 'video/webm';
  @Input() constrains = {video: true, audio: true};
  _navigator = <any> navigator;
  localStream;
  video;
  mediaRecorder;
  recordedBlobs;
  showStartBtn = true;
  constructor() { }

  ngOnInit() {
    console.log('creating MediaRecorder for mimeType: ' + this.format);
    this.video = this.recVideo.nativeElement;

    this._navigator.getUserMedia = ( this._navigator.getUserMedia || this._navigator.webkitGetUserMedia
    || this._navigator.mozGetUserMedia || this._navigator.msGetUserMedia );
  }

  initStream(constrains, navigator) {
    return navigator.mediaDevices.getUserMedia(constrains)
      .then((stream) => {
        this.localStream = stream;
        return window.URL ? window.URL.createObjectURL(stream) : stream;
      })
      .catch(err => err);
  }

  start() {
    console.log('start recording');
    this.recordedBlobs = [];
    this.initStream(this.constrains, this._navigator)
      .then((stream) => {
        if (!window['MediaRecorder'].isTypeSupported(this.format)) {
          console.log(this.format + ' is not Supported');
          return;
        }
        try {
          this.mediaRecorder = new window['MediaRecorder'](this.localStream, {mimeType: this.format});
          this.video.src = stream;
        } catch (e) {
          console.error('Exception while creating MediaRecorder: ' + e);
          return;
        }
        console.log('Created MediaRecorder', this.mediaRecorder, 'with options', this.format);
        this.showStartBtn = false;
        this.mediaRecorder.ondataavailable =
          (event) => {
            if (event.data && event.data.size > 0) {
              this.recordedBlobs.push(event.data);
            }};
        this.mediaRecorder.start(10); // collect 10ms of data
      });
  }

  stop() {
    console.log('stop recording');
    this.stopStream();
    this.mediaRecorder.stop();
    this.showStartBtn = true;
    console.log('Recorded Blobs: ', this.recordedBlobs);
    this.video.controls = true;
  }

  play() {
    console.log('play recorded stream');
    const superBuffer = new Blob(this.recordedBlobs, {type: this.format});
    this.video.src = window.URL.createObjectURL(superBuffer);
  }

  download() {
    console.log('download recorded stream');
    const timestamp = new Date().getUTCMilliseconds();
    const blob = new Blob(this.recordedBlobs, {type: this.format});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = timestamp + '_my_record.webm';
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  }

  stopStream() {
    const tracks = this.localStream.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
  }

}
