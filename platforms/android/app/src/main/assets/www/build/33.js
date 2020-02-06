webpackJsonp([33],{

/***/ 1018:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvesPage; });
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
 * Generated class for the EvesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EvesPage = /** @class */ (function () {
    function EvesPage(navCtrl, navParams, file, photoViewer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.file = file;
        this.photoViewer = photoViewer;
    }
    EvesPage.prototype.Newsee = function () {
        //EvesPage
        // this.navCtrl.push("EvesPage");
        this.navCtrl.push("FacEventsPage");
    };
    EvesPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    EvesPage.prototype.viewPhoto = function () {
        var _this = this;
        var imageName = "543.jpg";
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
    EvesPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad EvesPage");
    };
    EvesPage.prototype.op = function () {
        window.open("http://fathermuller.edu.in/medical-college/event-display.php?id=434", "_system", "location=yes");
    };
    EvesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-eves",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/eves/eves.html"*/'<!--\n  Generated template for the EvesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu" style="color:white"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>News / Events</ion-title>\n    <ion-buttons right>\n      <button ion-button (click)="back()" icon-only>\n        <ion-icon\n          ios="ios-arrow-back"\n          md="md-arrow-back"\n          style="color:white"\n        ></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <!-- <img src="../../../assets/imgs/notice- (1).jpg" /> -->\n    <div class="da">\n      <ion-card (click)="Newsee()">\n        <p style="font-weight: bold;">\n          <span text-right>\n            Father Muller Charitable Institutions\n          </span>\n          <span float-right\n            >15th Oct 2019<span style="margin-left: 15px;"\n              ><ion-icon\n                style="    color: #2b4a63;\n              font-size: 25px;\n              font-weight: bold;\n          "\n                name="arrow-forward"\n              ></ion-icon\n            ></span>\n          </span>\n        </p>\n      </ion-card>\n\n      <ion-card no-padding (click)="viewPhoto()">\n        <ion-item no-padding>\n          <ion-avatar item-start>\n            <img src="../../assets/imgs/msg.png" />\n          </ion-avatar>\n          <ion-label>\n            <h2\n              style="margin-left: 5px;overflow: visible;text-align: center;text-decoration: underline;"\n            >\n              INVITATION TO PROF.<br />\n              J N SHETTY MEMORIAL<br />\n              ORATION\n            </h2></ion-label\n          >\n        </ion-item>\n      </ion-card>\n\n      <ion-card (click)="Newsee()">\n        <p style="font-weight: bold;">\n          <span text-right>\n            Father Muller Charitable Institutions\n          </span>\n          <span float-right\n            >15th Oct 2019<span style="margin-left: 15px;"\n              ><ion-icon\n                style="    color: #2b4a63;\n                  font-size: 25px;\n                  font-weight: bold;\n              "\n                name="arrow-forward"\n              ></ion-icon\n            ></span>\n          </span>\n        </p>\n      </ion-card></div></ion-card\n></ion-content>\n\n<ion-footer>\n  <p><img src="../../assets/imgs/atc.jpg" /> Powered By ATC ONLINE</p>\n</ion-footer>\n'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/eves/eves.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
    ], EvesPage);
    return EvesPage;
}());

//# sourceMappingURL=eves.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvesPageModule", function() { return EvesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eves__ = __webpack_require__(1018);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EvesPageModule = /** @class */ (function () {
    function EvesPageModule() {
    }
    EvesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__eves__["a" /* EvesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__eves__["a" /* EvesPage */]),
            ],
        })
    ], EvesPageModule);
    return EvesPageModule;
}());

//# sourceMappingURL=eves.module.js.map

/***/ })

});
//# sourceMappingURL=33.js.map