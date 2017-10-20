import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RtcMediaRecorderService } from './rtc-media-recorder/rtc-media-recorder.service';
import { AppComponent } from './app.component';
import { RtcMediaRecorderComponent } from './rtc-media-recorder/rtc-media-recorder.component';

@NgModule({
  declarations: [
    AppComponent,
    RtcMediaRecorderComponent
  ],
  exports: [RtcMediaRecorderComponent],
  imports: [
    BrowserModule
  ],
  providers: [RtcMediaRecorderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
