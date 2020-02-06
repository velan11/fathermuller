webpackJsonp([11],{

/***/ 1052:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudResetPasswordPage; });
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
 * Generated class for the StudResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudResetPasswordPage = /** @class */ (function () {
    function StudResetPasswordPage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.resetPasswd = {
            password: "",
            password_confirmation: ""
        };
        console.log(this.navParams.get("process_type"));
        this.process_type = this.navParams.get("process_type");
        if (this.process_type == "register") {
            this.pageHeading = "Create Password";
            this.buttonLabel = "Register";
        }
        else {
            this.pageHeading = "Reset Password";
            this.buttonLabel = "Reset Password";
        }
    }
    StudResetPasswordPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad StudResetPasswordPage");
    };
    StudResetPasswordPage.prototype.showPassword = function (input) {
        console.log("input type: ", input.type);
        input.type = input.type === "password" ? "text" : "password";
        input.setFocus();
        console.log("input icon: ", this.icon);
        this.icon = this.icon === "eye-off" ? "eye" : "eye-off";
        //  input.type = input.type === 'text' ?  'password' : 'text';
    };
    StudResetPasswordPage.prototype.setPassword = function () {
        var _this = this;
        console.log("login_data: ", this.resetPasswd);
        this.authService
            .postloginData(this.resetPasswd, "password-change")
            .subscribe(function (data) {
            console.log(data);
            var result = JSON.parse(data._body);
            _this.responseData = result;
            console.log("login_data: ", _this.resetPasswd);
            if (_this.responseData.message) {
                console.log(_this.responseData);
                // localStorage.setItem("signData", JSON.stringify(this.responseData));
                // localStorage.setItem(
                //   "token",
                //   JSON.stringify(this.responseData.token)
                // );
                // localStorage.setItem(
                //   "token_type",
                //   JSON.stringify(this.responseData.token_type)
                // );
                // this.getUser();
                localStorage.clear();
                alert(_this.responseData.message);
                _this.navCtrl.setRoot("LoginPage");
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
                _this.loginError = "Minimum password length is 7! ";
                console.log("error log list: ", err);
                console.log("error log list: ", err.statusText);
                console.log("error log list: ", err.message);
                // alert("Unauthorised User");
                // redirect to the login route
                // or show a modal
            }
            if (err.status === 400) {
                _this.error = true;
                _this.loginError = "Minimum password length is 7! ";
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
    StudResetPasswordPage.prototype.checkConfirmPassword = function () {
        console.log("paswd: ", this.resetPasswd.password);
        console.log("confirm paswd: ", this.resetPasswd.password_confirmation);
        if (this.resetPasswd.password == this.resetPasswd.password_confirmation) {
            this.error = true;
            this.loginError = "";
            this.setPassword();
            console.log("true val");
        }
        else {
            // localStorage.clear();
            this.error = true;
            this.loginError = "Password Mismatch";
            console.log("false val");
        }
    };
    StudResetPasswordPage.prototype.ionViewWillLeave = function () {
        localStorage.clear();
    };
    StudResetPasswordPage.prototype.back = function () {
        localStorage.clear();
        this.navCtrl.setRoot("LoginPage");
    };
    StudResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-stud-reset-password",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/student/stud-reset-password/stud-reset-password.html"*/'<!--\n  Generated template for the StudResetPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>studResetPassword</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content class="login_container">\n  <span (click)="back()" class="back">\n    <ion-icon name="ios-arrow-back-outline"></ion-icon\n  ></span>\n  <div class="text-center" style="text-align: center;">\n    <img src="assets/imgs/main-logo.png" class="img-fluid" alt="" />\n  </div>\n\n  <!-- Start Parent Login form -->\n  <div class="login-block-faculty loginForm">\n    <h3 class="login-text">{{ pageHeading }}</h3>\n    <form\n      #ParentloginForm="ngForm"\n      (ngSubmit)="checkConfirmPassword()"\n      autocomplete="on"\n    >\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item no-lines class="login-row">\n              <ion-label class="lblLogin" color="primary" floating>\n                <ion-icon\n                  ios="ios-lock"\n                  class="paswdIcon"\n                  md="md-lock"\n                ></ion-icon>\n                Enter Password\n              </ion-label>\n              <!-- id="Form_input5" -->\n              <ion-input\n                #input\n                name="password"\n                type="password"\n                id="Form-pass5"\n                required\n                [(ngModel)]="this.resetPasswd.password"\n              ></ion-input>\n              <!--\n                <ion-icon name="eye" ios="ios-eye" md="md-eye"></ion-icon>\n              -->\n              <!--\n                <button type="button" name="passwordIcon" ion-button clear item-end (click)="showPassword(input)" style="height:20px;" >\n                     <ion-icon name="eye" style="font-size:20px;"></ion-icon>\n                   </button>\n              -->\n            </ion-item>\n            <ion-item no-lines class="login-row">\n              <ion-label class="lblLogin" color="primary" floating>\n                <ion-icon\n                  ios="ios-lock"\n                  class="paswdIcon"\n                  md="md-lock"\n                ></ion-icon>\n                Confirm Password\n              </ion-label>\n              <!-- id="Form_input5" -->\n              <ion-input\n                #input\n                clearOnEdit="false"\n                name="confirm_password"\n                type="password"\n                id="Form-pass5"\n                required\n                [(ngModel)]="this.resetPasswd.password_confirmation"\n              ></ion-input>\n            </ion-item>\n            <ion-item class="showPassword">\n              <ion-label>Show Password</ion-label>\n              <ion-checkbox\n                class="checkPassword"\n                color="secondary"\n                name="showPassword"\n                (click)="showPassword(input)"\n              ></ion-checkbox>\n            </ion-item>\n\n            <div *ngIf="error" class="alert alert-danger">{{ loginError }}</div>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button\n            ion-button\n            class="btn btn-block btn-rounded z-depth-1"\n            type="submit"\n            [disabled]="!ParentloginForm.form.valid"\n          >\n            {{ buttonLabel }}\n          </button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n  <!-- end Faculty Login form -->\n  <div>\n    <span (click)="back()" class="back">\n      <ion-icon name="ios-arrow-back-outline"></ion-icon\n    ></span>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/student/stud-reset-password/stud-reset-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], StudResetPasswordPage);
    return StudResetPasswordPage;
}());

//# sourceMappingURL=stud-reset-password.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudResetPasswordPageModule", function() { return StudResetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stud_reset_password__ = __webpack_require__(1052);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StudResetPasswordPageModule = /** @class */ (function () {
    function StudResetPasswordPageModule() {
    }
    StudResetPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__stud_reset_password__["a" /* StudResetPasswordPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__stud_reset_password__["a" /* StudResetPasswordPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__stud_reset_password__["a" /* StudResetPasswordPage */]]
        })
    ], StudResetPasswordPageModule);
    return StudResetPasswordPageModule;
}());

//# sourceMappingURL=stud-reset-password.module.js.map

/***/ })

});
//# sourceMappingURL=11.js.map