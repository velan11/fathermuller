webpackJsonp([24],{

/***/ 1036:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
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
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LandingPage = /** @class */ (function () {
    function LandingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.login_check();
    }
    LandingPage.prototype.ngOnInit = function () { };
    LandingPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad LandingPage");
    };
    LandingPage.prototype.facultyLogin = function () {
        this.navCtrl.push("LoginPage", { user_val: "f" });
    };
    LandingPage.prototype.parentLogin = function () {
        this.navCtrl.push("LoginPage", { user_val: "p" });
    };
    LandingPage.prototype.login_check = function () {
        var student_id = JSON.parse(localStorage.getItem("student_id"));
        var client_id = localStorage.getItem("client_id");
        //localStorage.getItem("login_user");
        console.log("login_check", student_id);
        console.log("client key", client_id);
        if (student_id != null) {
            this.navCtrl.setRoot("MenuPage", { login: "student" });
        }
        /*------ Faculty loginss check --------*/
        var faculty_details = JSON.parse(localStorage.getItem("facultyData"));
        var facMenu = localStorage.getItem("facultyMenuShow");
        console.log("faculty_details", faculty_details);
        if (faculty_details != null && facMenu === "true") {
            localStorage.setItem("facultyMenuShow", JSON.stringify(true));
            localStorage.setItem("parentMenuShow", JSON.stringify(false));
            this.navCtrl.setRoot("MenuPage", { login: "faculty" });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], LandingPage.prototype, "nav", void 0);
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-landing",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/landing/landing.html"*/'<ion-content class="choose-bg">\n  <div class="text-center select-col">\n    <img\n      src="../../assets/imgs/question.png"\n      width="60px"\n      style="margin-bottom: 20px;"\n    />\n    <p class="text1">I am a</p>\n    <p class="text2">Select your Section you want to be Sign in</p>\n\n    <div class="d-flex justify-content-around mt-5">\n      <div class="ml-1">\n        <!-- Remember me -->\n        <button\n          type="button"\n          ion-button\n          (click)="facultyLogin()"\n          class="btn btn-block z-depth-1 choose-bt"\n        >\n          Faculty\n        </button>\n      </div>\n      <div class="mr-1">\n        <!-- Forgot password -->\n        <button\n          ion-button\n          (click)="parentLogin()"\n          type="button"\n          class="btn btn-block z-depth-1 choose-bt"\n        >\n          Students\n        </button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <p>\n    <img src="../../assets/imgs/atc.jpg" /> Powered By ATC ONLINE\n  </p></ion-footer\n>\n'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/landing/landing.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing__ = __webpack_require__(1036);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LandingPageModule = /** @class */ (function () {
    function LandingPageModule() {
    }
    LandingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__landing__["a" /* LandingPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__landing__["a" /* LandingPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__landing__["a" /* LandingPage */]]
        })
    ], LandingPageModule);
    return LandingPageModule;
}());

//# sourceMappingURL=landing.module.js.map

/***/ })

});
//# sourceMappingURL=24.js.map