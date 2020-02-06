webpackJsonp([13],{

/***/ 1049:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fcm_fcm__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage_ngx__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_version__ = __webpack_require__(377);
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
 * Generated class for the StudHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudHomePage = /** @class */ (function () {
    function StudHomePage(navCtrl, authService, atrCtrl, toast, fcm, storage, appVersion) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.atrCtrl = atrCtrl;
        this.toast = toast;
        this.fcm = fcm;
        this.storage = storage;
        this.appVersion = appVersion;
        this.student_list = [];
        this.exam_count_new = 0;
        this.exam_count_no = 0;
        /*---- Notice count-----*/
        this.notice_new = 0;
        /*-----News Count -------*/
        this.news_new = 0;
        this.assignment_old_count = 0;
        this.assignment_count_new = 0;
        this.getFcmToken();
        this.getMessagesInfo();
        // this.getNoticeBoardInfo();
        // this.displayAssignmentInfo();
        console.log("assignment_count_new: ", this.assignment_count_new);
        // this.array = [
        //   {
        //     greeting: "Hello",
        //     name: "Aziz"
        //   },
        //   {
        //     greeting: "Hello",
        //     name: "Aziz"
        //   },
        //   {
        //     greeting: "Hello",
        //     name: "vinay"
        //   }
        // ];
        // let test = removeDuplicates(this.array, "fake");
        // console.log(test);
        function removeDuplicates(myArr, prop) {
            return myArr.filter(function (obj, pos, arr) {
                return arr.map(function (mapObj) { return mapObj[prop]; }).indexOf(obj[prop]) === pos;
            });
        }
        // this.dateone = new Date("2018-10-01");
        // this.datetwo = new Date();
        // var dayDif = (this.datetwo - this.dateone) / 1000 / 60 / 60 / 24;
        // console.log(dayDif);
    }
    StudHomePage.prototype.Report = function () {
        this.navCtrl.push("ReportcardPage");
    };
    StudHomePage.prototype.atten = function () {
        this.navCtrl.push("AttendancePage");
    };
    /*--------- FCM Notification code ---------*/
    StudHomePage.prototype.getFcmToken = function () {
        this.fcm.getToken();
        // Listen to incoming messages
        // this.fcm
        //   .listenToNotifications()
        //   .pipe(
        //     tap(msg => {
        //       // show a toast
        //       const toast = this.toast.create({
        //         message: msg.body,
        //         duration: 5000
        //       });
        //       toast.present();
        //     })
        //   )
        //   .subscribe();
    };
    /*---------End FCM Notification code -----------*/
    /*-------- Set Default Values -------------*/
    StudHomePage.prototype.setDefaultVal = function () {
        // this.storage.setItem("new_assignment", 0).then(() => {
        //   console.log("new_assignment Updated");
        //   // this.toast
        //   //   .create({
        //   //     message: "WishList Updated",
        //   //     duration: 1000
        //   //   })
        //   //   .present();
        // });
        // this.storage.setItem("new_exam", 0).then(() => {
        //   console.log("new_assignment Updated");
        // });
        // this.storage.setItem("new_news", 0).then(() => {
        //   console.log("new_assignment Updated");
        // });
        // this.storage.setItem("new_events", 0).then(() => {
        //   console.log("new_assignment Updated");
        // });
        // this.storage.getItem("assignment_count").then(data => {
        //   console.log("assignemt_count");
        // });
    };
    /*-------- end default values -----------*/
    /*------- Get Student Data using parent Id ------*/
    StudHomePage.prototype.getStudentsList = function () {
        var _this = this;
        console.log("getStudent method");
        this.user_id = JSON.parse(localStorage.getItem("user_id"));
        console.log("user_id", this.user_id);
        var getStudentsUrl = "parent/" + this.user_id + "/students";
        console.log("Attedance Val-", getStudentsUrl);
        this.authService.getData(getStudentsUrl).subscribe(function (data) {
            console.log(data);
            _this.data = JSON.parse(data._body);
            _this.responseData = _this.data;
            console.log("getStudents: ", _this.responseData);
            console.log("getStudents-data: ", _this.responseData.data);
            localStorage.setItem("studentData", JSON.stringify(_this.responseData.data));
            _this.current_student = localStorage.getItem("student_id");
            if (_this.responseData.data) {
                _this.student_data = _this.responseData.data;
                localStorage.setItem("student_data", JSON.stringify(_this.responseData.data));
                console.log("response Institution: ", _this.responseData.data[0].student_id);
                /*----- alert for institution popup ------*/
                var alert = _this.atrCtrl.create();
                alert.setTitle("Current Student");
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
                    if (_this.current_student == _this.student_data[i].student_id) {
                        alert.addInput({
                            type: "radio",
                            label: _this.student_data[i].FullName +
                                " - " +
                                _this.student_data[i].CourseName,
                            value: _this.student_data[i].student_id,
                            checked: true
                        });
                    }
                    else {
                        alert.addInput({
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
                alert.addButton({
                    text: "OK",
                    handler: function (data) {
                        _this.testRadioOpen = false;
                        _this.testRadioResult = data;
                        console.log("radiovalue: ", _this.testRadioResult);
                        _this.student_id = data;
                        console.log("studentid:", _this.student_id);
                        localStorage.setItem("student_id", _this.testRadioResult);
                    }
                });
                alert.present();
                _this.student_id = JSON.parse(localStorage.getItem("student_id"));
                for (var i = 0; i < _this.student_list.length; i++) {
                    // institution list
                    console.log("this.student_list[i].student_id:", _this.student_list[i].student_id);
                    console.log("student_id:", _this.student_id);
                    if (_this.student_id == _this.student_list[i].student_id) {
                        _this.client_id = _this.student_list[i].client_id;
                        console.log("client_id: ", _this.client_id);
                        localStorage.setItem("client_id", JSON.stringify(_this.student_list[i].client_id));
                    }
                }
                _this.navCtrl.setRoot("StudHomePage");
            }
            else {
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
                // this.navCtrl.setRoot("LandingPage");
                // redirect to the logout route
                // or show a modal
            }
        });
    };
    /*------- End Get Student Data using parent Id --------*/
    StudHomePage.prototype.ionViewWillEnter = function () {
        console.log("IonViewWillEnter Method");
        this.getMessagesInfo();
        // this.getNoticeBoardInfo();
        // this.setDefaultVal();
    };
    /*----------Get Message Data Information--------*/
    StudHomePage.prototype.getMessagesInfo = function () {
        var _this = this;
        var getMessageUrl = "/messages";
        this.authService.getMessageData(getMessageUrl).subscribe(function (data) {
            console.log(data);
            _this.data = JSON.parse(data._body);
            _this.MessageInfo = [_this.data][0].data;
            console.log(_this.MessageInfo);
            if ((_this.message = JSON.parse(localStorage.getItem("MessageId")))) {
                _this.message = JSON.parse(localStorage.getItem("MessageId"));
                console.log(_this.message);
                var bindex_1 = _this.message.reduce(function (acc, obj) {
                    acc[obj.id] = obj;
                    return acc;
                }, {});
                _this.UnreadMsg = _this.MessageInfo.filter(function (obj) { return !bindex_1[obj.id]; });
                console.log(_this.UnreadMsg);
                _this.UnreadMsglenth = _this.UnreadMsg.length;
                console.log(_this.UnreadMsglenth);
                _this.ReadMsg = _this.MessageInfo.filter(function (obj) { return bindex_1[obj.id]; });
                console.log(_this.ReadMsg);
            }
            else {
                _this.UnreadMsg = _this.MessageInfo;
                _this.UnreadMsglenth = _this.MessageInfo.length;
            }
        }, function (err) {
            console.log(err);
        });
    };
    /*---------- End Get Message Data Information ----------*/
    /*--------- Assignments Notification function ----------*/
    // displayAssignmentInfo() {
    //   let assignmentUrl = "assignments-details";
    //   let allSubject = [];
    //   this.authService.getStudentData(assignmentUrl).subscribe(
    //     data => {
    //       console.log(data);
    //       this.data = JSON.parse(data._body);
    //       let assignmentInfo = this.data.data;
    //       console.log("length assignment: ", assignmentInfo);
    //       console.log("assignmentInfo: ", assignmentInfo);
    //       // console.log(this.assignmentInfo[0].subname);
    //       for (let i = 0; i < assignmentInfo.length; i++) {
    //         if (
    //           assignmentInfo[i].assignmentList == "" ||
    //           assignmentInfo[i].assignmentList == null ||
    //           assignmentInfo[i].assignmentList == "null" ||
    //           assignmentInfo[i].assignmentList === null ||
    //           assignmentInfo[i].assignmentList == undefined
    //         ) {
    //           // this.allSubject = ["Nothing to display"];
    //         } else {
    //           for (let j = 0; j < assignmentInfo[i].assignmentList.length; j++) {
    //             allSubject.push({
    //               assignment: assignmentInfo[i].assignmentList[j],
    //               subname: assignmentInfo[i].subname
    //             });
    //             console.log(
    //               "assignment new count inside function: ",
    //               this.assignment_count_new
    //             );
    //             // this.assignment_count_new = this.assignment_count_new + 1;
    //             console.log(
    //               "assignmentList[j]: ",
    //               assignmentInfo[i].assignmentList[j]
    //             );
    //           }
    //         }
    //         console.log("assignment Count new Array Length:", allSubject.length);
    //         this.assignment_count_new = allSubject.length;
    //       }
    //       let read_assignment = JSON.parse(
    //         localStorage.getItem("read_assignment")
    //       );
    //       let unread_assign = allSubject.filter(read_assignment => {
    //         for (let i = 0; i < allSubject.length; i++) {
    //           return (
    //             allSubject[i].assignment.assignedNo !=
    //             read_assignment.assignment.assignedNo
    //           );
    //         }
    //       });
    //       console.log("count unread assignment: ", unread_assign);
    //       this.assignment_count_new = unread_assign.length;
    //       let assignment_count = this.storage
    //         .getItem("assignment_count")
    //         .then(data => console.log(data));
    //       console.log("assignment Count old:", this.assignment_old_count);
    //       if (this.assignment_old_count == null) {
    //         console.log("assignment_old_count old: ");
    //         this.assignment_old_count = 0;
    //       }
    //       if (this.assignment_count_new > 0) {
    //         this.notify_assignment = true;
    //       } else {
    //         this.notify_assignment = false;
    //       }
    //     },
    //     (err: any) => {
    //       if (err.status === 0) {
    //         alert("Network Connection Error. Please try Again.");
    //         // localStorage.clear();
    //         // this.navCtrl.setRoot("LandingPage");
    //       }
    //     }
    //   );
    // }
    /*--------- End Assignments Notification function ------------*/
    /*--------- Circular Notices Notification function ------------*/
    // getNoticeBoardInfo() {
    //   let getnoticeBoardUrl = "notice-board-details";
    //   console.log("Student Info-", getnoticeBoardUrl);
    //   this.authService.getStudentData(getnoticeBoardUrl).subscribe(
    //     data => {
    //       console.log(data);
    //       this.data = JSON.parse(data._body);
    //       this.responseData = this.data;
    //       if (this.responseData.data.length != 0) {
    //         console.log("Data: ", this.responseData.data);
    //         this.noticeBoard = this.responseData.data;
    //         console.log("length: ", this.noticeBoard.length);
    //         for (let i = 0; i < this.noticeBoard.length; i++) {
    //           console.log("Data: ", this.responseData.data[i].noticeList[0].type);
    //           if (
    //             this.responseData.data[i].noticeList[0].type == "EXAM_SCHEDULE"
    //           ) {
    //             this.exam_count_new = this.exam_count_new + 1;
    //           } else if (
    //             this.responseData.data[i].noticeList[0].type == "NEWS_EVENTS"
    //           ) {
    //             this.news_new = this.news_new + 1;
    //           } else if (
    //             this.responseData.data[i].noticeList[0].type == "NOTICE_BOARD"
    //           ) {
    //             this.notice_new = this.notice_new + 1;
    //           }
    //         }
    //         console.log("exam Data: ", this.exam_count_new);
    //         let exam_count = JSON.parse(localStorage.getItem("exam_count"));
    //         // let exam_ct = this.storage.getItem("exam_count").then(data => {});
    //         // console.log("exam Data old: ", exam_ct);
    //         if (exam_count < this.exam_count_new) {
    //           this.notify = true;
    //           this.exam_count_no = this.exam_count_new - exam_count;
    //           console.log("exam Count - homepage: ", this.exam_count_no);
    //           localStorage.setItem(
    //             "exam_count_no",
    //             JSON.stringify(this.exam_count_no)
    //           );
    //         } else {
    //           this.exam_count_no = 0;
    //           localStorage.setItem(
    //             "exam_count_no",
    //             JSON.stringify(this.exam_count_no)
    //           );
    //         }
    //       }
    //     },
    //     (err: any) => {
    //       if (err.status == 0) {
    //         alert("Network Connection Error. Please try Again.");
    //         this.navCtrl.setRoot("StudHomePage");
    //         // redirect to the login route
    //         // or show a modal
    //       }
    //     }
    //   );
    // }
    /*--------- Circular Notices Notification function ------------*/
    StudHomePage.prototype.Newsee = function () {
        //EvesPage
        this.navCtrl.push("EvesPage");
        // this.navCtrl.push("FacEventsPage");
    };
    StudHomePage.prototype.GotoSmsPage = function () {
        this.navCtrl.push("StudSmsPage");
    };
    StudHomePage.prototype.Attendence = function () {
        this.navCtrl.push("StudAttendancePage");
    };
    StudHomePage.prototype.Marks = function () {
        this.navCtrl.push("StudProgressReportPage");
    };
    StudHomePage.prototype.Assignment = function () {
        this.navCtrl.push("StudAssignmentsPage");
    };
    StudHomePage.prototype.TIME_TABLE = function () {
        this.navCtrl.push("StudTimetablePage");
    };
    StudHomePage.prototype.circularNotices = function (menu_id) {
        localStorage.setItem("menu_id", menu_id);
        this.navCtrl.push("StudCircularNoticesPage");
    };
    StudHomePage.prototype.about = function () {
        this.navCtrl.push("StudVideosPage");
    };
    StudHomePage.prototype.Calender = function () {
        this.navCtrl.push("StudCalendarPage");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])("class.is-open"),
        __metadata("design:type", Object)
    ], StudHomePage.prototype, "data", void 0);
    StudHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-stud-home",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/student/stud-home/stud-home.html"*/'<!--\n  Generated template for the StudHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle><ion-icon name="menu"></ion-icon></button>\n    <ion-title style="color: #fff !important">HOME</ion-title>\n    <ion-buttons right>\n      <button\n        class="msg-icon"\n        ion-button\n        clear\n        icon-only\n        (click)="GotoSmsPage()"\n      >\n        <ion-icon ios="ios-mail" md="md-mail" style=" color: #fff;"></ion-icon>\n        <ion-badge item-end class="badgecss">\n          <b>{{ UnreadMsglenth }}</b>\n        </ion-badge>\n      </button>\n      <button ion-button clear icon-only (click)="getStudentsList()">\n        <ion-icon\n          ios="ios-contact"\n          md="md-contact"\n          style=" color: #fff;"\n        ></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class="animated slideInUp delay-0s bashboard-bg">\n  <!-- <div>\n    <img src="assets/imgs/slider.png" class="slider-img" />\n  </div> -->\n  <!-- \n  <ion-searchbar\n    style="margin-top: 20px;margin-bottom: 20px;   padding: 0 56px;"\n  ></ion-searchbar> -->\n\n  <div>\n    <ion-grid>\n      <ion-row style="margin-top: 0%;">\n        <ion-col col-6 (click)="Assignment()">\n          <ion-card class="card1">\n            <span class="notification-popup" *ngIf="notify_assignment"\n              >{{ assignment_count_new }}</span\n            >\n            <img class="img1" src="assets/imgs/assignment.png" />\n            <div class="text1"><b>Assignment</b></div>\n          </ion-card>\n        </ion-col>\n        <ion-col col-6 (click)="circularNotices(4)">\n          <ion-card class="card2">\n            <img src="assets/imgs/mark.png" class="img1" />\n            <div class="text1"><b>Circular/Notice</b></div>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row style="margin-top: -3%;">\n        <ion-col col-6 (click)="TIME_TABLE()">\n          <ion-card class="card3">\n            <img class="img1" src="assets/imgs/calender.png" />\n            <div class="text1"><b>Class Schedule </b></div>\n          </ion-card>\n        </ion-col>\n        <ion-col col-6 (click)="Newsee()">\n          <ion-card class="card4">\n            <img class="img1" src="assets/imgs/time table.png" />\n            <div class="text1"><b>News/Events</b></div>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style="margin-top: -3%;">\n        <ion-col col-6 (click)="atten()">\n          <ion-card class="card7">\n            <img class="img1" src="assets/imgs/atten.png" />\n            <div class="text1"><b>Attendance</b></div>\n          </ion-card>\n        </ion-col>\n        <ion-col col-6 (click)="Report()">\n          <ion-card class="card8">\n            <!-- <span class="notification-popup" *ngIf="notify"\n              >{{ exam_count_no }}</span\n            > -->\n            <img class="img1" src="assets/imgs/report.png" />\n            <div class="text1"><b>Report card</b></div>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style="margin-top: -3%;">\n        <ion-col col-6 (click)="Calender()">\n          <ion-card class="card6">\n            <img class="img1" src="assets/imgs/attendence.png" />\n            <div class="text1"><b>Calendar</b></div>\n          </ion-card>\n        </ion-col>\n        <ion-col col-6 (click)="about()">\n          <ion-card class="card5">\n            <span class="notification-popup" *ngIf="notify"\n              >{{ exam_count_no }}</span\n            >\n            <img class="img1" src="assets/imgs/exam.png" />\n            <div class="text1"><b>Video</b></div>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <p><img src="../../assets/imgs/atc.jpg" /> Powered By ATC ONLINE</p>\n</ion-footer>\n'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/student/stud-home/stud-home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_fcm_fcm__["a" /* FcmProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_fcm_fcm__["a" /* FcmProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage_ngx__["a" /* NativeStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage_ngx__["a" /* NativeStorage */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_version__["a" /* AppVersion */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_version__["a" /* AppVersion */]) === "function" && _g || Object])
    ], StudHomePage);
    return StudHomePage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=stud-home.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudHomePageModule", function() { return StudHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stud_home__ = __webpack_require__(1049);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StudHomePageModule = /** @class */ (function () {
    function StudHomePageModule() {
    }
    StudHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__stud_home__["a" /* StudHomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__stud_home__["a" /* StudHomePage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__stud_home__["a" /* StudHomePage */]]
        })
    ], StudHomePageModule);
    return StudHomePageModule;
}());

//# sourceMappingURL=stud-home.module.js.map

/***/ })

});
//# sourceMappingURL=13.js.map