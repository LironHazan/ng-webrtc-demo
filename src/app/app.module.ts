import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RtcMediaRecorderModule } from '../rtc-media-recorder/rtc-media-recorder.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, RtcMediaRecorderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
