webpackJsonp([29],{

/***/ 1030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacNoticesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_viewer__ = __webpack_require__(372);
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
 * Generated class for the FacNoticesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacNoticesPage = /** @class */ (function () {
    function FacNoticesPage(navCtrl, navParams, photoViewer, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.photoViewer = photoViewer;
        this.file = file;
    }
    FacNoticesPage.prototype.viewPhoto = function () {
        var _this = this;
        var imageName = "notice.jpg";
        var ROOT_DIRECTORY = "file:///sdcard//";
        var downloadFolderName = "tempDownloadFolder";
        //Create a folder in memory location
        this.file
            .createDir(ROOT_DIRECTORY, downloadFolderName, true)
            .then(function (entries) {
            //Copy our asset/img/freaky_jolly_logo.jpg to folder we created
            _this.file
                .copyFile(_this.file.applicationDirectory + "www/assets/images/", imageName, ROOT_DIRECTORY + downloadFolderName + "//", imageName)
                .then(function (entries) {
                _this.photoViewer.show(ROOT_DIRECTORY + downloadFolderName + "/" + imageName, "Do you want to Share Notice", { share: true });
            })
                .catch(function (error) {
                alert("1 error " + JSON.stringify(error));
            });
        })
            .catch(function (error) {
            alert("2 error" + JSON.stringify(error));
        });
    };
    FacNoticesPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FacNoticesPage");
    };
    FacNoticesPage.prototype.back = function () {
        this.navCtrl.setRoot("FacHomePage");
    };
    FacNoticesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-fac-notices",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/faculty/fac-notices/fac-notices.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu" style="color:white"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>Circular and Notice</ion-title>\n    <ion-buttons right (click)="back()">\n      <button ion-button icon-only>\n        <ion-icon\n          ios="ios-arrow-back"\n          md="md-arrow-back"\n          style="color:white"\n        ></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class="content-page">\n  <!-- <div class="form-attendance">\n    <div class="alert alert-danger">\n        No Data Found...\n    </div>\n    <ion-grid>\n    </ion-grid>\n  </div> -->\n\n  <!-- <ion-card>\n    <p style="font-weight: bold;">\n      <span text-right>\n        Father Muller Charitable Institutions\n      </span>\n      <span float-right>15th Oct 2019</span>\n    </p>\n  </ion-card>\n\n  <ion-card>\n    <h3 style="margin-top: 15px;">\n      GLOBAL Â HANDÂ Â WASHINGÂ Â DAY - OCTOBER 15THÂ 2019 held at Father\n      Mullerâ€™s\n    </h3>\n    <p style="margin-top: 15px;">\n      <img\n        src="../../../assets/imgs/news.jpg"\n        style="height: 130px;margin-bottom: 15px;"\n      />\n\n      The Global Hand Washing day celebrated worldover on October 15th 2019 was\n      observed by the Hospital Infection Control Department along with the\n      Nursing Service Department at Father Muller Medical College Hospital. The\n      inauguration was held in the morning at 7.15 am at the entrance of the\n      Asha Kiran block. Rev Father Richard Aloysius Coelho, Director, Father\n      Muller Charitable Institutions presided over the function and Dr Uday\n      Kumar, Medical superintendent, Father Muller Medical College Hospital was\n      the chief guest.\n    </p>\n    <a\n      text-center\n      style="margin: 15px;"\n      href="http://fathermuller.edu.in/fmci-news-display.php?id=1153"\n      >View More ...</a\n    >\n  </ion-card> -->\n\n  <ion-card>\n    <!-- <img src="../../../assets/imgs/notice- (1).jpg" /> -->\n    <div class="da">\n      <ion-card>\n        <ion-row (click)="viewPhoto()">\n          <ion-col size="5">\n            Notice of Office Closure\n          </ion-col>\n\n          <ion-col size="7">\n            <!-- <img src="assets/img/exampleimg.jpg" /> -->\n\n            <img src="../../../assets/imgs/notice.jpg" height="50" />\n          </ion-col>\n        </ion-row>\n      </ion-card>\n\n      <ion-card>\n        <ion-row (click)="viewPhoto()">\n          <ion-col size="5">\n            Notice of Acknowlegement\n          </ion-col>\n\n          <ion-col size="7">\n            <!-- <img src="assets/img/exampleimg.jpg" /> -->\n\n            <img src="../../../assets/imgs/notice.jpg" height="50" />\n          </ion-col>\n        </ion-row>\n      </ion-card>\n\n      <ion-card>\n        <ion-row (click)="viewPhoto()">\n          <ion-col size="5">\n            Examination Notice List\n          </ion-col>\n\n          <ion-col size="7">\n            <!-- <img src="assets/img/exampleimg.jpg" /> -->\n\n            <img src="../../../assets/imgs/notice.jpg" height="50" />\n          </ion-col>\n        </ion-row>\n      </ion-card>\n      <p\n        style="color: #5282af;font-size: 11px;text-align: right;\n        margin-right: 15px;"\n      >\n        *Click to View notice and SHARE\n      </p>\n    </div></ion-card\n  >\n</ion-content>\n<ion-footer>\n  <p><img src="../../assets/imgs/atc.jpg" /> Powered By ATC ONLINE</p>\n</ion-footer>\n'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/faculty/fac-notices/fac-notices.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */]])
    ], FacNoticesPage);
    return FacNoticesPage;
}());

//# sourceMappingURL=fac-notices.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacNoticesPageModule", function() { return FacNoticesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fac_notices__ = __webpack_require__(1030);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FacNoticesPageModule = /** @class */ (function () {
    function FacNoticesPageModule() {
    }
    FacNoticesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fac_notices__["a" /* FacNoticesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__fac_notices__["a" /* FacNoticesPage */]),
            ],
        })
    ], FacNoticesPageModule);
    return FacNoticesPageModule;
}());

//# sourceMappingURL=fac-notices.module.js.map

/***/ })

});
//# sourceMappingURL=29.js.map