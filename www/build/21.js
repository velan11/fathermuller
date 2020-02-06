webpackJsonp([21],{

/***/ 1039:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(371);
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
 * Generated class for the ReportcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportcardPage = /** @class */ (function () {
    function ReportcardPage(navCtrl, navParams, photoViewer, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.photoViewer = photoViewer;
        this.file = file;
    }
    ReportcardPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ReportcardPage");
    };
    ReportcardPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ReportcardPage.prototype.viewPhoto = function () {
        var _this = this;
        var imageName = "amithaaa.jpeg";
        var ROOT_DIRECTORY = "file:///sdcard//";
        var downloadFolderName = "tempDownloadFolder";
        //Create a folder in memory location
        this.file
            .createDir(ROOT_DIRECTORY, downloadFolderName, true)
            .then(function (entries) {
            //Copy our asset/img/freaky_jolly_logo.jpg to folder we created
            _this.file
                .copyFile(_this.file.applicationDirectory + "www/assets/imgs/", imageName, ROOT_DIRECTORY + downloadFolderName + "//", imageName)
                .then(function (entries) {
                _this.photoViewer.show(ROOT_DIRECTORY + downloadFolderName + "/" + imageName, "Do you want to Share ", { share: true });
            })
                .catch(function (error) {
                alert("1 error " + JSON.stringify(error));
            });
        })
            .catch(function (error) {
            alert("2 error" + JSON.stringify(error));
        });
    };
    ReportcardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-reportcard",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/reportcard/reportcard.html"*/'<!--\n  Generated template for the ReportcardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu" style="color:white"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>Report Card</ion-title>\n    <ion-buttons right (click)="back()">\n      <button ion-button icon-only>\n        <ion-icon\n          ios="ios-arrow-back"\n          md="md-arrow-back"\n          style="color:white"\n        ></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h2 text-center style="margin-top: 25px;">Report Card</h2>\n  <img\n    style="padding: 10px;"\n    src="../../../assets/imgs/amithaaa.jpeg"\n    (click)="viewPhoto()"\n  />\n  <p\n    style="color: #5282af;font-size: 11px;text-align: right;\n        margin-right: 15px;"\n  >\n    *Click to View notice and SHARE\n  </p>\n</ion-content>\n'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/reportcard/reportcard.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__["a" /* PhotoViewer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__["a" /* PhotoViewer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */]) === "function" && _d || Object])
    ], ReportcardPage);
    return ReportcardPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=reportcard.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportcardPageModule", function() { return ReportcardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportcard__ = __webpack_require__(1039);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReportcardPageModule = /** @class */ (function () {
    function ReportcardPageModule() {
    }
    ReportcardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reportcard__["a" /* ReportcardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__reportcard__["a" /* ReportcardPage */]),
            ],
        })
    ], ReportcardPageModule);
    return ReportcardPageModule;
}());

//# sourceMappingURL=reportcard.module.js.map

/***/ })

});
//# sourceMappingURL=21.js.map