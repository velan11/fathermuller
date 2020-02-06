webpackJsonp([25],{

/***/ 1035:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadInstitutePage; });
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
 * Generated class for the LoadInstitutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoadInstitutePage = /** @class */ (function () {
    function LoadInstitutePage(navCtrl, navParams, authFacService, appCtrl, atrCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authFacService = authFacService;
        this.appCtrl = appCtrl;
        this.atrCtrl = atrCtrl;
        this.loadingCtrl = loadingCtrl;
        this.institution_id = [];
        this.presentLoadingDefault();
    }
    LoadInstitutePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad LoadInstitutePage");
        this.getInstitute();
    };
    LoadInstitutePage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: "Logging In..."
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 800);
    };
    LoadInstitutePage.prototype.getInstitute = function () {
        var _this = this;
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
            console.log("institution length: ", _this.responseData.institution_lists.length);
            // this.getCourse();
            if (_this.responseData.institution_lists.length > 1) {
                _this.institution_lists = _this.responseData.institution_lists;
                // this.getCourse();
                localStorage.setItem("getStudents.institution", JSON.stringify(_this.responseData.institution_lists.id));
                console.log("response Institution: ", _this.responseData.institution_lists[0].id);
                /*----- alert for institution popup ------*/
                var alert_1 = _this.atrCtrl.create();
                alert_1.setTitle("Select Institution");
                for (var i = 0; i < _this.institution_lists.length; i++) {
                    // institution list
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
                _this.navCtrl.setRoot("FacHomePage");
            }
            else {
                localStorage.setItem("institution_id", JSON.stringify(_this.responseData.institution_lists[0].id));
                console.log("response Institution: ", _this.responseData.institution_lists[0].id);
                _this.navCtrl.setRoot("FacHomePage");
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
    LoadInstitutePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-load-institute",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/faculty/load-institute/load-institute.html"*/'<!--\n  Generated template for the LoadInstitutePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>loadInstitute</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding> </ion-content>\n'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/faculty/load-institute/load-institute.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_fac_auth_service_fac_auth_service__["a" /* FacAuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], LoadInstitutePage);
    return LoadInstitutePage;
}());

//# sourceMappingURL=load-institute.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadInstitutePageModule", function() { return LoadInstitutePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__load_institute__ = __webpack_require__(1035);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoadInstitutePageModule = /** @class */ (function () {
    function LoadInstitutePageModule() {
    }
    LoadInstitutePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__load_institute__["a" /* LoadInstitutePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__load_institute__["a" /* LoadInstitutePage */]),
            ],
        })
    ], LoadInstitutePageModule);
    return LoadInstitutePageModule;
}());

//# sourceMappingURL=load-institute.module.js.map

/***/ })

});
//# sourceMappingURL=25.js.map