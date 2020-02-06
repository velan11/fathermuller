webpackJsonp([35],{

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutInstPage; });
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
 * Generated class for the AboutInstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutInstPage = /** @class */ (function () {
    function AboutInstPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
    }
    AboutInstPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad AboutInstPage");
    };
    AboutInstPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    AboutInstPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-about-inst",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/about-inst/about-inst.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu" style="color:white"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>About Institute</ion-title>\n    <ion-buttons right (click)="back()">\n      <button ion-button icon-only>\n        <ion-icon\n          ios="ios-arrow-back"\n          md="md-arrow-back"\n          style="color:white"\n        ></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class="content-page">\n  <div class="form-attendance">\n    <div class="content">\n      <h3 class="heading">About Us</h3>\n\n      <div>\n        <img src="../../assets/imgs/slide-1.jpg" class="slider-img" />\n      </div>\n\n      <p>\n        Father Muller Charitable Institutions have been touching the lives of\n        thousands of people for the last 136 long years. The institution founded\n        by Fr. Augustus Muller in 1880 stands out as a hallmark of medical\n        service and education in our country. With its motto of “Heal and\n        Comfort”, it is committed to bring healthcare solace to the suffering\n        humanity.\n      </p>\n\n      <p>\n        Our hospital focuses on installing sophisticated precision equipments,\n        non-invasive diagnosis and surgeries and other state-of-the-art\n        techniques with quality and ethical service. It provides super specialty\n        treatment with state of the art facilities with experienced doctors\n        following world class health care practices.\n      </p>\n\n      <p>\n        Father Muller Charitable Institutions are registered under the Societies\n        Registration Act of 1860 with SI. No. 1 of 1960. The institution lays a\n        strong focus to provide cutting edge services with a strong foundation\n        of medical education and research, reaching out to towering heights of\n        expertise in health care comparable to the best in India. To put it in a\n        nut shell, ‘The institution has rendered more than a century of service\n        to humanity with dedication, trust, excellence and nobility for\n        non-profit’\n      </p>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <p><img src="../../assets/imgs/atc.jpg" /> Powered By ATC ONLINE</p>\n</ion-footer>\n'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/about-inst/about-inst.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], AboutInstPage);
    return AboutInstPage;
}());

//# sourceMappingURL=about-inst.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutInstPageModule", function() { return AboutInstPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_inst__ = __webpack_require__(1016);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutInstPageModule = /** @class */ (function () {
    function AboutInstPageModule() {
    }
    AboutInstPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about_inst__["a" /* AboutInstPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__about_inst__["a" /* AboutInstPage */]),
            ],
        })
    ], AboutInstPageModule);
    return AboutInstPageModule;
}());

//# sourceMappingURL=about-inst.module.js.map

/***/ })

});
//# sourceMappingURL=35.js.map