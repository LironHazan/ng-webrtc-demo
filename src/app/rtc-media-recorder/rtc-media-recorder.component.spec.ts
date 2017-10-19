import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtcMediaRecorderComponent } from './rtc-media-recorder.component';

describe('RtcMediaRecorderComponent', () => {
  let component: RtcMediaRecorderComponent;
  let fixture: ComponentFixture<RtcMediaRecorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtcMediaRecorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtcMediaRecorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
