webpackJsonp([22],{

/***/ 1038:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
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


//
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.getMenu();
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad MenuPage");
    };
    MenuPage.prototype.ngOnInit = function () {
        this.getMenu();
    };
    MenuPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: "Confirm LogOut  ",
            buttons: [
                {
                    text: "No",
                    role: "cancel",
                    handler: function () {
                        console.log("No clicked");
                    }
                },
                {
                    text: "Yes",
                    handler: function () {
                        console.log("Yes clicked");
                    }
                }
            ]
        });
        alert.present();
    };
    MenuPage.prototype.getMenu = function () {
        this.login_user = localStorage.getItem("user_logged_in");
        if (this.login_user == undefined) {
            this.login_user = this.navParams.get("login");
            console.log("login user", this.login_user);
            localStorage.setItem("login_user", this.login_user);
        }
        if (this.login_user == "parent") {
            this.studentMenuShow = true;
            this.facultyMenuShow = false;
            this.homePage = "StudentListPage";
            /*-------- Student Menu --------*/
            this.studentPages = [
                { title: "Home", component: "StudHomePage", icon: "md-home", id: "1" },
                {
                    title: "About Student",
                    component: "AboutStudentPage",
                    icon: "md-school",
                    id: "2"
                },
                {
                    title: "News and Events",
                    component: "StudCircularNoticesPage",
                    icon: "paper",
                    id: "3"
                },
                {
                    title: "Circular and Notices",
                    component: "StudCircularNoticesPage",
                    icon: "list-box",
                    id: "4"
                },
                // {
                //   title: "Exam Schedule",
                //   component: "StudCircularNoticesPage",
                //   icon: "md-clipboard",
                //   id: "5"
                // },
                {
                    title: "Assignments",
                    component: "StudAssignmentsPage",
                    icon: "md-school",
                    id: "6"
                },
                {
                    title: "SMS",
                    component: "StudSmsPage",
                    icon: "md-chatboxes",
                    id: "7"
                },
                // {
                //   title: "School Calendar",
                //   component: "StudCalendarPage",
                //   icon: "md-calendar",
                //   id: "8"
                // },
                // {
                //   title: "Attendance",
                //   component: "StudAttendancePage",
                //   icon: "md-checkbox-outline",
                //   id: "9"
                // },
                {
                    title: "TimeTable",
                    component: "StudTimetablePage",
                    icon: "md-grid",
                    id: "10"
                },
                // {
                //   title: "Progress Report",
                //   component: "StudProgressReportPage",
                //   icon: "md-clipboard",
                //   id: "11"
                // },
                {
                    title: "Videos",
                    component: "StudVideosPage",
                    icon: "md-videocam",
                    id: "12"
                },
                {
                    title: "Contact Us",
                    component: "StudContactUsPage",
                    icon: "md-contacts",
                    id: "13"
                },
                {
                    title: "About Institute",
                    component: "AboutInstPage",
                    icon: "md-school",
                    id: "14"
                },
                {
                    title: "Logout",
                    component: "LogoutPage",
                    icon: "md-log-out",
                    id: "15"
                }
            ];
        }
        else if (this.login_user == "faculty") {
            this.studentMenuShow = false;
            this.facultyMenuShow = true;
            this.homePage = "LoadInstitutePage";
            /*-------- Faculty Menu --------*/
            this.facultyPages = [
                { title: "Home", component: "FacHomePage", icon: "md-home", id: "1" },
                {
                    title: "Profile",
                    component: "FacProfilePage",
                    icon: "md-person",
                    id: "2"
                },
                {
                    title: "Assignments",
                    component: "FacAssignmentPage",
                    icon: "paper",
                    id: "3"
                },
                {
                    title: "View Assignments",
                    component: "FacViewAssignmentPage",
                    icon: "paper",
                    id: "4"
                },
                {
                    title: "Change Password",
                    component: "FacChangePasswordPage",
                    icon: "md-lock",
                    id: "5"
                },
                {
                    title: "About Institute",
                    component: "AboutInstPage",
                    icon: "md-school",
                    id: "6"
                },
                {
                    title: "News / Events",
                    component: "FacEventsPage",
                    icon: "md-school",
                    id: "7"
                },
                {
                    title: "Notice",
                    component: "FacNoticesPage",
                    icon: "md-school",
                    id: "8"
                },
                {
                    title: "Logout",
                    component: "FacLgoutPage",
                    icon: "md-log-out",
                    id: "9"
                }
            ];
        }
    };
    MenuPage.prototype.openPage = function (pages) {
        localStorage.setItem("menu_id", pages.id);
        this.nav.push(pages.component);
        // this.pushSetup();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-menu",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/menu/menu.html"*/'<ion-menu [content]="content" side="left" type="overlay">\n  <ion-header>\n    <ion-toolbar menuClose class="menuBar">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="card-background-page">\n    <ion-list *ngIf="studentMenuShow">\n      <button\n        menuClose\n        class="left-menu"\n        ion-item\n        *ngFor="let p of studentPages"\n        (click)="openPage(p)"\n      >\n        <ion-icon\n          class="menu-icon-style"\n          name="{{ p.icon }}"\n          item-left\n        ></ion-icon>\n        <span *ngIf="p.title == \'Home\'"> Home</span>\n        <span *ngIf="p.title == \'About Student\'">About Student</span>\n        <span *ngIf="p.title == \'About Institute\'">About Institute</span>\n        <span *ngIf="p.title == \'News and Events\'">News and Events</span>\n        <span *ngIf="p.title == \'Circular and Notices\'"\n          >Circular and Notices</span\n        >\n        <span *ngIf="p.title == \'Exam Schedule\'">Exam Schedule</span>\n        <span *ngIf="p.title == \'Assignments\'">Assignments</span>\n        <span *ngIf="p.title == \'SMS\'">SMS</span>\n        <!-- <span *ngIf="p.title == \'School Calendar\'">School Calendar</span> -->\n\n        <!-- <span *ngIf="p.title == \'Attendance\'">Attendance</span> -->\n        <span *ngIf="p.title == \'TimeTable\'">Class Schedule</span>\n        <span *ngIf="p.title == \'Progress Report\'">Progress Report</span>\n        <span *ngIf="p.title == \'Videos\'">Videos</span>\n        <span *ngIf="p.title == \'Contact Us\'">Contact Us</span>\n        <span *ngIf="p.title == \'Logout\'">Logout</span>\n      </button>\n    </ion-list>\n\n    <ion-list *ngIf="facultyMenuShow">\n      <button\n        menuClose\n        class="left-menu"\n        ion-item\n        *ngFor="let p of facultyPages"\n        (click)="openPage(p)"\n      >\n        <ion-icon\n          class="menu-icon-style"\n          name="{{ p.icon }}"\n          item-left\n        ></ion-icon>\n\n        <span *ngIf="p.title == \'Home\'">Home</span>\n        <span *ngIf="p.title == \'Profile\'">Profile</span>\n        <span *ngIf="p.title == \'About Institute\'">About Institute</span>\n        <span *ngIf="p.title == \'Assignments\'"> Assignments</span>\n        <span *ngIf="p.title == \'View Assignments\'"> View Assignments</span>\n\n        <span *ngIf="p.title == \'Change Password\'">\n          Change Password\n        </span>\n        <span *ngIf="p.title == \'News / Events\'">News and Events</span>\n        <span *ngIf="p.title == \'Notice\'">Notice</span>\n        <span *ngIf="p.title == \'Logout\'">Logout</span>\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #content [root]="homePage"></ion-nav>\n'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/menu/menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(1038);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ })

});
//# sourceMappingURL=22.js.map