webpackJsonp([18],{

/***/ 1044:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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



// import { ModalPage } from "./modal-page";
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loadingCtrl, authService, modal) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.modal = modal;
        this.getStudentProfile();
    }
    HomePage.prototype.ngOnInit = function () {
        // this.getStudentProfile();
    };
    /*---------------PresentLoading alert method------------*/
    HomePage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Loading..."
        });
        this.loading.present();
    };
    /*-------------- end PresentLoading alert method----------*/
    /*--------------Modal page method-----------*/
    HomePage.prototype.presentProfileModal = function () {
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        // const myModalData = {
        //   name: "Paul Halliday",
        //   occupation: "Developer"
        // };
        var myModal = this.modal.create("EditProfilePage");
        myModal.present();
        myModal.onDidDismiss(function (data) {
            console.log("I have dismissed.");
            console.log(data);
        });
        myModal.onWillDismiss(function (data) {
            console.log("I'm about to dismiss");
            console.log(data);
        });
    };
    /*--------------end Modal page method-----------*/
    HomePage.prototype.getStudentProfile = function () {
        var _this = this;
        this.presentLoading();
        console.log("getStudentProfile method");
        var token = JSON.parse(localStorage.getItem("token"));
        var classval = "get-student-profile?token=" + token;
        console.log("get course-", classval);
        this.authService.getData(classval).subscribe(function (data) {
            _this.loading.dismiss();
            console.log(data);
            var result = JSON.parse(data._body);
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.student_profile) {
                _this.student_profile = _this.responseData.student_profile;
                console.log("student_profile: ", _this.student_profile);
                localStorage.setItem("board_id", JSON.stringify(_this.responseData.student_details.board_id));
                localStorage.setItem("class_id", JSON.stringify(_this.responseData.student_details.class_id));
                localStorage.setItem("student_details", JSON.stringify(_this.responseData.student_details));
                localStorage.setItem("student_profile", JSON.stringify(_this.student_profile));
                _this.student_details = _this.responseData.student_details;
                console.log("student details: ", _this.student_details);
                //dob conversion
                var dateData1 = _this.student_details.date_of_birth.split("-");
                var year1 = dateData1[0];
                var month1 = dateData1[1];
                var day1 = dateData1[2].split(" ");
                _this.DateOfBirth = day1[0] + "/" + month1 + "/" + year1;
            }
            else if (_this.responseData.status == "Authorization Token failed") {
                alert("session expired!!");
                localStorage.removeItem("token");
                _this.navCtrl.setRoot("LoginPage");
            }
        }, function (err) {
            if (err.status === 401 || err.status == 401 || err.status == "401") {
                alert("No data loaded!! ");
            }
            if (err.status === 500) {
                alert("No data loaded!! ");
            }
            if (err.status === 200 || err.status == 200 || err.status == "200") {
                alert("No data loaded!! ");
                localStorage.clear();
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-home",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/student/home/home.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons right>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu" style="color:white"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title class="animated slideInRight delay-1s">Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="animated slideInRight delay-0s">\n  <div class="inner-container">\n    <button\n      class="btn btn-outline-white float-right font-15 padding-less mt-3"\n      (click)="presentProfileModal()"\n    >\n      <ion-icon name="create"></ion-icon> &nbsp; edit\n    </button>\n    <div class="clearfix"></div>\n    <div class="row student-profile pt-5 ">\n      <img src="assets/imgs/student.png" class="rounded-circle" />\n\n      <!-- <h5>80% <br />Active</h5> -->\n    </div>\n    <br />\n\n    <div class="profile-white">\n      <div class="row">\n        <div class="col-sm-12">\n          <p *ngIf="student_profile" class="profile-name">\n            Student Name:<span class="stdnt-name">{{\n              student_profile.first_name\n            }}</span\n            ><br />\n            Phone:\n            <span class="text-primary">{{ student_profile.contact }}</span\n            ><br />\n            Email: <span class="text-primary">{{ student_profile.email }}</span\n            ><br />\n            D.O.B: <span class="text-primary">{{ DateOfBirth }}</span\n            ><br />\n            Address :\n            <span class="text-primary">{{ student_details.address }}</span\n            ><br />\n            Address :\n            <span class="text-primary">{{ student_details.institution }}</span\n            ><br />\n            Board Name :\n            <span class="text-primary">{{ student_details.board_id }}</span\n            ><br />\n            Class Completed :\n            <span class="text-primary">{{ student_details.class_id }}</span\n            ><br />\n          </p>\n\n          <hr />\n          <!-- <p class="head">ABOUT</p>\n          <p>\n            Lorem Ipsum is simply dummy text of the printing and typesetting\n            industry. Lorem Ipsum has been the industry\'s standard dummy text\n            ever\n          </p> -->\n        </div>\n      </div>\n      <!-- <hr />\n      <div class="row">\n        <div class="col-sm-6">\n          <p class="head">WEEKLY TASK STREAM</p>\n          <img src="assets/imgs/task.png" class="img-fluid" />\n        </div>\n        <div class="col-sm-3">\n          <p class="head mt-3">PROJECTS</p>\n          <span class="blue1">15</span>\n        </div>\n        <div class="col-sm-3">\n          <p class="head">HOURS</p>\n          <span class="blue1">40</span>\n        </div>\n      </div> -->\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/student/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(1044);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ })

});
//# sourceMappingURL=18.js.map