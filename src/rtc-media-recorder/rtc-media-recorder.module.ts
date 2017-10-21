import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RtcMediaRecorderComponent } from './rtc-media-recorder.component';

@NgModule({
  declarations: [
    RtcMediaRecorderComponent
  ],
  exports: [RtcMediaRecorderComponent],
  imports: [CommonModule],
  providers: [],
})
export class RtcMediaRecorderModule { }
