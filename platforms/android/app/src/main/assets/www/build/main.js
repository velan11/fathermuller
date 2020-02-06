webpackJsonp([36],{

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from "@angular/common/http";




/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//local server
// let apilogUrl = "http://192.168.1.40:8888/api/v1/student/auth/";
// let apiurl = "http://192.168.1.40:8888/api/v1/student/";
var apilogUrl = "https://devstageapi.pacifyca.com/v1/auth/";
var apiurl = "https://devstageapi.pacifyca.com/v1/";
///sdaf
var api_key = "95yV0U155lrb77e9rgXl8u2pNuf27989";
//Live Server
// let apilogUrl = "https://api.pacifyca.com/v1/auth/";
// let apiurl = "https://api.pacifyca.com/v1/";
// let api_key = "WWmaoJGAAa54p984tAp2KekoXZ5FdthI";
//--------------------------------------
var clientKey = "MJES"; //ALOYSIUS
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log("Hello AuthService Provider");
        this.Idsload();
        this.user_id = JSON.parse(localStorage.getItem("user_id"));
        this.client_id = JSON.parse(localStorage.getItem("client_id"));
        this.student_id = JSON.parse(localStorage.getItem("student_id"));
    }
    AuthServiceProvider.prototype.handleError = function (err) {
        var errMessage;
        if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = err.json() || "";
            var error = body.error || JSON.stringify(body);
            errMessage = err.status + " - " + (err.statusText || "") + " " + error;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMessage);
    };
    AuthServiceProvider.prototype.Idsload = function () {
        this.user_id = JSON.parse(localStorage.getItem("user_id"));
        this.client_id = JSON.parse(localStorage.getItem("client_id"));
        this.student_id = JSON.parse(localStorage.getItem("student_id"));
        console.log("user_id:", this.user_id);
        console.log("client_id:", this.client_id);
        console.log("student_id:", this.student_id);
    };
    AuthServiceProvider.prototype.postlogData = function (credentials, type) {
        // return new Promise((resolve, reject) => {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        // headers.append('Access-Control-Allow-Headers', 'Content-Type');
        // headers.append('Access-Control-Allow-Methods', 'GET');
        // headers.append('Access-Control-Allow-Origin', '*');
        headers.append("API-KEY", api_key);
        // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append("Content-Type", "application/json");
        return this.http.post(apilogUrl + type, JSON.stringify(credentials), {
            headers: headers
        });
    };
    // ----for parent login method used for to reset password---
    AuthServiceProvider.prototype.postloginData = function (urlExtn, apiVal) {
        var api_urlToken = apiurl + apiVal;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        console.log("api url:", apiVal);
        console.log("erlExtn: ", urlExtn);
        var token = JSON.parse(localStorage.getItem("token"));
        var token_type = JSON.parse(localStorage.getItem("token_type"));
        token = token_type + " " + token;
        console.log("tokenVal: ", token);
        headers.append("API-KEY", api_key);
        headers.append("Authorization", token);
        headers.append("Cache-Control", "no-cache");
        headers.append("Content-Type", "application/json");
        headers.append("Content-Type", "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW");
        return this.http.post(api_urlToken, urlExtn, {
            headers: headers
        });
    };
    //-------method to send the device token---------
    AuthServiceProvider.prototype.postData = function (urlExtn, device_token) {
        var api_urlToken = apiurl + urlExtn;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        console.log("fcm token:", device_token);
        var token = JSON.parse(localStorage.getItem("token"));
        var token_type = JSON.parse(localStorage.getItem("token_type"));
        token = token_type + " " + token;
        headers.append("API-KEY", api_key);
        headers.append("Authorization", token);
        headers.append("Cache-Control", "no-cache");
        headers.append("Content-Type", "application/json");
        headers.append("Content-Type", "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW");
        return this.http.post(api_urlToken, JSON.stringify(device_token), {
            headers: headers
        });
    };
    AuthServiceProvider.prototype.getData = function (type) {
        console.log("type ", type);
        // console.log("key Value",keyval);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var token = JSON.parse(localStorage.getItem("token"));
        var token_type = JSON.parse(localStorage.getItem("token_type"));
        token = token_type + " " + token;
        console.log("authService: token_type: ", token_type);
        console.log("authService: token: ", token);
        headers.append("API-KEY", api_key);
        headers.append("Content-Type", "application/json");
        headers.append("Cache-Control", "no-cache");
        headers.append("Content-Type", "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW");
        headers.append("Authorization", token);
        // headers.append("client_unique_key", "ALOYSIUS"); //live
        headers.append("client_unique_key", clientKey);
        headers.append("client_id", this.client_id);
        console.log("getData: ", headers);
        var apiUrlAdd = apiurl + type; // return this.http.get(apiUrl+ 'getState');
        //       return new Promise(resolve => {
        //          this.http.get(apiurl + type , { headers:headers})
        //          .subscribe(data => {
        //            resolve(data.json());
        //          });
        //        });
        return this.http.get(apiUrlAdd, { headers: headers });
    };
    AuthServiceProvider.prototype.getVedios = function () {
        this.Idsload();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var token = JSON.parse(localStorage.getItem("token"));
        var token_type = JSON.parse(localStorage.getItem("token_type"));
        token = token_type + " " + token;
        headers.append("API-KEY", api_key);
        headers.append("Content-Type", "application/json");
        headers.append("Cache-Control", "no-cache");
        headers.append("Content-Type", "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW");
        headers.append("Authorization", token);
        headers.append("client_id", this.client_id);
        return this.http.get(apiurl +
            "parent/" +
            this.user_id +
            "/client/" +
            this.client_id +
            "/student/" +
            this.student_id +
            "/videos-list", { headers: headers });
    };
    AuthServiceProvider.prototype.getStudentData = function (urlExtension) {
        this.Idsload();
        console.log("user_id:", this.user_id);
        console.log("client_id:", this.client_id);
        console.log("student_id:", this.student_id);
        var api_url_extn = apiurl +
            "parent/" +
            this.user_id +
            "/client/" +
            this.client_id +
            "/student/" +
            this.student_id +
            "/" +
            urlExtension;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var token = JSON.parse(localStorage.getItem("token"));
        var token_type = JSON.parse(localStorage.getItem("token_type"));
        token = token_type + " " + token;
        headers.append("API-KEY", api_key);
        headers.append("Content-Type", "application/json");
        headers.append("Cache-Control", "no-cache");
        headers.append("Content-Type", "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW");
        headers.append("Authorization", token);
        headers.append("client_id", this.client_id);
        return this.http.get(api_url_extn, { headers: headers });
    };
    AuthServiceProvider.prototype.getMessageData = function (urlExtension) {
        this.Idsload();
        var api_url_extn = apiurl + "parent/" + this.user_id + urlExtension;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var token = JSON.parse(localStorage.getItem("token"));
        var token_type = JSON.parse(localStorage.getItem("token_type"));
        token = token_type + " " + token;
        headers.append("API-KEY", api_key);
        headers.append("Content-Type", "application/json");
        headers.append("Cache-Control", "no-cache");
        headers.append("Content-Type", "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW");
        headers.append("Authorization", token);
        headers.append("client_id", this.client_id);
        return this.http.get(api_url_extn, { headers: headers });
    };
    AuthServiceProvider.prototype.getMessageDelete = function (MsgId) {
        this.Idsload();
        var api_url_extn = apiurl +
            "parent/" +
            this.user_id +
            "/client/" +
            this.client_id +
            "/messages/" +
            MsgId +
            "/archive";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var token = JSON.parse(localStorage.getItem("token"));
        var token_type = JSON.parse(localStorage.getItem("token_type"));
        token = token_type + " " + token;
        headers.append("API-KEY", api_key);
        headers.append("Content-Type", "application/json");
        headers.append("Cache-Control", "no-cache");
        headers.append("Content-Type", "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW");
        headers.append("Authorization", token);
        return this.http.delete(api_url_extn, { headers: headers });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 188:
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
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about-inst/about-inst.module": [
		470,
		35
	],
	"../pages/attendance/attendance.module": [
		471,
		34
	],
	"../pages/eves/eves.module": [
		472,
		33
	],
	"../pages/faculty/fac-assignment-stud-list/fac-assignment-stud-list.module": [
		473,
		3
	],
	"../pages/faculty/fac-assignment/fac-assignment.module": [
		474,
		7
	],
	"../pages/faculty/fac-change-password/fac-change-password.module": [
		475,
		32
	],
	"../pages/faculty/fac-events/fac-events.module": [
		476,
		31
	],
	"../pages/faculty/fac-home/fac-home.module": [
		477,
		30
	],
	"../pages/faculty/fac-notices/fac-notices.module": [
		478,
		29
	],
	"../pages/faculty/fac-profile/fac-profile.module": [
		479,
		28
	],
	"../pages/faculty/fac-view-assignment-modal/fac-view-assignment-modal.module": [
		480,
		27
	],
	"../pages/faculty/fac-view-assignment/fac-view-assignment.module": [
		481,
		2
	],
	"../pages/faculty/faculty-logout/fac-lgout.module": [
		482,
		26
	],
	"../pages/faculty/load-institute/load-institute.module": [
		483,
		25
	],
	"../pages/landing/landing.module": [
		484,
		24
	],
	"../pages/login/login.module": [
		485,
		23
	],
	"../pages/menu/menu.module": [
		486,
		22
	],
	"../pages/reportcard/reportcard.module": [
		487,
		21
	],
	"../pages/stud-reset-login/stud-reset-login.module": [
		488,
		20
	],
	"../pages/student/about-student/about-student.module": [
		489,
		19
	],
	"../pages/student/home/home.module": [
		505,
		18
	],
	"../pages/student/logout/logout.module": [
		504,
		17
	],
	"../pages/student/stud-assignment-info/stud-assignment-info.module": [
		490,
		1
	],
	"../pages/student/stud-assignments/stud-assignments.module": [
		491,
		16
	],
	"../pages/student/stud-calendar/stud-calendar.module": [
		492,
		6
	],
	"../pages/student/stud-circular-notices/stud-circular-notices.module": [
		493,
		15
	],
	"../pages/student/stud-contact-us/stud-contact-us.module": [
		494,
		14
	],
	"../pages/student/stud-home/stud-home.module": [
		495,
		13
	],
	"../pages/student/stud-notice-board-info/stud-notice-board-info.module": [
		496,
		0
	],
	"../pages/student/stud-progress-report/stud-progress-report.module": [
		497,
		12
	],
	"../pages/student/stud-reset-password/stud-reset-password.module": [
		498,
		11
	],
	"../pages/student/stud-sms/stud-sms.module": [
		499,
		10
	],
	"../pages/student/stud-timetable/stud-timetable.module": [
		500,
		5
	],
	"../pages/student/stud-videos/stud-videos.module": [
		501,
		4
	],
	"../pages/student/student-list/student-list.module": [
		502,
		9
	],
	"../pages/verify-otp/verify-otp.module": [
		503,
		8
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 229;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConnectionStatusEnum */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConnectionStatusEnum;
(function (ConnectionStatusEnum) {
    ConnectionStatusEnum[ConnectionStatusEnum["Online"] = 0] = "Online";
    ConnectionStatusEnum[ConnectionStatusEnum["Offline"] = 1] = "Offline";
})(ConnectionStatusEnum || (ConnectionStatusEnum = {}));
/*
  Generated class for the NetworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NetworkProvider = /** @class */ (function () {
    function NetworkProvider(alertCtrl, network, eventCtrl) {
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.eventCtrl = eventCtrl;
        console.log("Hello NetworkProvider Provider");
        this.previousStatus = ConnectionStatusEnum.Online;
    }
    NetworkProvider.prototype.initializeNetworkEvents = function () {
        var _this = this;
        this.network.onDisconnect().subscribe(function () {
            if (_this.previousStatus === ConnectionStatusEnum.Online) {
                _this.eventCtrl.publish("network:offline");
            }
            _this.previousStatus = ConnectionStatusEnum.Offline;
        });
        this.network.onConnect().subscribe(function () {
            if (_this.previousStatus === ConnectionStatusEnum.Offline) {
                _this.eventCtrl.publish("network:online");
            }
            _this.previousStatus = ConnectionStatusEnum.Online;
        });
    };
    NetworkProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], NetworkProvider);
    return NetworkProvider;
}());

//# sourceMappingURL=network.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacAuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//live server
// let apilogUrl = "https://onlineapp.staloysius.edu.in/mjes/facultyappapi/auth/";
// let apiurl = "https://onlineapp.staloysius.edu.in/mjes/facultyappapi/";
var api_key = "95yV0U155lrb77e9rgXl8u2pNuf27900";
// demo server
var apilogUrl = "https://dev.pacifyca.com/mjes/facultyappapi/auth/";
var apiurl = "https://dev.pacifyca.com/mjes/facultyappapi/";
var FacAuthServiceProvider = /** @class */ (function () {
    function FacAuthServiceProvider(http) {
        this.http = http;
        console.log("Hello AuthFacServiceProvider Provider");
    }
    FacAuthServiceProvider.prototype.postlogData = function (credentials, type) {
        // return new Promise((resolve, reject) => {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        // headers.append('Access-Control-Allow-Headers', 'Content-Type');
        // headers.append('Access-Control-Allow-Methods', 'GET');
        // headers.append('Access-Control-Allow-Origin', '*');
        headers.append("API-KEY", api_key);
        // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append("Content-Type", "application/json");
        return this.http.post(apilogUrl + type, JSON.stringify(credentials), {
            headers: headers
        });
    };
    FacAuthServiceProvider.prototype.getlogData = function (type, keyval) {
        console.log("type ", type);
        console.log("key Value", keyval);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("API-KEY", api_key); // return this.http.get(apiUrl+ 'getState');
        return this.http.get(apilogUrl + type + keyval, { headers: headers });
    };
    FacAuthServiceProvider.prototype.postData = function (credentials, type) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        // headers.append('Access-Control-Allow-Headers', 'Content-Type');
        // headers.append('Access-Control-Allow-Methods', 'GET');
        // headers.append('Access-Control-Allow-Origin', '*');
        headers.append("API-KEY", api_key);
        headers.append("Content-Type", "application/json");
        return this.http.post(apiurl + type, JSON.stringify(credentials), {
            headers: headers
        });
    };
    FacAuthServiceProvider.prototype.getData = function (type) {
        console.log("type ", type);
        // console.log("key Value",keyval);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("API-KEY", api_key);
        headers.append("Content-Type", "application/json"); // return this.http.get(apiUrl+ 'getState');
        return this.http.get(apiurl + type, { headers: headers });
    };
    FacAuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], FacAuthServiceProvider);
    return FacAuthServiceProvider;
}());

//# sourceMappingURL=fac-auth-service.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/*
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FcmProvider = /** @class */ (function () {
    function FcmProvider(http, firebaseNative, platform, authService) {
        this.http = http;
        this.firebaseNative = firebaseNative;
        this.platform = platform;
        this.authService = authService;
        // device_token: any;
        this.device_token = { user_token: "" };
        console.log("Hello FcmProvider Provider");
    }
    FcmProvider.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var token, device_info, device_info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is("android")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 1:
                        token = _a.sent();
                        this.device_token.user_token = token;
                        console.log(token);
                        device_info = "user-token";
                        this.authService.postData(device_info, this.device_token).subscribe(function (data) {
                            console.log(data);
                            _this.data = JSON.parse(data._body);
                            _this.responseData = _this.data;
                            console.log(_this.responseData.data);
                            if (_this.responseData) {
                                console.log("Data: ", _this.responseData.data);
                                _this.device_token = _this.responseData.data;
                                console.log(_this.device_token);
                            }
                            else {
                                // alert("Invalid User");
                                console.log("Invalid User");
                            }
                        }, function (err) {
                            if (err.status === 0) {
                                alert("Network Connection Error. Please try Again.");
                            }
                        });
                        _a.label = 2;
                    case 2:
                        if (!this.platform.is("ios")) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 3:
                        token = _a.sent();
                        return [4 /*yield*/, this.firebaseNative.grantPermission()];
                    case 4:
                        _a.sent();
                        this.device_token.user_token = token;
                        console.log(token);
                        device_info = "user-token";
                        this.authService.postData(device_info, this.device_token).subscribe(function (data) {
                            console.log(data);
                            _this.data = JSON.parse(data._body);
                            _this.responseData = _this.data;
                            console.log(_this.responseData.data);
                            if (_this.responseData) {
                                console.log("Data: ", _this.responseData.data);
                                _this.device_token = _this.responseData.data;
                                console.log(_this.device_token);
                            }
                            else {
                                // alert("Invalid User");
                                console.log("Invalid User");
                            }
                        }, function (err) {
                            if (err.status === 0) {
                                alert("Network Connection Error. Please try Again.");
                            }
                        });
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FcmProvider.prototype.listenToNotifications = function () {
        return this.firebaseNative.onNotificationOpen();
    };
    FcmProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], FcmProvider);
    return FcmProvider;
}());

//# sourceMappingURL=fcm.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(384);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_toPromise__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_catch__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_observable_throw__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_do__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_retry__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_concat__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_concat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_concat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_service_auth_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_fac_auth_service_fac_auth_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_fcm_fcm__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_network_network__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_firebase__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_network__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_native_storage_ngx__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_app_version__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular_froala_wysiwyg__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_photo_viewer__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















//pages added








// import { DataTablesModule } from "angular-datatables";



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["a" /* NgbModalModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about-inst/about-inst.module#AboutInstPageModule', name: 'AboutInstPage', segment: 'about-inst', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/attendance/attendance.module#AttendancePageModule', name: 'AttendancePage', segment: 'attendance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/eves/eves.module#EvesPageModule', name: 'EvesPage', segment: 'eves', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faculty/fac-assignment-stud-list/fac-assignment-stud-list.module#FacAssignmentStudListPageModule', name: 'FacAssignmentStudListPage', segment: 'fac-assignment-stud-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faculty/fac-assignment/fac-assignment.module#FacAssignmentPageModule', name: 'FacAssignmentPage', segment: 'fac-assignment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faculty/fac-change-password/fac-change-password.module#FacChangePasswordPageModule', name: 'FacChangePasswordPage', segment: 'fac-change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faculty/fac-events/fac-events.module#FacEventsPageModule', name: 'FacEventsPage', segment: 'fac-events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faculty/fac-home/fac-home.module#FacHomePageModule', name: 'FacHomePage', segment: 'fac-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faculty/fac-notices/fac-notices.module#FacNoticesPageModule', name: 'FacNoticesPage', segment: 'fac-notices', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faculty/fac-profile/fac-profile.module#FacProfilePageModule', name: 'FacProfilePage', segment: 'fac-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faculty/fac-view-assignment-modal/fac-view-assignment-modal.module#FacViewAssignmentModalPageModule', name: 'FacViewAssignmentModalPage', segment: 'fac-view-assignment-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faculty/fac-view-assignment/fac-view-assignment.module#FacViewAssignmentPageModule', name: 'FacViewAssignmentPage', segment: 'fac-view-assignment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faculty/faculty-logout/fac-lgout.module#FacLgoutPageModule', name: 'FacLgoutPage', segment: 'fac-lgout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faculty/load-institute/load-institute.module#LoadInstitutePageModule', name: 'LoadInstitutePage', segment: 'load-institute', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reportcard/reportcard.module#ReportcardPageModule', name: 'ReportcardPage', segment: 'reportcard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stud-reset-login/stud-reset-login.module#StudResetLoginPageModule', name: 'StudResetLoginPage', segment: 'stud-reset-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/about-student/about-student.module#AboutStudentPageModule', name: 'AboutStudentPage', segment: 'about-student', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/stud-assignment-info/stud-assignment-info.module#StudAssignmentInfoPageModule', name: 'StudAssignmentInfoPage', segment: 'stud-assignment-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/stud-assignments/stud-assignments.module#StudAssignmentsPageModule', name: 'StudAssignmentsPage', segment: 'stud-assignments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/stud-calendar/stud-calendar.module#StudCalendarPageModule', name: 'StudCalendarPage', segment: 'stud-calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/stud-circular-notices/stud-circular-notices.module#StudCircularNoticesPageModule', name: 'StudCircularNoticesPage', segment: 'stud-circular-notices', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/stud-contact-us/stud-contact-us.module#StudContactUsPageModule', name: 'StudContactUsPage', segment: 'stud-contact-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/stud-home/stud-home.module#StudHomePageModule', name: 'StudHomePage', segment: 'stud-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/stud-notice-board-info/stud-notice-board-info.module#StudNoticeBoardInfoPageModule', name: 'StudNoticeBoardInfoPage', segment: 'stud-notice-board-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/stud-progress-report/stud-progress-report.module#StudProgressReportPageModule', name: 'StudProgressReportPage', segment: 'stud-progress-report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/stud-reset-password/stud-reset-password.module#StudResetPasswordPageModule', name: 'StudResetPasswordPage', segment: 'stud-reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/stud-sms/stud-sms.module#StudSmsPageModule', name: 'StudSmsPage', segment: 'stud-sms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/stud-timetable/stud-timetable.module#StudTimetablePageModule', name: 'StudTimetablePage', segment: 'stud-timetable', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/stud-videos/stud-videos.module#StudVideosPageModule', name: 'StudVideosPage', segment: 'stud-videos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/student-list/student-list.module#StudentListPageModule', name: 'StudentListPage', segment: 'student-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verify-otp/verify-otp.module#VerifyOtpPageModule', name: 'VerifyOtpPage', segment: 'verify-otp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/logout/logout.module#LogoutPageModule', name: 'LogoutPage', segment: 'logout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_27_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_27_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
                // FileTransfer,
                // FileTransferObject,
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_19__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_fac_auth_service_fac_auth_service__["a" /* FacAuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_fcm_fcm__["a" /* FcmProvider */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_22__providers_network_network__["a" /* NetworkProvider */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_native_storage_ngx__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_app_version__["a" /* AppVersion */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_network_network__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_firebase__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { HomePage } from "../pages/home/home";
// import { LoginPage } from "../pages/login/login";
// import { RazerPaymentPage } from "../pages/razer-payment/razer-payment";
// import { MenuPage } from "../pages/menu/menu";
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, network, networkProvider, events, toastCtrl, firebase, app, alertCtrl) {
        var _this = this;
        this.network = network;
        this.networkProvider = networkProvider;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.firebase = firebase;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.rootPage = "LandingPage";
        this.exam_count_no = 0;
        this.tinyMceSettings = {
            skin_url: "/assets/tinymce/skins/lightgray",
            inline: false,
            statusbar: false,
            browser_spellcheck: true,
            height: 320,
            plugins: "fullscreen"
        };
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleLightContent();
            splashScreen.hide();
        });
        this.login_check();
        this.NetworkMsg();
        /*----------exit on exit confirm alert click back button-------*/
        platform.registerBackButtonAction(function () {
            // Catches the active view
            var nav = _this.app.getActiveNavs()[0];
            var activeView = nav.getActive();
            // alert(activeView.name);
            // console.log("activeView: ", activeView);
            // Checks if can go back before show up the alert
            if (activeView.name !== "LoginPage") {
                if (nav.canGoBack()) {
                    nav.pop();
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: "Confirm",
                        message: "Are you sure, You want to exit app?",
                        buttons: [
                            {
                                text: "Cancel",
                                role: "cancel",
                                handler: function () {
                                    _this.nav.setRoot("LoginPage");
                                    console.log("** Check for user credentials! **");
                                }
                            },
                            {
                                text: "Exit App",
                                handler: function () {
                                    // this.logout();
                                    platform.exitApp();
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
            }
            else {
                platform.exitApp();
            }
        });
        /*----------end of exit confirm alert click back button-------*/
        // watch network for a disconnection
        var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
            console.log("network was disconnected :-(");
        });
        // stop disconnect watch
        disconnectSubscription.unsubscribe();
        // watch network for a connection
        var connectSubscription = this.network.onConnect().subscribe(function () {
            console.log("network connected!");
            // We just got a connection but we need to wait briefly
            // before we determine the connection type. Might need to wait.
            // prior to doing any api requests as well.
            setTimeout(function () {
                if (_this.network.type === "wifi") {
                    console.log("we got a wifi connection, woohoo!");
                }
            }, 3000);
        });
        // stop connect watch
        connectSubscription.unsubscribe();
    }
    MyApp.prototype.login_check = function () {
        var student_token = JSON.parse(localStorage.getItem("token"));
        // const client_id = localStorage.getItem("client_id");
        var faculty_token = JSON.parse(localStorage.getItem("factoken"));
        console.log("login_check", faculty_token);
        // localStorage.clear();
        if (student_token != null) {
            // this.fcm.getToken();
            this.rootPage = "MenuPage";
        }
        if (faculty_token != null) {
            // FacMockTestPage
            this.rootPage = "MenuPage";
        }
    };
    MyApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe("user:faculty", function () {
            console.log("LoggedIn - faculty triggered");
            _this.facultyMenuShow = true;
            _this.parentMenuShow = false;
            _this.studentMenuShow = false;
        });
        this.events.subscribe("user:parent", function () {
            console.log("LoggedIn - parent triggered");
            _this.parentMenuShow = true;
            _this.facultyMenuShow = false;
            _this.studentMenuShow = false;
        });
        this.events.subscribe("user:student", function () {
            console.log("LoggedIn - student triggered");
            _this.parentMenuShow = false;
            _this.facultyMenuShow = false;
            _this.studentMenuShow = true;
        });
    };
    MyApp.prototype.getUser = function () {
        this.user_type = localStorage.getItem("user_logged_in");
        if (this.user_type === "faculty") {
            var user_type = localStorage.getItem("user_logged_in");
            this.parentMenuShow = false;
            this.facultyMenuShow = true;
            console.log("faculty: ", this.facultyMenuShow);
        }
        else if (this.user_type === "parent") {
            this.parentMenuShow = true;
            this.facultyMenuShow = false;
            console.log("parent: ", this.parentMenuShow);
            var user_type = localStorage.getItem("user_logged_in");
        }
        // else if (this.user_type === "student") {
        //   this.parentMenuShow = false;
        //   this.facultyMenuShow = false;
        //   this.studentMenuShow = true;
        //   console.log("student: ", this.studentMenuShow);
        //   let user_type = localStorage.getItem("user_logged_in");
        // }
    };
    MyApp.prototype.getNotices = function () {
        this.exam_count_no = JSON.parse(localStorage.getItem("exam_count_no"));
        if (this.exam_count_no > 0) {
            this.exam_notify_show = true;
        }
        else {
            this.exam_notify_show = false;
        }
    };
    MyApp.prototype.openPage = function (pages) {
        localStorage.setItem("menu_id", pages.id);
        this.nav.push(pages.component);
        // this.pushSetup();
    };
    MyApp.prototype.openfacPage = function (pages) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(pages.component);
        localStorage.setItem("menu_id", pages.id);
        this.nav.setRoot(pages.component);
        // this.pushSetup();
    };
    // openStudPage(pages) {
    //   // Reset the content nav to have just this page
    //   // we wouldn't want the back button to show in this scenario
    //   // this.nav.setRoot(pages.component);
    //   localStorage.setItem("menu_id", pages.id);
    //   this.nav.setRoot(pages.component);
    //   // this.pushSetup();
    // }
    MyApp.prototype.NetworkMsg = function () {
        var _this = this;
        this.networkProvider.initializeNetworkEvents();
        // Offline event
        this.events.subscribe("network:offline", function () {
            alert("No Internet Connection Please Try Again." + _this.network.type);
        });
        // Online event
        this.events.subscribe("network:online", function () {
            var toast = _this.toastCtrl.create({
                message: "Your Network Connection is: " + _this.network.type,
                duration: 3000,
                position: "top"
            });
            toast.onDidDismiss(function () {
                console.log("Dismissed toast");
            });
            toast.present();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_5__providers_network_network__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[379]);
//# sourceMappingURL=main.js.map