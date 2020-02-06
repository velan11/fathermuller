webpackJsonp([14],{

/***/ 1046:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudContactUsPage; });
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
 * Generated class for the StudContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudContactUsPage = /** @class */ (function () {
    function StudContactUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StudContactUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudContactUsPage');
    };
    StudContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stud-contact-us',template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/student/stud-contact-us/stud-contact-us.html"*/'<!--\n  Generated template for the StudContactUsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Contact Us</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="content-page">\n  <div class="contact-us">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Address:</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <br />\n        <p>\n          St Aloysius Gonzaga School,<br />\n          P B No 720, K S Rao Road, Kodialbail,<br />\n          Mangalore-575003, Karnataka, India\n        </p>\n        <p><b>Phone:</b> 0824-2449724</p>\n        <p><b>Email: </b>principalsacgs12@gmail.com</p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n<ion-footer>\n    <p><img src="../../assets/imgs/atc.jpg" /> Powered By ATC ONLINE</p>\n</ion-footer>'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/student/stud-contact-us/stud-contact-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], StudContactUsPage);
    return StudContactUsPage;
}());

//# sourceMappingURL=stud-contact-us.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudContactUsPageModule", function() { return StudContactUsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stud_contact_us__ = __webpack_require__(1046);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StudContactUsPageModule = /** @class */ (function () {
    function StudContactUsPageModule() {
    }
    StudContactUsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__stud_contact_us__["a" /* StudContactUsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__stud_contact_us__["a" /* StudContactUsPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__stud_contact_us__["a" /* StudContactUsPage */]]
        })
    ], StudContactUsPageModule);
    return StudContactUsPageModule;
}());

//# sourceMappingURL=stud-contact-us.module.js.map

/***/ })

});
//# sourceMappingURL=14.js.map