webpackJsonp([15],{

/***/ 1047:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudCircularNoticesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage_ngx__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_photo_viewer__ = __webpack_require__(372);
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
 * Generated class for the StudCircularNoticesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudCircularNoticesPage = /** @class */ (function () {
    function StudCircularNoticesPage(navCtrl, navParams, authService, loadingCtrl, storage, toastCtrl, photoViewer, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.photoViewer = photoViewer;
        this.file = file;
        this.noticeBoardInfo = [];
        this.noData = false;
        this.flag = false;
        this.exam_count = 0;
        this.news_count = 0;
        this.notice_count = 0;
        this.getNoticeBoardInfo();
    }
    StudCircularNoticesPage.prototype.viewPhoto = function () {
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
    StudCircularNoticesPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad CircularNoticesPage");
        this.presentLoadingCustom();
    };
    StudCircularNoticesPage.prototype.presentLoadingCustom = function () {
        var loading = this.loadingCtrl.create({
            content: "Loading...",
            duration: 1000
        });
        loading.onDidDismiss(function () {
            console.log("Dismissed loading");
        });
        loading.present();
    };
    StudCircularNoticesPage.prototype.getNoticeBoardInfo = function () {
        var _this = this;
        this.menu_id = JSON.parse(localStorage.getItem("menu_id"));
        console.log("menu_id", this.menu_id);
        var getnoticeBoardUrl = "notice-board-details";
        console.log("Student Info-", getnoticeBoardUrl);
        this.authService.getStudentData(getnoticeBoardUrl).subscribe(function (data) {
            console.log(data);
            _this.data = JSON.parse(data._body);
            _this.responseData = _this.data;
            if (_this.responseData.data.length != 0) {
                console.log("Data: ", _this.responseData.data);
                // console.log("Data: ", this.responseData.data[0].noticeList[0].type);
                _this.noticeBoard = _this.responseData.data;
                console.log("length: ", _this.noticeBoard.length);
                for (var i = 0; i < _this.noticeBoard.length; i++) {
                    // console.log("Data before: ",this.responseData.data[i].noticeList[0].type);
                    if (_this.menu_id == "5" || _this.menu_id == 5) {
                        console.log("Data: ", _this.responseData.data[i].noticeList[0].type);
                        if (_this.responseData.data[i].noticeList[0].type == "EXAM_SCHEDULE") {
                            _this.flag = true;
                            localStorage.setItem("exam_count_no", JSON.stringify(0));
                            console.log("Data: ", _this.responseData.data[i].noticeList[0].type);
                            _this.PageTitle = "Exam Schedule";
                            _this.noticeBoardInfo.push(_this.responseData.data[i]);
                            _this.exam_count++;
                            localStorage.setItem("noticeBoardInfo", JSON.stringify(_this.noticeBoardInfo));
                            localStorage.setItem("PageTitle", _this.PageTitle);
                            localStorage.setItem("exam_count", JSON.stringify(_this.exam_count));
                            _this.storage
                                .setItem("exam_schedule", JSON.stringify(_this.exam_count))
                                .then(function () {
                                console.log("exam_schedule Updated");
                                console.log(_this.exam_count);
                                // this.toastCtrl
                                //   .create({
                                //     message: "exam_schedule Updated",
                                //     duration: 1000
                                //   })
                                //   .present();
                            });
                        }
                        else {
                            if (_this.flag != true) {
                                _this.flag = false;
                            }
                            console.log("no exam schedule :", i);
                            _this.PageTitle = "Exam Schedule";
                        }
                    }
                    else if (_this.menu_id == "3" || _this.menu_id == 3) {
                        if (_this.responseData.data[i].noticeList[0].type == "NEWS_EVENTS" &&
                            _this.responseData.data[i].noticeList.length != 0) {
                            _this.flag = true;
                            console.log("Data: ", _this.responseData.data[i].noticeList[0].type);
                            _this.PageTitle = "News and Events";
                            _this.noticeBoardInfo.push(_this.responseData.data[i]);
                            _this.news_count++;
                            localStorage.setItem("noticeBoardInfo", JSON.stringify(_this.noticeBoardInfo));
                            localStorage.setItem("PageTitle", _this.PageTitle);
                            localStorage.setItem("news_count", JSON.stringify(_this.news_count));
                        }
                        else {
                            if (_this.flag != true) {
                                _this.flag = false;
                                // this.noData = true;
                                // this.noDataValue = "No Items to display ";
                            }
                            _this.PageTitle = "News and Events";
                        }
                    }
                    else if (_this.menu_id == "4" || _this.menu_id == 4) {
                        // for(let j=0; j<this.noticeBoard.length; j++){
                        console.log("Data before : ", i, ": ", _this.responseData.data[i].noticeList[0].type);
                        if (_this.responseData.data[i].noticeList[0].type ==
                            "NOTICE_BOARD" &&
                            _this.responseData.data[i].noticeList.length != 0) {
                            _this.flag = true;
                            console.log("Data after: ", _this.responseData.data[i].noticeList[0].type);
                            _this.PageTitle = "Circular and Notices";
                            _this.noticeBoardInfo.push(_this.responseData.data[i]);
                            console.log("noticeBoardInfo", _this.noticeBoardInfo);
                            localStorage.setItem("noticeBoardInfo", JSON.stringify(_this.noticeBoardInfo));
                            localStorage.setItem("PageTitle", _this.PageTitle);
                            _this.notice_count++;
                        }
                        else {
                            if (_this.flag != true) {
                                _this.flag = false;
                            }
                            _this.PageTitle = "Circular and Notices";
                            // this.noData = true;
                            // this.noDataValue = "No Items to display ";
                        }
                    }
                }
            }
            else {
                if (_this.menu_id == "5" || _this.menu_id == 5) {
                    _this.PageTitle = "Exam Schedule";
                }
                else if (_this.menu_id == "3" || _this.menu_id == 3) {
                    _this.PageTitle = "News and Events";
                }
                else if (_this.menu_id == "4" || _this.menu_id == 4) {
                    _this.PageTitle = "Circular and Notices";
                }
                _this.noData = true;
                _this.noDataValue = "No Items to display ";
                console.log("Invalid User");
            }
            if (_this.flag != true) {
                _this.noData = true;
                _this.noDataValue = "No Items to display ";
            }
        }, function (err) {
            if (err.status == 401) {
                console.log("error log list: ", err.message);
                // alert("Unauthorised User");
                // redirect to the login route
                // or show a modal
            }
            if (err.status == 400) {
                console.log("Bad Request: ", err);
                alert("Bad Request");
                // alert("Unauthorised User");
                // redirect to the login route
                // or show a modal
            }
            if (err.status == 0) {
                alert("Network Connection Error. Please try Again.");
                _this.navCtrl.setRoot("LandingPage");
                // redirect to the login route
                // or show a modal
            }
        });
    };
    StudCircularNoticesPage.prototype.displayNoticeInfo = function (noticeInfo) {
        console.log("displayNoticeInfo: ", noticeInfo);
        localStorage.setItem("NoticeDetails", JSON.stringify(noticeInfo));
        this.navCtrl.push("StudNoticeBoardInfoPage");
    };
    StudCircularNoticesPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    StudCircularNoticesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-stud-circular-notices",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/student/stud-circular-notices/stud-circular-notices.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu" style="color:white"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>{{ PageTitle }}</ion-title>\n    <ion-buttons right (click)="back()">\n      <button ion-button icon-only>\n        <ion-icon\n          ios="ios-arrow-back"\n          md="md-arrow-back"\n          style="color:white"\n        ></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class="content-page">\n  <ion-card>\n    <!-- <img src="../../../assets/imgs/notice- (1).jpg" /> -->\n    <div class="da" *ngIf="PageTitle == \'Circular and Notices\'">\n      <ion-card>\n        <ion-row (click)="viewPhoto()">\n          <ion-col size="5">\n            Notice of Office Closure\n          </ion-col>\n\n          <ion-col size="7">\n            <!-- <img src="assets/img/exampleimg.jpg" /> -->\n\n            <img src="../../../assets/imgs/notice.jpg" height="50" />\n          </ion-col>\n        </ion-row>\n      </ion-card>\n\n      <ion-card>\n        <ion-row (click)="viewPhoto()">\n          <ion-col size="5">\n            Notice of Acknowlegement\n          </ion-col>\n\n          <ion-col size="7">\n            <!-- <img src="assets/img/exampleimg.jpg" /> -->\n\n            <img src="../../../assets/imgs/notice.jpg" height="50" />\n          </ion-col>\n        </ion-row>\n      </ion-card>\n\n      <ion-card>\n        <ion-row (click)="viewPhoto()">\n          <ion-col size="5">\n            Examination Notice List\n          </ion-col>\n\n          <ion-col size="7">\n            <!-- <img src="assets/img/exampleimg.jpg" /> -->\n\n            <img src="../../../assets/imgs/notice.jpg" height="50" />\n          </ion-col>\n        </ion-row>\n      </ion-card>\n\n      <p\n        style="color: #5282af;font-size: 11px;text-align: right;\n      margin-right: 15px;"\n      >\n        *Click to View notice and SHARE\n      </p>\n    </div>\n    <div class="da" *ngIf="PageTitle != \'Circular and Notices\'">\n      <ion-card>\n        <p>\n          <span text-right>\n            Father Muller Charitable Institutions\n          </span>\n          <span float-right>15th Oct 2019</span>\n        </p>\n      </ion-card>\n\n      <ion-card>\n        <h3>\n          GLOBAL Â HANDÂ Â WASHINGÂ Â DAY - OCTOBER 15THÂ 2019 held at Father\n          Mullerâ€™s\n        </h3>\n        <p style="margin-top: 15px;">\n          <img\n            src="../../../assets/imgs/news.jpg"\n            style="height: 130px;margin-bottom: 15px;"\n          />\n\n          The Global Hand Washing day celebrated worldover on October 15th 2019\n          was observed by the Hospital Infection Control Department along with\n          the Nursing Service Department at Father Muller Medical College\n          Hospital. The inauguration was held in the morning at 7.15 am at the\n          entrance of the Asha Kiran block. Rev Father Richard Aloysius Coelho,\n          Director, Father Muller Charitable Institutions presided over the\n          function and Dr Uday Kumar, Medical superintendent, Father Muller\n          Medical College Hospital was the chief guest.\n        </p>\n        <a\n          text-center\n          style="margin-top: 15px;"\n          href="http://fathermuller.edu.in/fmci-news-display.php?id=1153"\n          >View More ...</a\n        >\n      </ion-card>\n    </div>\n  </ion-card>\n\n  <div class="form-attendance" style="display: none;">\n    <div *ngIf="noData" class="alert alert-danger">\n      {{ noDataValue }}\n    </div>\n    <ion-grid>\n      <ion-row\n        class="card-row divider"\n        *ngFor="let item of noticeBoardInfo; let i = index"\n      >\n        <ion-col class="icon-col"\n          ><button\n            ion-button\n            class="btn-icon"\n            (click)="displayNoticeInfo(item.noticeList[0])"\n            full\n          >\n            Created Date: <br />{{ item.noticeList[0].start_date }}\n          </button></ion-col\n        >\n        <ion-col class="icon-info-col"\n          ><button\n            class="btn-icon-info"\n            (click)="displayNoticeInfo(item.noticeList[0])"\n          >\n            <h4>{{ item.noticeList[0].title }}</h4>\n          </button></ion-col\n        >\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n<ion-footer>\n  <p><img src="../../assets/imgs/atc.jpg" /> Powered By ATC ONLINE</p>\n</ion-footer>\n'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/student/stud-circular-notices/stud-circular-notices.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage_ngx__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */]])
    ], StudCircularNoticesPage);
    return StudCircularNoticesPage;
}());

//# sourceMappingURL=stud-circular-notices.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudCircularNoticesPageModule", function() { return StudCircularNoticesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stud_circular_notices__ = __webpack_require__(1047);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StudCircularNoticesPageModule = /** @class */ (function () {
    function StudCircularNoticesPageModule() {
    }
    StudCircularNoticesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__stud_circular_notices__["a" /* StudCircularNoticesPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__stud_circular_notices__["a" /* StudCircularNoticesPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__stud_circular_notices__["a" /* StudCircularNoticesPage */]]
        })
    ], StudCircularNoticesPageModule);
    return StudCircularNoticesPageModule;
}());

//# sourceMappingURL=stud-circular-notices.module.js.map

/***/ })

});
//# sourceMappingURL=15.js.map