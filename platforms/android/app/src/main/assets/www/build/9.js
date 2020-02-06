webpackJsonp([9],{

/***/ 1055:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_version__ = __webpack_require__(377);
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
 * Generated class for the StudentListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentListPage = /** @class */ (function () {
    // VersionNum: any;
    function StudentListPage(navCtrl, navParams, authService, atrCtrl, loadingCtrl, appVersion) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.atrCtrl = atrCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appVersion = appVersion;
        this.os_type = 1; //android
        this.student_list = [];
        // AppName: string;
        // PackageName: string;
        // VersionCode: string | number;
        this.VersionNumber = "1.1.1";
        //fetch App version code
        // this.appVersion.getVersionNumber().then(function(versionNumber) {
        //   // 1.0.0
        //   console.log("version number", versionNumber);
        // });
        // this.appVersion.getVersionNumber().then(
        //   versionNumber => {
        //     this.VersionCode = versionNumber;
        //   },
        //   error => {
        //     console.log(error);
        //   }
        // );
        // this.appVersion.getVersionCode().then(value => {
        //   this.VersionCode = value;
        // });
        // alert("version-code: " + this.VersionCode);
        // this.appVersion.getVersionNumber().then(value => {
        //   this.VersionNumber = value;
        // });
        // alert("version-number: " + this.VersionNumber);
        //end version code
    }
    StudentListPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad StudentListPage");
        this.presentLoadingCustom();
        this.getUser();
    };
    StudentListPage.prototype.presentLoadingCustom = function () {
        var loading = this.loadingCtrl.create({
            content: "Loading...",
            duration: 2000
        });
        loading.onDidDismiss(function () {
            console.log("Dismissed loading");
        });
        loading.present();
    };
    StudentListPage.prototype.getUser = function () {
        var _this = this;
        this.authService.getData("user").subscribe(function (data) {
            // this.loading.dismiss();
            console.log(data);
            _this.data = JSON.parse(data._body);
            _this.responseData = _this.data;
            if (_this.responseData) {
                console.log("Data: ", _this.responseData);
                localStorage.setItem("UserData", JSON.stringify(_this.responseData.data));
                localStorage.setItem("user_id", JSON.stringify(_this.responseData.data.id));
                _this.user_id = _this.responseData.data.id;
                console.log("userId:", _this.responseData.data.id);
                localStorage.setItem("name", JSON.stringify(_this.responseData.data.name));
                localStorage.setItem("mobile_number", JSON.stringify(_this.responseData.data.mobile_number));
                _this.getStudents();
                //       this.navCtrl.setRoot(HomePage);
            }
            else {
                // alert("Invalid User");
                console.log("Invalid User");
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
                // localStorage.clear();
                _this.navCtrl.setRoot("StudHomePage");
                // redirect to the login route
                // or show a modal
            }
        });
    };
    StudentListPage.prototype.getStudents = function () {
        var _this = this;
        console.log("getStudent method");
        this.user_id = JSON.parse(localStorage.getItem("user_id"));
        console.log("user_id", this.user_id);
        var getStudentsUrl = "parent/" +
            this.user_id +
            "/students?version_code=" +
            this.VersionNumber +
            "&os_type=" +
            this.os_type;
        console.log("Attedance Val-", getStudentsUrl);
        this.authService.getData(getStudentsUrl).subscribe(function (data) {
            console.log(data);
            _this.data = JSON.parse(data._body);
            _this.responseData = _this.data;
            console.log("getStudents: ", _this.responseData);
            console.log("getStudents-data: ", _this.responseData.data);
            localStorage.setItem("studentData", JSON.stringify(_this.responseData.data));
            if (_this.responseData.data) {
                _this.student_data = _this.responseData.data;
                localStorage.setItem("student_data", JSON.stringify(_this.responseData.data));
                localStorage.setItem("student_id", JSON.stringify(_this.responseData.data[0].student_id));
                localStorage.setItem("client_id", JSON.stringify(_this.responseData.data[0].client_id));
                console.log("response Institution: ", _this.responseData.data[0].student_id);
                /*----- alert for institution popup ------*/
                var alert_1 = _this.atrCtrl.create();
                alert_1.setTitle("Current Student");
                for (var i = 0; i < _this.student_data.length; i++) {
                    // institution list
                    console.log("count: ", i);
                    _this.student_list.push({
                        student_id: _this.student_data[i].student_id,
                        fullname: _this.student_data[i].FullName,
                        coursename: _this.student_data[i].CourseName,
                        client_id: _this.student_data[i].client_id,
                        client_name: _this.student_data[i].client_name
                    });
                    if (i == 0) {
                        alert_1.addInput({
                            type: "radio",
                            label: _this.student_data[i].FullName +
                                " \r\n " +
                                _this.student_data[i].CourseName,
                            value: _this.student_data[i].student_id,
                            checked: true
                        });
                    }
                    else {
                        alert_1.addInput({
                            type: "radio",
                            label: _this.student_data[i].FullName +
                                " - " +
                                _this.student_data[i].CourseName,
                            value: _this.student_data[i].student_id,
                            checked: false
                        });
                    }
                }
                // alert.addButton('Cancel');
                alert_1.addButton({
                    text: "OK",
                    handler: function (data) {
                        _this.testRadioOpen = false;
                        _this.testRadioResult = data;
                        console.log("radiovalue: ", _this.testRadioResult);
                        _this.student_id = data;
                        console.log("studentid:", _this.student_id);
                        localStorage.setItem("student_id", JSON.stringify(_this.testRadioResult));
                        _this.getClientid();
                    }
                });
                alert_1.present();
                _this.student_id = JSON.parse(localStorage.getItem("student_id"));
                console.log("student list- student id:", _this.student_id);
                _this.navCtrl.setRoot("StudHomePage");
            }
            else {
                alert("No Students found in the Institutions. Kindly Enter the Valid Details");
                localStorage.clear();
                _this.navCtrl.setRoot("LandingPage");
            }
        }, function (err) {
            if (err.status === 401) {
                alert("Unauthorised User!! Login Again!!");
                _this.navCtrl.setRoot("LogoutPage");
                // redirect to the logout route
                // or show a modal
            }
            if (err.status === 0) {
                alert("Network Connection Error. Please try Again.");
                // localStorage.clear();
                _this.navCtrl.setRoot("LandingPage");
                // redirect to the logout route
                // or show a modal
            }
        });
    };
    StudentListPage.prototype.getClientid = function () {
        this.student_id = JSON.parse(localStorage.getItem("student_id"));
        this.student_data = JSON.parse(localStorage.getItem("student_data"));
        for (var i = 0; i < this.student_data.length; i++) {
            // institution list
            console.log("this.student_data[i].student_id:", this.student_data[i].student_id);
            console.log("student_id:", this.student_id);
            if (this.student_id == this.student_list[i].student_id) {
                this.client_id = this.student_list[i].client_id;
                console.log("client_id: ", this.client_id);
                localStorage.setItem("client_id", JSON.stringify(this.student_list[i].client_id));
            }
        }
    };
    StudentListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-student-list",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/student/student-list/student-list.html"*/'<!--\n  Generated template for the StudentListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>studentList</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding> </ion-content>\n'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/student/student-list/student-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_version__["a" /* AppVersion */]])
    ], StudentListPage);
    return StudentListPage;
}());

//# sourceMappingURL=student-list.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListPageModule", function() { return StudentListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_list__ = __webpack_require__(1055);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StudentListPageModule = /** @class */ (function () {
    function StudentListPageModule() {
    }
    StudentListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__student_list__["a" /* StudentListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__student_list__["a" /* StudentListPage */]),
            ],
        })
    ], StudentListPageModule);
    return StudentListPageModule;
}());

//# sourceMappingURL=student-list.module.js.map

/***/ })

});
//# sourceMappingURL=9.js.map