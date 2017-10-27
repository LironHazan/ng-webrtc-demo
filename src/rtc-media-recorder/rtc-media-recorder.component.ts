import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng-rtc-media-recorder',
  templateUrl: './rtc-media-recorder.component.html',
  styleUrls: ['./rtc-media-recorder.component.css']
})
export class RtcMediaRecorderComponent implements OnInit {
  @ViewChild('recVideo') recVideo: any;

  @Input() constrains = {video: true, audio: true};
  @Input() fileName = 'my_recording';
  @Input() showVideoPlayer = true;

  @Output() startRecording = new EventEmitter();
  @Output() downloadRecording = new EventEmitter();
  @Output() fetchRecording = new EventEmitter();

  format = 'video/webm';
  _navigator = <any> navigator;
  localStream;
  video;
  mediaRecorder;
  recordedBlobs = null;
  hideStopBtn = true;

  constructor() {}

  ngOnInit() {
    console.log('creating MediaRecorder for mimeType: ' + this.format);
    if (this.recVideo) {
      this.video = this.recVideo.nativeElement;
    }

    this._navigator.getUserMedia = ( this._navigator.getUserMedia || this._navigator.webkitGetUserMedia
    || this._navigator.mozGetUserMedia || this._navigator.msGetUserMedia );
  }

  private _initStream(constrains, navigator) {
    return navigator.mediaDevices.getUserMedia(constrains)
      .then((stream) => {
        this.localStream = stream;
        return window.URL ? window.URL.createObjectURL(stream) : stream;
      })
      .catch(err => err);
  }
  private _stopStream() {
    const tracks = this.localStream.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
  }

  public start() {
    console.log('start recording');
    this.recordedBlobs = [];
    this._initStream(this.constrains, this._navigator)
      .then((stream) => {
        if (!window['MediaRecorder'].isTypeSupported(this.format)) {
          console.log(this.format + ' is not Supported');
          return;
        }
        try {
          this.mediaRecorder = new window['MediaRecorder'](this.localStream, {mimeType: this.format});
          if (this.video) {
            this.video.src = stream;
          }
          this.startRecording.emit(stream);
        } catch (e) {
          console.error('Exception while creating MediaRecorder: ' + e);
          return;
        }
        console.log('Created MediaRecorder', this.mediaRecorder, 'with options', this.format);
        this.hideStopBtn = false;
        this.mediaRecorder.ondataavailable =
          (event) => {
            if (event.data && event.data.size > 0) {
              this.recordedBlobs.push(event.data);
            }};
        this.mediaRecorder.start(10); // collect 10ms of data
      });
  }

  public stop() {
    console.log('stop recording');
    this.hideStopBtn = true;

    this._stopStream();
    this.mediaRecorder.stop();
    this.fetchRecording.emit(this.recordedBlobs);
    if (this.video) {
      this.video.controls = true;
    }
  }

  public play() {
    if (!this.video) {
      return;
    }
    console.log('play recorded stream');
    const superBuffer = new Blob(this.recordedBlobs, {type: this.format});
    this.video.src = window.URL.createObjectURL(superBuffer);
  }

  public download() {
    console.log('download recorded stream');
    const timestamp = new Date().getUTCMilliseconds();
    const blob = new Blob(this.recordedBlobs, {type: this.format});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = timestamp + '__' + this.fileName + '.webm';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      this.downloadRecording.emit();
    }, 100);
  }

}
