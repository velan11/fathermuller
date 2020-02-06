webpackJsonp([26],{

/***/ 1034:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacLgoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fac_auth_service_fac_auth_service__ = __webpack_require__(347);
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
 * Generated class for the FacLgoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacLgoutPage = /** @class */ (function () {
    function FacLgoutPage(navCtrl, alertCtrl, navParams, app, authFacService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.app = app;
        this.authFacService = authFacService;
        this.logoutData = { token: "" };
        this.presentAlert();
    }
    FacLgoutPage.prototype.presentAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Confirm LogOut  ",
            buttons: [
                {
                    text: "No",
                    role: "cancel",
                    handler: function () {
                        _this.navCtrl.pop();
                        console.log("No clicked");
                    }
                },
                {
                    text: "Yes",
                    handler: function () {
                        _this.logout();
                        console.log("Yes clicked");
                    }
                }
            ]
        });
        alert.present();
    };
    FacLgoutPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FacLgoutPage");
    };
    FacLgoutPage.prototype.logout = function () {
        var _this = this;
        var faculty_login = JSON.parse(localStorage.getItem("facultyData"));
        console.log("logout", faculty_login.faculty_login_key);
        var logoutval = "logout?faculty_login_key=";
        console.log("logoutval", logoutval);
        //       this.authService.getData(this.facultyData,'faculty-signin').then((result) => {
        this.authFacService
            .getlogData(logoutval, faculty_login.faculty_login_key)
            .subscribe(function (data) {
            console.log(data);
            var result = JSON.parse(data._body);
            _this.responseData = result;
            //       if(this.responseData.faculty_login_key){
            console.log(_this.responseData);
            localStorage.clear();
            localStorage.removeItem("facultyMenuShow");
            localStorage.removeItem("parentMenuShow");
            localStorage.removeItem("studentMenuShow");
            //       this.navCtrl.setRoot(LoginPage);
            _this.app.getRootNav().setRoot("LandingPage");
            //       }
        }, function (err) {
            if (err.status === 401 || err.status == 401 || err.status == "401") {
                alert("Unauthorised User");
                // redirect to the login route
                // or show a modal
                localStorage.clear();
                _this.app.getRootNav().setRoot("LandingPage");
            }
        });
    };
    FacLgoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-fac-lgout",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/faculty/faculty-logout/fac-lgout.html"*/'<!--\n  Generated template for the FacLgoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding> </ion-content>\n'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/faculty/faculty-logout/fac-lgout.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_2__providers_fac_auth_service_fac_auth_service__["a" /* FacAuthServiceProvider */]])
    ], FacLgoutPage);
    return FacLgoutPage;
}());

//# sourceMappingURL=fac-lgout.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacLgoutPageModule", function() { return FacLgoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fac_lgout__ = __webpack_require__(1034);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FacLgoutPageModule = /** @class */ (function () {
    function FacLgoutPageModule() {
    }
    FacLgoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fac_lgout__["a" /* FacLgoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__fac_lgout__["a" /* FacLgoutPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__fac_lgout__["a" /* FacLgoutPage */]]
        })
    ], FacLgoutPageModule);
    return FacLgoutPageModule;
}());

//# sourceMappingURL=fac-lgout.module.js.map

/***/ })

});
//# sourceMappingURL=26.js.map