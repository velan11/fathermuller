webpackJsonp([20],{

/***/ 1040:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudResetLoginPage; });
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
 * Generated class for the StudResetLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudResetLoginPage = /** @class */ (function () {
    function StudResetLoginPage(navCtrl, navParams, authService, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.events = events;
        this.parentOtp = {
            mobile_number: "",
            user_type: "PARENT",
            client_unique_key: "MJES",
            institution_abbreviation: "SAG",
            process_type: ""
        };
        console.log(this.navParams.get("process_type"));
        this.parentOtp.process_type = this.navParams.get("process_type");
        if (this.parentOtp.process_type == "register") {
            this.Page_heading = "Register";
            this.buttonLabel = "Register";
        }
        else {
            this.Page_heading = "Reset Password";
            this.buttonLabel = "Reset Password";
        }
    }
    StudResetLoginPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad StudResetLoginPage");
    };
    StudResetLoginPage.prototype.resetLogin = function () {
        //menu code
        var _this = this;
        this.user_val = "p";
        localStorage.setItem("user_val", JSON.stringify(this.user_val));
        console.log("user_val", this.user_val);
        this.ParentForm = true;
        this.FacultyForm = false;
        // this.studentForm = false;
        localStorage.setItem("user_logged_in", "parent");
        console.log("UserType:", "parent");
        localStorage.setItem("parentMenuShow", JSON.stringify(true));
        localStorage.setItem("facultyMenuShow", JSON.stringify(false));
        // localStorage.setItem("user_val", JSON.stringify(this.user_val));
        this.events.publish("user:parent");
        //end menu code
        console.log("user_val", this.user_val);
        localStorage.setItem("user_val", JSON.stringify(this.user_val));
        console.log("Parent otp:", this.parentOtp);
        this.authService.postlogData(this.parentOtp, "generate-otp").subscribe(function (data) {
            console.log(data);
            var result = JSON.parse(data._body);
            _this.responseData = result;
            if (_this.responseData.token) {
                console.log(_this.responseData);
                localStorage.setItem("parentOtpData", JSON.stringify(_this.responseData));
                localStorage.setItem("parentToken", JSON.stringify(_this.responseData.token));
                localStorage.setItem("parentMobileNumber", JSON.stringify(_this.responseData.mobile_number));
                localStorage.setItem("parentOtp", JSON.stringify(_this.responseData.otp));
                console.log("user_type ", _this.parentOtp.user_type);
                _this.navCtrl.setRoot("VerifyOtpPage", {
                    process_type: _this.parentOtp.process_type
                });
            }
            else {
                // alert("Invalid User");
                _this.error = true;
                _this.LoginError =
                    "Already registered!! Kindly login using mobile no and password.";
                console.log("Invalid User");
            }
        }, function (err) {
            if (err.status == 400) {
                _this.error = true;
                _this.LoginError = "Invalid credentials. Please enter valid details ";
                console.log("error log list: ", err);
                console.log("error log list: ", err.statusText);
                console.log("error log list: ", err.message);
                // this.navCtrl.setRoot(LoginPage);
                // alert("Unauthorised User");
                // redirect to the login route
                // or show a modal
            }
            if (err.status == 0) {
                alert("Network Connection Error. Please try Again.");
                // localStorage.clear();
                // this.navCtrl.setRoot("LandingPage");
                // this.navCtrl.setRoot(LoginPage);
                // redirect to the login route
                // or show a modal
            }
        });
    };
    StudResetLoginPage.prototype.back = function () {
        this.navCtrl.setRoot("LoginPage");
    };
    StudResetLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-stud-reset-login",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/stud-reset-login/stud-reset-login.html"*/'\n<ion-content class="login_container">\n  <span (click)="back()" class="back">\n    <ion-icon name="ios-arrow-back-outline"></ion-icon\n  ></span>\n  <!-- <div class="text-center" style="text-align: center;">\n    <img src="assets/imgs/main-logo.png" class="img-fluid" alt="" />\n  </div> -->\n  <!-- <div class="text-center " style="text-align: center;">\n     <img src="assets/imgs/main-logo.png" class="img-fluid" alt="" /> \n  </div> -->\n  <!-- <div>\n    <ion-item class="select-user">\n      <ion-label>User Type</ion-label>\n      <ion-select\n        interface="popover"\n        [(ngModel)]="user_val"\n        (ionChange)="User_Form()"\n      >\n        <ion-option value="p" selected="true">Parents</ion-option>\n        <ion-option value="f">Faculty</ion-option>\n       \n      </ion-select>\n    </ion-item>\n  </div> -->\n\n  <!-- Start Parent Form -->\n  <div class="login-block loginForm">\n    <div class="logo-img"> <img src="assets/imgs/logo.png"></div>\n    <div class="login-content">\n      <h3 class="login-text">{{ Page_heading }}</h3>\n      <form #ParentloginForm="ngForm" (ngSubmit)="resetLogin()" autocomplete="on">\n        <ion-row>\n          <ion-col>\n            <ion-list inset>\n              <ion-item no-lines class="login-row">\n                <ion-label class="lblLogin" color="default" floating>\n                  <ion-icon\n                    ios="ios-phone-portrait"\n                    md="md-phone-portrait"\n                    class="fa-unlock-alt"\n                  ></ion-icon\n                  >Mobile Number\n                </ion-label>\n                <!-- id="Form_input5" -->\n                <ion-input\n                  #input\n                  name="mobile_number"\n                  type="tel"\n                  id="Form-pass5"\n                  [(ngModel)]="this.parentOtp.mobile_number"\n                  required\n                >\n                </ion-input>\n                <!--\n                  <ion-icon name="eye" ios="ios-eye" md="md-eye"></ion-icon>\n                -->\n                <!--\n                  <button type="button" name="passwordIcon" ion-button clear item-end (click)="showPassword(input)" style="height:20px;" >\n                        <ion-icon name="eye" style="font-size:20px;"></ion-icon>\n                      </button>\n                -->\n              </ion-item>\n\n              <div *ngIf="error" class="alert alert-danger">\n                {{ LoginError }}\n              </div>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <button\n              ion-button\n              class="btn btn-block btn-rounded "\n              type="submit"\n              [disabled]="!ParentloginForm.form.valid"\n            >\n              {{ this.buttonLabel }}\n            </button>\n          </ion-col>\n        </ion-row>\n      </form>\n    </div>\n  </div>\n  <!-- End of Parent Form -->\n\n  <div>\n    <span (click)="back()" class="back">\n      <ion-icon name="ios-arrow-back-outline"></ion-icon\n    ></span>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/stud-reset-login/stud-reset-login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], StudResetLoginPage);
    return StudResetLoginPage;
}());

//# sourceMappingURL=stud-reset-login.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudResetLoginPageModule", function() { return StudResetLoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stud_reset_login__ = __webpack_require__(1040);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StudResetLoginPageModule = /** @class */ (function () {
    function StudResetLoginPageModule() {
    }
    StudResetLoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__stud_reset_login__["a" /* StudResetLoginPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__stud_reset_login__["a" /* StudResetLoginPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__stud_reset_login__["a" /* StudResetLoginPage */]]
        })
    ], StudResetLoginPageModule);
    return StudResetLoginPageModule;
}());

//# sourceMappingURL=stud-reset-login.module.js.map

/***/ })

});
//# sourceMappingURL=20.js.map