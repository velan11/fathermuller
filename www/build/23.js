webpackJsonp([23],{

/***/ 1037:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fac_auth_service_fac_auth_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fcm_fcm__ = __webpack_require__(374);
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
 * Generated class for the LoginPagdsae page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    /*-----------end Faculty Login variables--------*/
    function LoginPage(pt, navCtrl, navParams, authService, fcm, authFacService, events) {
        this.pt = pt;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.fcm = fcm;
        this.authFacService = authFacService;
        this.events = events;
        this.parentOtp = {
            mobile_number: "",
            password: "",
            user_type: "PARENT",
            client_unique_key: "MJES",
            institution_abbreviation: "SAG"
            // client_unique_key: "MJES",
            // institution_abbreviation: "SAG"
            // client_id: "3",
            // institution_abbreviation: "SAPG"
        };
        this.ParentForm = true;
        /*-----------Faculty Login variables--------*/
        this.facultyData = { username: "", password: "", clientkey: "MJES" }; //MJES ALOYSIUS
        this.login_check();
        // this.User_Form();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad LoginPage");
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.User_Form();
    };
    LoginPage.prototype.User_Form = function () {
        if (this.user_val == undefined) {
            this.user_val = this.navParams.get("user_val");
            console.log("login user", this.user_val);
            localStorage.setItem("login_user", this.user_val);
        }
        console.log("userval:", this.user_val);
        if (this.user_val == "f") {
            this.FacultyForm = true;
            this.ParentForm = false;
            // this.studentForm = false;
            localStorage.setItem("user_logged_in", "faculty");
            console.log("UserType:", "faculty");
            localStorage.setItem("facultyMenuShow", JSON.stringify(true));
            localStorage.setItem("parentMenuShow", JSON.stringify(false));
            localStorage.setItem("studentMenuShow", JSON.stringify(false));
            this.events.publish("user:faculty");
        }
        else if (this.user_val == "p") {
            this.ParentForm = true;
            this.FacultyForm = false;
            // this.studentForm = false;
            localStorage.setItem("user_logged_in", "parent");
            console.log("UserType:", "parent");
            localStorage.setItem("parentMenuShow", JSON.stringify(true));
            localStorage.setItem("facultyMenuShow", JSON.stringify(false));
            localStorage.setItem("studentMenuShow", JSON.stringify(false));
            // localStorage.setItem("user_val", JSON.stringify(this.user_val));
            this.events.publish("user:parent");
        }
        else if (this.user_val == "s") {
            this.FacultyForm = false;
            this.ParentForm = false;
            // this.studentForm = true;
            localStorage.setItem("user_logged_in", "student");
            console.log("UserType:", "student");
            localStorage.setItem("studentMenuShow", JSON.stringify(true));
            localStorage.setItem("parentMenuShow", JSON.stringify(false));
            localStorage.setItem("facultyMenuShow", JSON.stringify(false));
            // localStorage.setItem("user_val", JSON.stringify(this.user_val));
            this.events.publish("user:student");
        }
    };
    LoginPage.prototype.showPassword = function (input) {
        console.log("input type: ", input.type);
        input.type = input.type === "password" ? "text" : "password";
        input.setFocus();
        console.log("input icon: ", this.icon);
        this.icon = this.icon === "eye-off" ? "eye" : "eye-off";
        //  input.type = input.type === 'text' ?  'password' : 'text';
    };
    LoginPage.prototype.login_check = function () {
        var student_id = JSON.parse(localStorage.getItem("student_id"));
        var client_id = localStorage.getItem("client_id");
        console.log("login_check", student_id);
        console.log("client key", client_id);
        if (student_id != null) {
            this.fcm.getToken();
            this.navCtrl.setRoot("MenuPage", { login: "student" });
        }
        /*------ Faculty login check --------*/
        var faculty_details = JSON.parse(localStorage.getItem("facultyData"));
        var facMenu = localStorage.getItem("facultyMenuShow");
        console.log("faculty_details", faculty_details);
        if (faculty_details != null && facMenu === "true") {
            localStorage.setItem("facultyMenuShow", JSON.stringify(true));
            localStorage.setItem("parentMenuShow", JSON.stringify(false));
            this.parentMenuShow = false;
            // this.studentMenuShow = false;
            this.facultyMenuShow = true;
            this.navCtrl.setRoot("MenuPage", { login: "faculty" });
        }
    };
    // switchLanguage(x) {
    //   console.log(this.lang.SIGNINPAGE);
    //   this.translate.use(this.lang);
    //   if (this.lang === "ar") {
    //     this.pt.setDir("rtl", true);
    //     this.translate.setDefaultLang(this.lang);
    //   } else {
    //     this.pt.setDir("ltr", true);
    //     this.translate.setDefaultLang(this.lang);
    //   }
    // }
    LoginPage.prototype.login = function () {
        //menu code
        var _this = this;
        if (this.user_val == undefined) {
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
        }
        else {
            this.user_val = JSON.parse(localStorage.getItem("user_val"));
            console.log("user_val", this.user_val);
        }
        //end menu code
        console.log("user_val", this.user_val);
        localStorage.setItem("user_val", JSON.stringify(this.user_val));
        console.log("Parent otp:", this.parentOtp);
        this.authService.postlogData(this.parentOtp, "login").subscribe(function (data) {
            console.log(data);
            var result = JSON.parse(data._body);
            _this.responseData = result;
            if (_this.responseData.token) {
                console.log(_this.responseData);
                // localStorage.setItem(
                //   "parentOtpData",
                //   JSON.stringify(this.responseData)
                // );
                // localStorage.setItem(
                //   "parentToken",
                //   JSON.stringify(this.responseData.token)
                // );
                // localStorage.setItem(
                //   "parentMobileNumber",
                //   JSON.stringify(this.responseData.mobile_number)
                // );
                // localStorage.setItem(
                //   "parentOtp",
                //   JSON.stringify(this.responseData.otp)
                // );
                localStorage.setItem("token", JSON.stringify(_this.responseData.token));
                localStorage.setItem("token_type", JSON.stringify(_this.responseData.token_type));
                console.log("user_type ", _this.parentOtp.user_type);
                _this.navCtrl.setRoot("MenuPage", { login: "student" });
            }
            else {
                // alert("Invalid User");
                _this.error = true;
                _this.LoginError = "Invalid User";
                console.log("Invalid User");
            }
        }, function (err) {
            if (err.status == 400) {
                _this.error = true;
                _this.LoginError = "Invalid Credentials. Please enter valid details ";
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
    /*----------Faculty Login Code----------*/
    LoginPage.prototype.facultyLogin = function () {
        var _this = this;
        localStorage.setItem("user_val", JSON.stringify(this.user_val));
        this.authFacService
            .postlogData(this.facultyData, "faculty-signin")
            .subscribe(function (data) {
            console.log(data);
            var result = JSON.parse(data._body);
            _this.responseData = result;
            if (_this.responseData.faculty_login_key) {
                console.log(_this.responseData);
                localStorage.setItem("facultyData", JSON.stringify(_this.responseData));
                localStorage.setItem("clientkey", _this.facultyData.clientkey);
                console.log("clientKey ", _this.facultyData.clientkey);
                _this.navCtrl.setRoot("MenuPage", { login: "faculty" });
            }
            else {
                // alert("Invalid User");
                _this.error = true;
                _this.loginError =
                    "You have not been assigned to any of the subject";
                console.log("Invalid User");
            }
        }, function (err) {
            if (err.status === 401) {
                _this.error = true;
                _this.loginError =
                    "Invalid Credentials. Please enter valid details ";
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
                // this.navCtrl.setRoot(LoginPage);
                // redirect to the login route
                // or show a modal
            }
        });
    };
    /*----------------End Faculty Code-----------------*/
    LoginPage.prototype.back = function () {
        this.navCtrl.setRoot("LandingPage");
    };
    LoginPage.prototype.register = function (type) {
        console.log("processType:", type);
        this.navCtrl.push("StudResetLoginPage", { process_type: type });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-login",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/login/login.html"*/'<ion-content class="login_container">\n  <span (click)="back()" class="back">\n    <ion-icon name="ios-arrow-back-outline"></ion-icon\n  ></span>\n  <!-- <div class="text-center" style="text-align: center;">\n    <img src="assets/imgs/login-bg11.jpg" class="img-fluid" alt="" />\n  </div> -->\n\n  <!-- Start Parent Form -->\n  <div *ngIf="ParentForm">\n    <div class="login-block loginForm">\n      <div class="logo-img"><img src="assets/imgs/logo.png" /></div>\n      <div class="login-content">\n        <h3 class="login-text">Student Login</h3>\n        <form #ParentloginForm="ngForm" (ngSubmit)="login()" autocomplete="on">\n          <ion-row>\n            <ion-col>\n              <ion-list inset>\n                <ion-item no-lines class="login-row">\n                  <ion-label class="lblLogin" color="default" floating>\n                    <ion-icon\n                      ios="ios-phone-portrait"\n                      md="md-phone-portrait"\n                      class="fa-unlock-alt"\n                    ></ion-icon>\n                    Enter Mobile Number\n                  </ion-label>\n                  <!-- id="Form_input5" -->\n                  <ion-input\n                    #input\n                    name="mobile_number"\n                    type="tel"\n                    clearOnEdit="false"\n                    id="Form-pass5"\n                    required\n                    [(ngModel)]="this.parentOtp.mobile_number"\n                  ></ion-input>\n                </ion-item>\n                <ion-item no-lines class="login-row">\n                  <ion-label class="lblLogin" color="default" floating>\n                    <ion-icon\n                      ios="ios-lock"\n                      md="md-lock"\n                      class="passwd"\n                    ></ion-icon>\n                    Enter Password\n                  </ion-label>\n                  <!-- id="Form_input5" -->\n                  <ion-input\n                    #input\n                    name="password"\n                    type="password"\n                    clearOnEdit="false"\n                    id="Form-pass5"\n                    [(ngModel)]="this.parentOtp.password"\n                    required\n                  >\n                  </ion-input>\n                </ion-item>\n                <ion-item class="showPassword l">\n                  <ion-label class="label">Show Password</ion-label>\n                  <ion-checkbox\n                    class="checkPassword"\n                    color="secondary"\n                    name="showPassword"\n                    (click)="showPassword(input)"\n                    required\n                  ></ion-checkbox>\n                </ion-item>\n                <ion-item class="forgotPassword l">\n                  <ion-label (click)="register(\'forgotPassword\')"\n                    >Forgot Password</ion-label\n                  >\n                </ion-item>\n                <div *ngIf="error" class="alert alert-danger">\n                  {{ LoginError }}\n                </div>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <button\n                ion-button\n                class="btn btn-rounded "\n                type="submit"\n                color="primary"\n                [disabled]="!ParentloginForm.form.valid"\n              >\n                Go\n              </button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </div>\n    </div>\n    <div class="btmText">\n      Haven\'t Account\n      <!-- <span class="register" (click)="register(\'register\')">Register</span -->\n      <br />\n      <button\n        (click)="register(\'register\')"\n        ion-button\n        style="background: #39668c!important;border-radius: 4px;"\n        color="secondary"\n      >\n        Create Account\n      </button>\n      <!-- <span class="register" (click)="register(\'forgotPassword\')">\n            Forgot Password</span\n          > -->\n    </div>\n  </div>\n\n  <!-- End of Parent Form -->\n\n  <!-- Start Faculty Login form -->\n  <div *ngIf="FacultyForm" class="login-block-faculty loginForm">\n    <div class="logo-img"><img src="assets/imgs/logo.png" /></div>\n    <div class="login-content">\n      <h3 class="login-text">Faculty Login</h3>\n      <form\n        #FacultyloginForm="ngForm"\n        (ngSubmit)="facultyLogin()"\n        autocomplete="on"\n      >\n        <ion-row>\n          <ion-col>\n            <ion-list inset>\n              <ion-item no-lines class="login-row">\n                <ion-label class="lblLogin" color="default" floating>\n                  <ion-icon ios="ios-person" md="md-person"></ion-icon>\n                  Enter Username\n                </ion-label>\n                <!-- id="Form_input5" -->\n                <ion-input\n                  #input\n                  name="username"\n                  type="text"\n                  id="Form-pass5"\n                  required\n                  [(ngModel)]="this.facultyData.username"\n                ></ion-input>\n              </ion-item>\n              <ion-item no-lines class="login-row">\n                <ion-label class="lblLogin" color="default" floating>\n                  <ion-icon\n                    ios="ios-lock"\n                    md="md-lock"\n                    class="passwd"\n                  ></ion-icon\n                  >Enter Password\n                </ion-label>\n                <!-- id="Form_input5" -->\n                <ion-input\n                  #input\n                  clearOnEdit="false"\n                  name="password"\n                  type="password"\n                  id="Form-pass5"\n                  required\n                  [(ngModel)]="this.facultyData.password"\n                ></ion-input>\n              </ion-item>\n              <ion-item class="showPassword l">\n                <ion-label class="label">Show Password</ion-label>\n                <ion-checkbox\n                  class="checkPassword"\n                  color="secondary"\n                  name="showPassword"\n                  (click)="showPassword(input)"\n                ></ion-checkbox>\n              </ion-item>\n\n              <div *ngIf="error" class="alert alert-danger">\n                {{ loginError }}\n              </div>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <button\n              ion-button\n              class="btn btn-rounded z-depth-1"\n              type="submit"\n              [disabled]="!FacultyloginForm.form.valid"\n            >\n              Go\n            </button>\n          </ion-col>\n        </ion-row>\n      </form>\n    </div>\n  </div>\n  <!-- end Faculty Login form -->\n  <div>\n    <span (click)="back()" class="back">\n      <ion-icon name="ios-arrow-back-outline"></ion-icon\n    ></span>\n  </div>\n</ion-content>\n<ion-footer>\n  <p><img src="../../assets/imgs/atc.jpg" /> Powered By ATC ONLINE</p>\n</ion-footer>\n'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_fcm_fcm__["a" /* FcmProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_fac_auth_service_fac_auth_service__["a" /* FacAuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(1037);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ })

});
//# sourceMappingURL=23.js.map