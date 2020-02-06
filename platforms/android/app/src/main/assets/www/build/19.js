webpackJsonp([19],{

/***/ 1041:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutStudentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(169);
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
 * Generated class for the AboutStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutStudentPage = /** @class */ (function () {
    function AboutStudentPage(navCtrl, navParams, authService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.getStudentInfo();
    }
    AboutStudentPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad AboutStudentPage");
    };
    AboutStudentPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    AboutStudentPage.prototype.getStudentInfo = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Loading Please Wait..."
        });
        loading.present();
        var getStudentsUrl = "student-info";
        console.log("Student Info-", getStudentsUrl);
        this.authService.getStudentData(getStudentsUrl).subscribe(function (data) {
            loading.dismiss();
            console.log(data);
            _this.data = JSON.parse(data._body);
            _this.responseData = _this.data;
            console.log(_this.responseData.data);
            if (_this.responseData) {
                console.log("Data: ", _this.responseData.data);
                _this.student_info = _this.responseData.data;
                console.log(_this.student_info);
                var dob = _this.student_info.DateOfBirth;
                var jod = _this.student_info.joining_date;
                var dateData1 = dob.split("-");
                var year1 = dateData1[0];
                var month1 = dateData1[1];
                var day1 = dateData1[2];
                _this.DateOfBirth = day1 + "/" + month1 + "/" + year1;
                console.log("dob: ", _this.DateOfBirth);
                var dateData2 = jod.split("-");
                var year2 = dateData2[0];
                var month2 = dateData2[1];
                var day2 = dateData2[2];
                _this.joining_date = day2 + "/" + month2 + "/" + year2;
                console.log("jod: ", _this.joining_date);
            }
            else {
                // alert("Invalid User");
                loading.dismiss();
                console.log("Invalid User");
            }
        }, function (err) {
            loading.dismiss();
            _this.NoInternet = true;
            if (err.status === 401) {
                console.log("error log list: ", err.message);
            }
            if (err.status === 400) {
                console.log("Bad Request: ", err);
                alert("Bad Request");
            }
            if (err.status === 0) {
                alert("Network Connection Error. Please try Again.");
                // localStorage.clear();
                _this.navCtrl.setRoot("StudHomePage");
            }
        });
    };
    AboutStudentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-about-student",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/student/about-student/about-student.html"*/'<!--\n  Generated template for the AboutStudentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu" style="color:white"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>About Student</ion-title>\n    <ion-buttons right (click)="back()">\n      <button ion-button icon-only>\n        <ion-icon\n          ios="ios-arrow-back"\n          md="md-arrow-back"\n          style="color:white"\n        ></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class="content-page" style="margin-top: 30px;">\n  <img\n    style="border-radius: 24px; position: absolute;z-index: 9999;left: 36%;"\n    class="prof-img"\n    src="../../../assets/imgs/woman-pic.jpg"\n  />\n  <div class="form-attendance" style="position: relative;">\n    <div *ngIf="NoInternet">\n      <b>No Internet Connection or Server Error. Try Again Later.</b>\n    </div>\n    <!-- <div>\n      <ion-card text-center *ngIf="student_info" class="prof-img">\n        <img [src]="student_info.ProfilePhoto" />\n      </ion-card>\n      <ion-item></ion-item>\n    </div> -->\n    <ion-item style="height: 100px;" no-lines></ion-item>\n\n    <div *ngIf="student_info">\n      <ion-item>\n        <ion-icon name="person" item-start large></ion-icon>\n        <h2>Full Name</h2>\n        <p style="margin-top: 5px;">{{ student_info.FullName }}</p>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="information-circle" item-start large></ion-icon>\n        <h2>Admission No.</h2>\n        <p style="margin-top: 5px;">{{ student_info.RegisterNumber }}</p>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="calendar" item-start large></ion-icon>\n        <h2>Joining Date</h2>\n        <p style="margin-top: 5px;">{{ joining_date }}</p>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="time" item-start large></ion-icon>\n        <h2>Date Of Birth</h2>\n        <p style="margin-top: 5px;">{{ DateOfBirth }}</p>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="school" item-start large></ion-icon>\n        <h2>Institute</h2>\n        <p style="margin-top: 5px;">{{ student_info.Institute }}</p>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="book" item-start large></ion-icon>\n        <h2>Course Name</h2>\n        <p style="margin-top: 5px;" text-wrap>{{ student_info.CourseName }}</p>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="calendar" item-start large></ion-icon>\n        <h2>Academic Year</h2>\n        <p style="margin-top: 5px;">{{ student_info.AcademicYear }}</p>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="information-circle" item-start large></ion-icon>\n        <h2>Year/Semester</h2>\n        <p style="margin-top: 5px;">{{ student_info.period }}</p>\n      </ion-item>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <p><img src="../../assets/imgs/atc.jpg" /> Powered By ATC ONLINE</p>\n</ion-footer>\n'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/student/about-student/about-student.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], AboutStudentPage);
    return AboutStudentPage;
}());

//# sourceMappingURL=about-student.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutStudentPageModule", function() { return AboutStudentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_student__ = __webpack_require__(1041);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutStudentPageModule = /** @class */ (function () {
    function AboutStudentPageModule() {
    }
    AboutStudentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__about_student__["a" /* AboutStudentPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__about_student__["a" /* AboutStudentPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__about_student__["a" /* AboutStudentPage */]]
        })
    ], AboutStudentPageModule);
    return AboutStudentPageModule;
}());

//# sourceMappingURL=about-student.module.js.map

/***/ })

});
//# sourceMappingURL=19.js.map