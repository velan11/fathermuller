webpackJsonp([32],{

/***/ 1027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fac_auth_service_fac_auth_service__ = __webpack_require__(347);
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
 * Generated class for the FacChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacChangePasswordPage = /** @class */ (function () {
    function FacChangePasswordPage(navCtrl, navParams, authFacService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authFacService = authFacService;
        this.updatePassword = { faculty_login_key: "", password: "", newPassword: "" };
    }
    FacChangePasswordPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FacChangePasswordPage");
    };
    FacChangePasswordPage.prototype.changePassword = function () {
        var _this = this;
        console.log("Faculty user_val", this.updatePassword);
        var fac_login_key = JSON.parse(localStorage.getItem("facultyData"));
        this.updatePassword.faculty_login_key = fac_login_key.faculty_login_key;
        if (this.updatePassword.newPassword != this.confirmPassword) {
            console.log("The password confirmation and new password must match.");
            this.updatePassword.password = "";
            this.updatePassword.newPassword = "";
            this.confirmPassword = "";
            this.error = true;
            this.chnagePasswordError =
                "The password confirmation and new password must match.";
        }
        else {
            this.authFacService
                .postData(this.updatePassword, "faculty-app-update-login-password")
                .subscribe(function (data) {
                console.log(data);
                var result = JSON.parse(data._body);
                _this.responseData = result;
                if (_this.responseData) {
                    console.log("change password response: ", _this.responseData);
                    alert("Password Updated Successfully");
                    // this.navCtrl.setRoot(this.navCtrl.getActive().component);
                    localStorage.clear();
                    _this.navCtrl.setRoot("LandingPage");
                }
                else {
                    // alert("Invalid User");
                    _this.error = true;
                    _this.chnagePasswordError = "Invalid Password";
                    console.log("Invalid User");
                }
            }, function (err) {
                if (err.status === 401) {
                    _this.error = true;
                    _this.chnagePasswordError =
                        "Invalid Credentials. Please Enter valid Details ";
                    console.log("error log list: ", err);
                    console.log("error log list: ", err.statusText);
                    console.log("error log list: ", err.message);
                    // this.navCtrl.setRoot(LoginPage);
                    // alert("Unauthorised User");
                    // redirect to the login route
                    // or show a modal
                }
                if (err.status === 0) {
                    alert("Network Connection Error. Please try Again.");
                    // localStorage.clear();
                    // this.navCtrl.setRoot("LandingPage");
                    // redirect to the login route
                    // or show a modal
                }
            });
        }
    };
    FacChangePasswordPage.prototype.reset = function () {
        // this.app.getRootNav().setRoot(FacAttendanceReportPage);
        this.navCtrl.setRoot("FacChangePasswordPage");
    };
    FacChangePasswordPage.prototype.back = function () {
        this.navCtrl.setRoot("FacHomePage");
    };
    FacChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-fac-change-password",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/faculty/fac-change-password/fac-change-password.html"*/'\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu" style="color:white"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>Change Password</ion-title>\n    <ion-buttons right (click)="back()">\n      <button ion-button icon-only>\n        <ion-icon\n          ios="ios-arrow-back"\n          md="md-arrow-back"\n          style="color:white"\n        ></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class="content-page">\n  <div>\n    <div class="inner-text text-center">\n      <img src="assets/imgs/student-icon.png" alt="" />\n      <div class="student-head"><h4>Change Password</h4></div>\n    </div>\n  </div>\n\n  <div class="form-attendance">\n    <form\n      #PasswordUpdate="ngForm"\n      (ngSubmit)="changePassword()"\n      autocomplete="on"\n    >\n      <ion-item>\n        <ion-label floating\n          >Old Password<span class="mandatory-asterick">*</span></ion-label\n        >\n        <ion-input\n          #input\n          name="password"\n          type="password"\n          required\n          [(ngModel)]="this.updatePassword.password"\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating\n          >New Password<span class="mandatory-asterick">*</span></ion-label\n        >\n        <ion-input\n          #input\n          name="password"\n          type="password"\n          required\n          [(ngModel)]="this.updatePassword.newPassword"\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating\n          >Confirm Password<span class="mandatory-asterick">*</span></ion-label\n        >\n        <ion-input\n          #input\n          name="password"\n          type="password"\n          required\n          [(ngModel)]="this.confirmPassword"\n        ></ion-input>\n      </ion-item>\n\n      <ion-row>\n        <ion-col col-6>\n          <div *ngIf="error" class="alert alert-danger">\n            {{ chnagePasswordError }}\n          </div>\n          <button\n            ion-button\n            class="btn btn-block login-btn btn-rounded z-depth-1"\n            [disabled]="disabled"\n            full\n            type="submit"\n            [disabled]="!PasswordUpdate.form.valid"\n          >\n            Update\n          </button>\n        </ion-col>\n        <!--\n          <ion-col>\n              <button ion-button color="light" (click)="reset()" full>Reset\n              </button>  (click)="cancel()"\n          </ion-col>\n        -->\n        <!-- </ion-row> -->\n\n        <!-- <ion-row> -->\n        <ion-col col-6>\n          <button\n            class="btn btn-block login-btn btn-rounded z-depth-1"\n            ion-button\n            color="light"\n            (click)="reset()"\n            full\n          >\n            Reset\n          </button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n</ion-content>\n<ion-footer>\n    <p><img src="../../assets/imgs/atc.jpg" /> Powered By ATC ONLINE</p>\n</ion-footer>'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/faculty/fac-change-password/fac-change-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_fac_auth_service_fac_auth_service__["a" /* FacAuthServiceProvider */]])
    ], FacChangePasswordPage);
    return FacChangePasswordPage;
}());

//# sourceMappingURL=fac-change-password.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacChangePasswordPageModule", function() { return FacChangePasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fac_change_password__ = __webpack_require__(1027);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FacChangePasswordPageModule = /** @class */ (function () {
    function FacChangePasswordPageModule() {
    }
    FacChangePasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__fac_change_password__["a" /* FacChangePasswordPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__fac_change_password__["a" /* FacChangePasswordPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__fac_change_password__["a" /* FacChangePasswordPage */]]
        })
    ], FacChangePasswordPageModule);
    return FacChangePasswordPageModule;
}());

//# sourceMappingURL=fac-change-password.module.js.map

/***/ })

});
//# sourceMappingURL=32.js.map