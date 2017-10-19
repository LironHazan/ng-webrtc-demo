import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  format = 'video/webm';
  constrains = {video: true, audio: false};
  ngOnInit() {
  }
}
