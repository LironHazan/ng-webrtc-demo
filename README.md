# NgWebrtcDemo

The demo application uses the RtcMediaRecorderModule which encapsulate a use of the getUserMedia and MediaRecorder APIs for using the camera + microphone and record the stream.


Available components:

- *RtcMediaRecorderComponent*:
  - Add RtcMediaRecorderModule to app module imports and start using in your component templates   
 
` <ng-rtc-media-recorder [constrains]="constrains"
   [showVideoPlayer]="false" [fileName]="my_recorded_stream_file"
   (startRecording)="announceStart($event)" (fetchRecording)="handleVideoStream($event)">
   </ng-rtc-media-recorder> `

## options:
#### [constrains]
_object_

Instruct the browser if to record video/audio or both, default value is {video: true, audio: false}

```
[constrains]="constrains"

```
#### [showVideoPlayer]
_boolean_

When set to 'false', the video player element won't be visible, default value is 'true'

```
[showVideoPlayer]="false"

```
#### [fileName]
_string_

Default value is 'my_recording'

```
[fileName]="fileName"

```   
#### (startRecording)

Can be used for toasting that recording had started

First define callback function in your controller,
```
  announceStart() {
    alert('Start recording!');
  }
```

And then use it in your template:
``` 
(startRecording)="announceStart($event)"
```
#### (fetchRecording)

Can be used for fetching the recording when stopping the recorder

First define callback function in your controller,
```
  handleVideoStream(blob) {
    // can send it to a server or play in another video player etc..
    console.log('do something with the recording' + blob);
  }
```

And then use it in your template:
``` 
(fetchRecording)="handleVideoStream($event)"
```
#### (downloadRecording)

Can be used for toasting that the file was downloaded

First define callback function in your controller,
```
  announceDownload() {
    alert('Start recording!');
  }
```

And then use it in your template:
``` 
(downloadRecording)="announceDownload($event)"
```

** Supported browsers are Chrome and Firefox.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.



webRTC references:
- https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API
- https://webrtc.github.io/samples/src/content/getusermedia/gum/
- http://webrtc-security.github.io/
- https://melavi.de/811/
- codelab: https://codelabs.developers.google.com/codelabs/webrtc-web/#0


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
