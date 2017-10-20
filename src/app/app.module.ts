import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
