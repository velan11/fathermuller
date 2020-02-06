webpackJsonp([28],{

/***/ 1031:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacProfilePage; });
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
 * Generated class for the FacProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacProfilePage = /** @class */ (function () {
    function FacProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getUsername();
    }
    FacProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FacProfilePage');
    };
    FacProfilePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    FacProfilePage.prototype.getUsername = function () {
        this.faculty_login_key1 = JSON.parse(localStorage.getItem("facultyData"));
        this.user_name = this.faculty_login_key1.user_name;
        console.log("username", this.user_name);
    };
    FacProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-fac-profile',template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/faculty/fac-profile/fac-profile.html"*/'<!--\n  Generated template for the FacProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar>\n        <ion-buttons left>\n          <button ion-button icon-only menuToggle>\n            <ion-icon name="menu" style="color:white"></ion-icon>\n          </button>\n        </ion-buttons>\n    \n        <ion-title>Profile</ion-title>\n        <ion-buttons right (click)="back()">\n          <button ion-button icon-only>\n            <ion-icon\n              ios="ios-arrow-back"\n              md="md-arrow-back"\n              style="color:white"\n            ></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content padding class="content-page">\n    <div class="form-attendance">\n        <ion-item>\n            <ion-icon name="person" item-start large></ion-icon>\n            <h2>Full Name</h2>\n            <p style="margin-top: 5px;">{{user_name}}</p>\n          </ion-item>\n          \n          <ion-item>\n            <ion-icon name="calendar" item-start large></ion-icon>\n            <h2>Joining Date</h2>\n            <p style="margin-top: 5px;">12 Oct 2008</p>\n          </ion-item>\n          <ion-item>\n            <ion-icon name="time" item-start large></ion-icon>\n            <h2>Date Of Birth</h2>\n            <p style="margin-top: 5px;">22 Dec 1988</p>\n          </ion-item>\n          <ion-item>\n            <ion-icon name="school" item-start large></ion-icon>\n            <h2>Institute</h2>\n            <p style="margin-top: 5px;">Father Muller Charitable Institutions</p>\n          </ion-item>\n          <ion-item>\n            <ion-icon name="book" item-start large></ion-icon>\n            <h2>Course Name</h2>\n            <p style="margin-top: 5px;" text-wrap>MBBS</p>\n          </ion-item>\n    </div>\n</ion-content>\n<ion-footer>\n      <p><img src="../../assets/imgs/atc.jpg" /> Powered By ATC ONLINE</p>\n  </ion-footer>'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/faculty/fac-profile/fac-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], FacProfilePage);
    return FacProfilePage;
}());

//# sourceMappingURL=fac-profile.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacProfilePageModule", function() { return FacProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fac_profile__ = __webpack_require__(1031);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FacProfilePageModule = /** @class */ (function () {
    function FacProfilePageModule() {
    }
    FacProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fac_profile__["a" /* FacProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__fac_profile__["a" /* FacProfilePage */]),
            ],
        })
    ], FacProfilePageModule);
    return FacProfilePageModule;
}());

//# sourceMappingURL=fac-profile.module.js.map

/***/ })

});
//# sourceMappingURL=28.js.map