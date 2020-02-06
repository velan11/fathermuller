webpackJsonp([8],{

/***/ 1056:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyOtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VerifyOtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerifyOtpPage = /** @class */ (function () {
    function VerifyOtpPage(navCtrl, navParams, authService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.login_data = { mobile_number: "", password: "", token: "" };
        this.showOtp();
        console.log(this.navParams.get("process_type"));
        this.process_type = this.navParams.get("process_type");
        if (this.process_type == "register") {
            this.buttonLabel = "Register";
        }
        else {
            this.buttonLabel = "Reset Password";
        }
    }
    VerifyOtpPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    VerifyOtpPage.prototype.showOtp = function () {
        // this.login_data.password = JSON.parse(localStorage.getItem("parentOtp"));
        console.log("otp: ", this.login_data.password);
        this.login_data.mobile_number = JSON.parse(localStorage.getItem("parentMobileNumber"));
        console.log("mobile_number: ", this.login_data.mobile_number);
        this.login_data.token = JSON.parse(localStorage.getItem("parentToken"));
        console.log("token: ", this.login_data.token);
        this.presentLoadingCustom();
    };
    VerifyOtpPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad VerifyOtpPage");
    };
    VerifyOtpPage.prototype.presentLoadingCustom = function () {
        var loading = this.loadingCtrl.create({
            content: "Loading OTP...",
            duration: 800
        });
        loading.onDidDismiss(function () {
            console.log("Dismissed loading");
        });
        loading.present();
    };
    VerifyOtpPage.prototype.VerifyOtp = function () {
        var _this = this;
        console.log("login_data: ", this.login_data);
        this.authService.postlogData(this.login_data, "signin").subscribe(function (data) {
            console.log(data);
            var result = JSON.parse(data._body);
            _this.responseData = result;
            console.log("login_data: ", _this.login_data);
            if (_this.responseData.token) {
                console.log(_this.responseData);
                localStorage.setItem("signData", JSON.stringify(_this.responseData));
                localStorage.setItem("token", JSON.stringify(_this.responseData.token));
                localStorage.setItem("token_type", JSON.stringify(_this.responseData.token_type));
                // this.getUser();
                // this.navCtrl.setRoot("MenuPage", { login: "student" });
                _this.navCtrl.setRoot("StudResetPasswordPage", {
                    process_type: _this.process_type
                });
            }
            else {
                // alert("Invalid User");
                _this.error = true;
                _this.loginError = "Not Valid";
                console.log("Invalid User");
            }
        }, function (err) {
            if (err.status === 401) {
                _this.error = true;
                _this.loginError = "Invalid credentials. Please enter valid details ";
                console.log("error log list: ", err);
                console.log("error log list: ", err.statusText);
                console.log("error log list: ", err.message);
                // alert("Unauthorised User");
                // redirect to the login route
                // or show a modal
            }
            if (err.status === 400) {
                _this.error = true;
                _this.loginError = "Incorrect OTP. Kindly enter correct OTP";
                console.log("error log list: ", err);
                // alert("Bad Request");
                // alert("Unauthorised User");
                // redirect to the login route
                // or show a modal
            }
            if (err.status === 0) {
                alert("Network Connection Error. Please try Again.");
                _this.navCtrl.setRoot("LoginPage");
                // redirect to the login route
                // or show a modal
            }
        });
    };
    VerifyOtpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-verify-otp",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/verify-otp/verify-otp.html"*/'<!--\n  Generated template for the VerifyOtpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>verifyOtp</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding class="otp_container">\n  <div class="logo text-center" style="text-align: center;">\n    <!-- <img src="assets/imgs/main-logo.png" class="img-fluid" alt="" /> -->\n  </div>\n\n  <div class="otp_back">\n    <div class="verify_text">\n      <h4>Verification Code</h4>\n    </div>\n    <div class="">\n      <form #verifyOtpForm="ngForm" (ngSubmit)="VerifyOtp()" autocomplete="on">\n        <ion-row>\n          <ion-col form_center>\n            <ion-list inset>\n              <ion-item class="login-row-otp">\n                <ion-label class="lblOtp" floating color="primary">\n                  <ion-icon ios="ios-lock" md="md-lock"></ion-icon>\n                  Enter OTP\n                </ion-label>\n\n                <ion-input\n                  class="otp"\n                  name="otp"\n                  type="password"\n                  required\n                  [(ngModel)]="this.login_data.password"\n                ></ion-input>\n              </ion-item>\n\n              <div *ngIf="error" class="alert alert-danger">\n                {{ loginError }}\n              </div>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class="form_center">\n            <button\n              ion-button\n              class="btn btn-block btn-rounded z-depth-1"\n              type="submit"\n              [disabled]="!verifyOtpForm.form.valid"\n            >\n              {{ buttonLabel }}\n            </button>\n          </ion-col>\n        </ion-row>\n      </form>\n    </div>\n    <div class="btm_txt">\n      Please enter your code from SMS<br />\n      we\'ve sent you\n    </div>\n  </div>\n  <!-- <div class="footer-otp">\n    <img src="assets/imgs/atc.png" alt="" />\n    <p class="font-small grey-text mt-1">Powered by ATC Online</p>\n  </div> -->\n</ion-content>\n'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/verify-otp/verify-otp.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], VerifyOtpPage);
    return VerifyOtpPage;
}());

//# sourceMappingURL=verify-otp.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyOtpPageModule", function() { return VerifyOtpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verify_otp__ = __webpack_require__(1056);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerifyOtpPageModule = /** @class */ (function () {
    function VerifyOtpPageModule() {
    }
    VerifyOtpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__verify_otp__["a" /* VerifyOtpPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__verify_otp__["a" /* VerifyOtpPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__verify_otp__["a" /* VerifyOtpPage */]]
        })
    ], VerifyOtpPageModule);
    return VerifyOtpPageModule;
}());

//# sourceMappingURL=verify-otp.module.js.map

/***/ })

});
//# sourceMappingURL=8.js.map