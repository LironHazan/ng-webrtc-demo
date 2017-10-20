import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
// import { RtcMediaRecorderService } from './rtc-media-recorder.service';

@Component({
  selector: 'app-rtc-media-recorder',
  templateUrl: './rtc-media-recorder.component.html',
  styleUrls: ['./rtc-media-recorder.component.css']
})
export class RtcMediaRecorderComponent implements OnInit {
  @ViewChild('recVideo') recVideo: any;

  @Input() format = 'video/webm';
  @Input() constrains = {video: true, audio: true};
  @Input() sendTo = null;
  @Input() fileNamePattern = '_my_record.webm';

  // inform the consumer app of following actions
  @Output() startRecording = new EventEmitter();
  @Output() stopRecording = new EventEmitter();
  @Output() downloadRecording = new EventEmitter();



  _navigator = <any> navigator;
  localStream;
  video;
  mediaRecorder;
  recordedBlobs;
  hideStopBtn = true;

  constructor() { }

  ngOnInit() {
    console.log('creating MediaRecorder for mimeType: ' + this.format);
    this.video = this.recVideo.nativeElement;

    this._navigator.getUserMedia = ( this._navigator.getUserMedia || this._navigator.webkitGetUserMedia
    || this._navigator.mozGetUserMedia || this._navigator.msGetUserMedia );
  }

  private initStream(constrains, navigator) {
    return navigator.mediaDevices.getUserMedia(constrains)
      .then((stream) => {
        this.localStream = stream;
        return window.URL ? window.URL.createObjectURL(stream) : stream;
      })
      .catch(err => err);
  }
  private stopStream() {
    const tracks = this.localStream.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
  }

  public start() {
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
          this.startRecording.emit(this.video.src);
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
    this.stopRecording.emit();
    this.stopStream();
    this.mediaRecorder.stop();
    this.hideStopBtn = true;
    console.log('Recorded Blobs: ', this.recordedBlobs);
    this.video.controls = true;
  }

  public play() {
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
    a.download = timestamp + this.fileNamePattern;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      this.downloadRecording.emit();
    }, 100);
  }

  /**
   * Responsible for sending the recorded srteam to the dest server
   * @param url
   * @param record
   */
  // public sendRecording(url, record) {
  //   if (!this.sendTo) { return; }
  //   this.rtcMediaRecorderService.postRecordToServer(url, record)
  //     .then((response) => {
  //     console.log('success');
  //     }).catch((err) => { console.log(err); });
  // }

}
