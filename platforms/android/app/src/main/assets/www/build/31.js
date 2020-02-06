webpackJsonp([31],{

/***/ 1028:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacEventsPage; });
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
 * Generated class for the FacEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacEventsPage = /** @class */ (function () {
    function FacEventsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FacEventsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FacEventsPage");
    };
    FacEventsPage.prototype.back = function () {
        this.navCtrl.setRoot("FacHomePage");
    };
    FacEventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-fac-events",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/faculty/fac-events/fac-events.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu" style="color:white"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>News / Events</ion-title>\n    <ion-buttons right (click)="back()">\n      <button ion-button icon-only>\n        <ion-icon\n          ios="ios-arrow-back"\n          md="md-arrow-back"\n          style="color:white"\n        ></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class="content-page">\n  <!-- <div class="form-attendance">\n    <div class="alert alert-danger">\n      No Data Found...\n    </div>\n    <ion-grid>\n    </ion-grid>\n  </div> -->\n  <ion-card>\n    <!-- <img src="../../../assets/imgs/notice- (1).jpg" /> -->\n    <div class="da">\n      <ion-card>\n        <p style="font-weight: bold;">\n          <span text-right>\n            Father Muller Charitable Institutions\n          </span>\n          <span float-right>15th Oct 2019</span>\n        </p>\n      </ion-card>\n      <!-- <ion-card>\n    <h3>\n      TITLE - GLOBAL Â HANDÂ Â WASHINGÂ Â DAY - OCTOBER 15THÂ 2019 held at\n      Father Mullerâ€™s\n    </h3>\n  </ion-card> -->\n      <ion-card>\n        <h3 style="margin-top: 15px;">\n          GLOBAL Â HANDÂ Â WASHINGÂ Â DAY - OCTOBER 15THÂ 2019 held at Father\n          Mullerâ€™s\n        </h3>\n        <p style="margin-top: 15px;">\n          <img\n            src="../../../assets/imgs/news.jpg"\n            style="height: 130px;margin-bottom: 15px;"\n          />\n\n          The Global Hand Washing day celebrated worldover on October 15th 2019\n          was observed by the Hospital Infection Control Department along with\n          the Nursing Service Department at Father Muller Medical College\n          Hospital. The inauguration was held in the morning at 7.15 am at the\n          entrance of the Asha Kiran block. Rev Father Richard Aloysius Coelho,\n          Director, Father Muller Charitable Institutions presided over the\n          function and Dr Uday Kumar, Medical superintendent, Father Muller\n          Medical College Hospital was the chief guest.\n        </p>\n        <a\n          text-center\n          style="margin: 15px;"\n          href="http://fathermuller.edu.in/fmci-news-display.php?id=1153"\n          >View More ...</a\n        >\n      </ion-card>\n    </div></ion-card\n  >\n</ion-content>\n<ion-footer>\n  <p><img src="../../assets/imgs/atc.jpg" /> Powered By ATC ONLINE</p>\n</ion-footer>\n'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/faculty/fac-events/fac-events.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], FacEventsPage);
    return FacEventsPage;
}());

//# sourceMappingURL=fac-events.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacEventsPageModule", function() { return FacEventsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fac_events__ = __webpack_require__(1028);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FacEventsPageModule = /** @class */ (function () {
    function FacEventsPageModule() {
    }
    FacEventsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fac_events__["a" /* FacEventsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__fac_events__["a" /* FacEventsPage */]),
            ],
        })
    ], FacEventsPageModule);
    return FacEventsPageModule;
}());

//# sourceMappingURL=fac-events.module.js.map

/***/ })

});
//# sourceMappingURL=31.js.map