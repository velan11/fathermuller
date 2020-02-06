webpackJsonp([30],{

/***/ 1029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fac_auth_service_fac_auth_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(100);
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
 * Generated class for the FacHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacHomePage = /** @class */ (function () {
    function FacHomePage(navCtrl, authFacService, appCtrl, atrCtrl, loadingCtrl, network) {
        this.navCtrl = navCtrl;
        this.authFacService = authFacService;
        this.appCtrl = appCtrl;
        this.atrCtrl = atrCtrl;
        this.loadingCtrl = loadingCtrl;
        this.network = network;
        this.institution_id = [];
        this.sm = {
            course: 587,
            period: 2400,
            section: 2908,
            subject: 1,
            institution: 19,
            startDate: "07/06/2019",
            expiryDate: "31/06/2019",
            assignmentTitle: "Test this",
            description: "Test This 2",
            searchAssignment: "N",
            clientkey: "MJES",
            faculty_login_key: "$2y$10$ACeRXXKzK8f9qf07YzC6Ne3SW4KSgq7u901cOh.dwe4M62uj4js6"
        };
        this.setloginVal();
        // this.login_check();
        this.getUsername();
    }
    FacHomePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FacHomePage");
    };
    FacHomePage.prototype.circularNotices = function (menu_id) {
        localStorage.setItem("menu_id", menu_id);
        this.navCtrl.push("FacNoticesPage");
    };
    // disconnectSubscription = this.network.onDisconnect().subscribe(() => {
    //   console.log("network was disconnected :-(");
    // });
    FacHomePage.prototype.Newsee = function () {
        //EvesPage
        this.navCtrl.push("EvesPage");
        // this.navCtrl.push("FacEventsPage");
    };
    FacHomePage.prototype.Notice = function () {
        this.navCtrl.push("FacNoticesPage");
    };
    FacHomePage.prototype.about = function () {
        this.navCtrl.push("StudVideosPage");
    };
    FacHomePage.prototype.TIME_TABLE = function () {
        this.navCtrl.push("StudTimetablePage");
    };
    FacHomePage.prototype.Calender = function () {
        this.navCtrl.push("StudCalendarPage");
    };
    FacHomePage.prototype.presenthomeLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: "Loading..."
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 600);
    };
    FacHomePage.prototype.getUsername = function () {
        this.faculty_login_key1 = JSON.parse(localStorage.getItem("facultyData"));
        this.user_name = this.faculty_login_key1.user_name;
        console.log("username", this.user_name);
    };
    // login_check(){
    //   const data = JSON.parse(localStorage.getItem('facultyData'));
    //   const clientkey = localStorage.getItem('clientkey');
    //   console.log("login_check", data);
    //   console.log("client key", clientkey);
    //   if(data != null && clientkey != null){
    //     // if(data != null && clientkey != null){
    //     this.TIME_IN_MS = 1200000;
    //   this.hideFooterTimeout = setTimeout( () => {
    //     alert("Session Timeout!! Login Again!!");
    //     // localStorage.clear();
    //     this.navCtrl.push(LogoutPage);
    //   }, this.TIME_IN_MS);
    //   }
    // }
    // ngOnInit(): void {
    //   this.login_check();
    // }
    FacHomePage.prototype.getInstitute = function () {
        var _this = this;
        this.presenthomeLoadingDefault();
        console.log("getInstitute method");
        this.faculty_login_key1 = JSON.parse(localStorage.getItem("facultyData"));
        console.log("faculty_login_key-attendance", this.faculty_login_key1.faculty_login_key);
        var clientkey = localStorage.getItem("clientkey");
        console.log("clientkey", clientkey);
        this.faculty_login_key = this.faculty_login_key1.faculty_login_key;
        var attendanceVal = "student-attendance-get-institution?clientkey=" +
            clientkey +
            "&faculty_login_key=" +
            this.faculty_login_key1.faculty_login_key;
        console.log("Attedance Val-", attendanceVal);
        this.authFacService.getData(attendanceVal).subscribe(function (data) {
            console.log(data);
            var result = JSON.parse(data._body);
            _this.responseData = result;
            console.log(_this.responseData);
            console.log("institution list: ", _this.responseData.institution_lists);
            if (_this.responseData.institution_lists) {
                _this.institution_lists = _this.responseData.institution_lists;
                localStorage.setItem("getStudents.institution", JSON.stringify(_this.responseData.institution_lists[0].id));
                console.log("response Institution: ", _this.responseData.institution_lists[0].id);
                /*----- alert for institution popup ------*/
                var alert_1 = _this.atrCtrl.create();
                alert_1.setTitle("Select Institution");
                for (var i = 0; i < _this.institution_lists.length; i++) {
                    _this.institution_id.push(_this.institution_lists[i].id, _this.institution_lists[i].display_name);
                    if (i == 0) {
                        alert_1.addInput({
                            type: "radio",
                            label: _this.institution_lists[i].display_name,
                            value: _this.institution_lists[i].id,
                            checked: true
                        });
                    }
                    else {
                        alert_1.addInput({
                            type: "radio",
                            label: _this.institution_lists[i].display_name,
                            value: _this.institution_lists[i].id,
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
                        localStorage.setItem("institution_id", _this.testRadioResult);
                    }
                });
                alert_1.present();
            }
            else {
                alert("Unauthorised User!! Login Again!!");
                _this.navCtrl.setRoot("FacLgoutPage");
            }
        }, function (err) {
            if (err.status === 401) {
                alert("Unauthorised User!! Login Again!!");
                _this.navCtrl.setRoot("FacLgoutPage");
                // redirect to the logout route
                // or show a modal
            }
            if (err.status === 0) {
                alert("Network Connection Error. Please try Again.");
                // localStorage.clear();
                // this.navCtrl.setRoot("LandingPage");
                // redirect to the logout route
                // or show a modal
            }
        });
    };
    FacHomePage.prototype.setloginVal = function () {
        var data = JSON.parse(localStorage.getItem("facultyData"));
        console.log("dashboard: ", data);
        var clientkey = localStorage.getItem("clientkey");
        console.log("clientkey : ", clientkey);
        this.facultyDetails = data.facultyData;
    };
    FacHomePage.prototype.attendance = function () {
        this.navCtrl.push("FacAttendanceDashPage");
    };
    FacHomePage.prototype.backToWelcome = function () {
        var root = this.appCtrl.getRootNav();
        root.popToRoot();
    };
    FacHomePage.prototype.logout = function () {
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    FacHomePage.prototype.showAttendance = function () {
        this.navCtrl.push("FacAttendancePage");
    };
    FacHomePage.prototype.showMarks = function () {
        this.navCtrl.push("FacMarksPage");
    };
    FacHomePage.prototype.showAssignments = function () {
        this.navCtrl.push("FacAssignmentPage");
    };
    FacHomePage.prototype.showAttendanceReport = function () {
        this.navCtrl.push("FacAttendanceReportPage");
    };
    FacHomePage.prototype.changePasswd = function () {
        this.navCtrl.push("FacChangePasswordPage");
    };
    FacHomePage.prototype.viewAssignments = function () {
        this.navCtrl.push("FacViewAssignmentPage");
    };
    FacHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-fac-home",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/faculty/fac-home/fac-home.html"*/'<ion-header>\n  <ion-navbar>\n    <!-- <ion-buttons right>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu" style="color:white"></ion-icon>\n      </button>\n    </ion-buttons> -->\n    <button ion-button menuToggle class="menu-fac">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="fac-home-title">HOME</ion-title>\n    <!-- <button\n      class="profile-icon"\n      ion-button\n      clear\n      icon-only\n      (click)="getInstitute()"\n    >\n      <ion-icon\n        class="icon-school icon-color"\n        ios="ios-school"\n        md="md-school"\n        is-active="false"\n      ></ion-icon>\n    </button> -->\n\n    <ion-buttons right>\n      <button\n        class="msg-icon"\n        ion-button\n        clear\n        icon-only\n        (click)="GotoSmsPage()"\n      >\n        <ion-icon ios="ios-mail" md="md-mail" style=" color: #fff;"></ion-icon>\n        <ion-badge item-end class="badgecss">\n          0\n        </ion-badge>\n      </button>\n      <button ion-button clear icon-only (click)="getInstitute()">\n        <ion-icon\n          name="person"\n          style=" color: #fff; font-size: 23px;\n          margin-top: 5px;"\n        ></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bashboard-bg">\n  <ion-searchbar style="margin-top: 20px;    padding: 0 56px;"></ion-searchbar>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 (click)="showAssignments()">\n        <ion-card class="card1">\n          <img class="img1" src="assets/imgs/assignment.png" />\n          <div class="text1"><b>Assignments</b></div>\n          <br />\n        </ion-card>\n      </ion-col>\n      <ion-col col-6 (click)="viewAssignments()">\n        <ion-card class="card2">\n          <img class="img1" src="assets/imgs/assignment.png" />\n          <div class="text1"><b>View Assignments</b></div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 (click)="Newsee()">\n        <ion-card class="card3">\n          <img class="img1" src="assets/imgs/assignment.png" />\n          <div class="text1"><b>News & Events</b></div>\n          <br />\n        </ion-card>\n      </ion-col>\n      <!-- <ion-col col-6 (click)="Notice()">\n        <ion-card class="card2">\n          <img class="img1" src="assets/imgs/assignment.png" />\n          <div class="text1"><b>Notice</b></div>\n        </ion-card>\n      </ion-col> -->\n\n      <ion-col col-6 (click)="Notice()">\n        <ion-card class="card4">\n          <img src="assets/imgs/mark.png" class="img1" />\n          <div class="text1"><b>Circular & Notice</b></div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style="margin-top: -3%;">\n      <ion-col col-6 (click)="TIME_TABLE()">\n        <ion-card class="card6">\n          <img class="img1" src="assets/imgs/calender.png" />\n          <div class="text1"><b>Class Schedule </b></div>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6 (click)="about()">\n        <ion-card class="card5">\n          <span class="notification-popup" *ngIf="notify">{{\n            exam_count_no\n          }}</span>\n          <img class="img1" src="assets/imgs/exam.png" />\n          <div class="text1"><b>Video</b></div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row style="margin-top: 0%;">\n        <ion-col col-12 (click)="changePasswd()">\n          <ion-card class="card1">\n            <img class="img1" src="assets/imgs/mark.png" />\n            <div class="text1"><b>Change Password</b></div>\n          </ion-card>\n        </ion-col>\n\n        <ion-col col-6 (click)="showAttendanceReport()">\n          <ion-card class="card2">\n            <img src="assets/imgs/exam.png" class="img1" />\n            <div class="text1"><b>Attendance Report</b></div>\n          </ion-card>\n        </ion-col> \n      </ion-row>-->\n  </ion-grid>\n  <!-- </div> -->\n</ion-content>\n<ion-footer>\n  <p><img src="../../assets/imgs/atc.jpg" /> Powered By ATC ONLINE</p>\n</ion-footer>\n'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/faculty/fac-home/fac-home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_fac_auth_service_fac_auth_service__["a" /* FacAuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */]])
    ], FacHomePage);
    return FacHomePage;
}());

//# sourceMappingURL=fac-home.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacHomePageModule", function() { return FacHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fac_home__ = __webpack_require__(1029);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FacHomePageModule = /** @class */ (function () {
    function FacHomePageModule() {
    }
    FacHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__fac_home__["a" /* FacHomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__fac_home__["a" /* FacHomePage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__fac_home__["a" /* FacHomePage */]]
        })
    ], FacHomePageModule);
    return FacHomePageModule;
}());

//# sourceMappingURL=fac-home.module.js.map

/***/ })

});
//# sourceMappingURL=30.js.map