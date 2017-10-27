webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h2> Welcome to my webRTC demo app! </h2>\n  <ng-rtc-media-recorder [constrains]=\"constrains\"\n  [showVideoPlayer]=\"showVideoPlayer\"\n  (startRecording)=\"announceStart($event)\" (fetchRecording)=\"handleVideoStream($event)\">\n  </ng-rtc-media-recorder>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.format = 'video/webm';
        this.constrains = { video: true, audio: false };
        this.showVideoPlayer = true;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.handleVideoStream = function (blob) {
        // can send it to a server or play in another video player etc..
        console.log('do something with the recording' + blob);
    };
    AppComponent.prototype.announceStart = function () {
        alert('Start recording!');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rtc_media_recorder_rtc_media_recorder_module__ = __webpack_require__("../../../../../src/rtc-media-recorder/rtc-media-recorder.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__rtc_media_recorder_rtc_media_recorder_module__["a" /* RtcMediaRecorderModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/rtc-media-recorder/rtc-media-recorder.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".video-rec {\n  width: 70%;\n  background-color: gray;\n}\n.rec-actions button {\n  text-transform: capitalize;\n}\n.hide-video-player {\n  visibility: hidden;\n  height: 0;\n  width: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/rtc-media-recorder/rtc-media-recorder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"rec-player\">\n  <video [ngClass]=\"{'hide-video-player': !showVideoPlayer}\" class=\"video-rec\" #recVideo autoplay muted controls></video>\n  <div class=\"rec-actions\">\n    <div *ngIf=\"hideStopBtn\">\n      <button (click)=\"start()\"> Start recording </button>\n      <button *ngIf=\"showVideoPlayer && recordedBlobs\" (click)=\"play()\"> Play </button>\n      <button *ngIf=\"recordedBlobs\" (click)=\"download()\"> Download </button>\n    </div>\n    <button *ngIf=\"!hideStopBtn\" (click)=\"stop()\"> Stop </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/rtc-media-recorder/rtc-media-recorder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RtcMediaRecorderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RtcMediaRecorderComponent = (function () {
    function RtcMediaRecorderComponent() {
        this.constrains = { video: true, audio: true };
        this.fileName = 'my_recording';
        this.showVideoPlayer = true;
        this.startRecording = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.downloadRecording = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.fetchRecording = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.format = 'video/webm';
        this._navigator = navigator;
        this.recordedBlobs = null;
        this.hideStopBtn = true;
    }
    RtcMediaRecorderComponent.prototype.ngOnInit = function () {
        console.log('creating MediaRecorder for mimeType: ' + this.format);
        if (this.recVideo) {
            this.video = this.recVideo.nativeElement;
        }
        this._navigator.getUserMedia = (this._navigator.getUserMedia || this._navigator.webkitGetUserMedia
            || this._navigator.mozGetUserMedia || this._navigator.msGetUserMedia);
    };
    RtcMediaRecorderComponent.prototype._initStream = function (constrains, navigator) {
        var _this = this;
        return navigator.mediaDevices.getUserMedia(constrains)
            .then(function (stream) {
            _this.localStream = stream;
            return window.URL ? window.URL.createObjectURL(stream) : stream;
        })
            .catch(function (err) { return err; });
    };
    RtcMediaRecorderComponent.prototype._stopStream = function () {
        var tracks = this.localStream.getTracks();
        tracks.forEach(function (track) {
            track.stop();
        });
    };
    RtcMediaRecorderComponent.prototype.start = function () {
        var _this = this;
        console.log('start recording');
        this.recordedBlobs = [];
        this._initStream(this.constrains, this._navigator)
            .then(function (stream) {
            if (!window['MediaRecorder'].isTypeSupported(_this.format)) {
                console.log(_this.format + ' is not Supported');
                return;
            }
            try {
                _this.mediaRecorder = new window['MediaRecorder'](_this.localStream, { mimeType: _this.format });
                if (_this.video) {
                    _this.video.src = stream;
                }
                _this.startRecording.emit(stream);
            }
            catch (e) {
                console.error('Exception while creating MediaRecorder: ' + e);
                return;
            }
            console.log('Created MediaRecorder', _this.mediaRecorder, 'with options', _this.format);
            _this.hideStopBtn = false;
            _this.mediaRecorder.ondataavailable =
                function (event) {
                    if (event.data && event.data.size > 0) {
                        _this.recordedBlobs.push(event.data);
                    }
                };
            _this.mediaRecorder.start(10); // collect 10ms of data
        });
    };
    RtcMediaRecorderComponent.prototype.stop = function () {
        console.log('stop recording');
        this.hideStopBtn = true;
        this._stopStream();
        this.mediaRecorder.stop();
        this.fetchRecording.emit(this.recordedBlobs);
        if (this.video) {
            this.video.controls = true;
        }
    };
    RtcMediaRecorderComponent.prototype.play = function () {
        if (!this.video) {
            return;
        }
        console.log('play recorded stream');
        var superBuffer = new Blob(this.recordedBlobs, { type: this.format });
        this.video.src = window.URL.createObjectURL(superBuffer);
    };
    RtcMediaRecorderComponent.prototype.download = function () {
        var _this = this;
        console.log('download recorded stream');
        var timestamp = new Date().getUTCMilliseconds();
        var blob = new Blob(this.recordedBlobs, { type: this.format });
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = timestamp + '__' + this.fileName + '.webm';
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            _this.downloadRecording.emit();
        }, 100);
    };
    return RtcMediaRecorderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('recVideo'),
    __metadata("design:type", Object)
], RtcMediaRecorderComponent.prototype, "recVideo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], RtcMediaRecorderComponent.prototype, "constrains", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], RtcMediaRecorderComponent.prototype, "fileName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], RtcMediaRecorderComponent.prototype, "showVideoPlayer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], RtcMediaRecorderComponent.prototype, "startRecording", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], RtcMediaRecorderComponent.prototype, "downloadRecording", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], RtcMediaRecorderComponent.prototype, "fetchRecording", void 0);
RtcMediaRecorderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ng-rtc-media-recorder',
        template: __webpack_require__("../../../../../src/rtc-media-recorder/rtc-media-recorder.component.html"),
        styles: [__webpack_require__("../../../../../src/rtc-media-recorder/rtc-media-recorder.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RtcMediaRecorderComponent);

//# sourceMappingURL=rtc-media-recorder.component.js.map

/***/ }),

/***/ "../../../../../src/rtc-media-recorder/rtc-media-recorder.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RtcMediaRecorderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rtc_media_recorder_component__ = __webpack_require__("../../../../../src/rtc-media-recorder/rtc-media-recorder.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RtcMediaRecorderModule = (function () {
    function RtcMediaRecorderModule() {
    }
    return RtcMediaRecorderModule;
}());
RtcMediaRecorderModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__rtc_media_recorder_component__["a" /* RtcMediaRecorderComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__rtc_media_recorder_component__["a" /* RtcMediaRecorderComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
        providers: [],
    })
], RtcMediaRecorderModule);

//# sourceMappingURL=rtc-media-recorder.module.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map