webpackJsonp([27],{

/***/ 1032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacViewAssignmentModalPage; });
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


/**
 * Generated class for the FacViewAssignmentModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacViewAssignmentModalPage = /** @class */ (function () {
    function FacViewAssignmentModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.showReadList = false;
        this.showSentList = false;
        this.showDescList = false;
        this.assDesc = JSON.parse(localStorage.getItem("FacAssignmt"));
        console.log(this.assDesc.description);
    }
    FacViewAssignmentModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FacViewAssignmentModalPage");
    };
    FacViewAssignmentModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FacViewAssignmentModalPage.prototype.toggleReadList = function () {
        console.log(this.showReadList);
        if (this.showReadList == true) {
            this.showReadList = false;
        }
        else if (this.showReadList == false) {
            this.showReadList = true;
        }
    };
    FacViewAssignmentModalPage.prototype.toggleSentList = function () {
        if (this.showSentList == true) {
            this.showSentList = false;
        }
        else if (this.showSentList == false) {
            this.showSentList = true;
        }
    };
    FacViewAssignmentModalPage.prototype.toggleDescList = function () {
        if (this.showDescList == true) {
            this.showDescList = false;
        }
        else if (this.showDescList == false) {
            this.showDescList = true;
        }
    };
    FacViewAssignmentModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-fac-view-assignment-modal",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/faculty/fac-view-assignment-modal/fac-view-assignment-modal.html"*/'<!--\n  Generated template for the FacViewAssignmentModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons right (click)="dismiss()">\n      <button ion-button icon-only>\n        <ion-icon\n          ios="ios-arrow-back"\n          md="md-arrow-back"\n          style="color:white"\n        ></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Assignment Description</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="content-page">\n  <div class="form-attendance">\n      <div class="desc-view">\n          <div class="list-desc">\n            <button ion-button class="toggle" (click)="toggleDescList()">\n              <ion-icon name="add" *ngIf="!showDescList"></ion-icon>\n              <ion-icon name="remove" *ngIf="showDescList"></ion-icon>\n            </button>\n            <h3 class="desc-title">\n              Description:\n            </h3>\n            <p\n              *ngIf="showDescList"\n              class="desc"\n              [innerHTML]="assDesc.description"\n            ></p>\n          </div>\n          <div class="list-desc">\n            <button ion-button class="toggle" (click)="toggleReadList()">\n              <ion-icon name="add" *ngIf="!showReadList"></ion-icon>\n              <ion-icon name="remove" *ngIf="showReadList"></ion-icon>\n            </button>\n            <h3 class="desc-title">\n              Read Students List:\n            </h3>\n            <p class="desc" *ngIf="showReadList">{{ assDesc.read_student_list }}</p>\n          </div>\n          <div class="list-desc">\n            <button ion-button class="toggle" (click)="toggleSentList()">\n              <ion-icon name="add" *ngIf="!showSentList"></ion-icon>\n              <ion-icon name="remove" *ngIf="showSentList"></ion-icon>\n            </button>\n            <h3 class="desc-title">\n              Sent Students:\n            </h3>\n      \n            <p class="desc" *ngIf="showSentList">{{ assDesc.sent_to }}</p>\n          </div>\n          <div class="list-desc">\n            <h3 class="desc-title">\n              Expiry Date:\n            </h3>\n            <p class="desc">{{ assDesc.expiry_date }}</p>\n          </div>\n      \n          <div class="list-desc">\n            <h3 class="desc-title">\n              Sent From:\n            </h3>\n            <p class="desc">{{ assDesc.sent_from }}</p>\n          </div>\n        </div>\n  </div>\n \n</ion-content>\n<ion-footer>\n    <p><img src="../../assets/imgs/atc.jpg" /> Powered By ATC ONLINE</p>\n</ion-footer>'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/faculty/fac-view-assignment-modal/fac-view-assignment-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], FacViewAssignmentModalPage);
    return FacViewAssignmentModalPage;
}());

//# sourceMappingURL=fac-view-assignment-modal.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacViewAssignmentModalPageModule", function() { return FacViewAssignmentModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fac_view_assignment_modal__ = __webpack_require__(1032);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FacViewAssignmentModalPageModule = /** @class */ (function () {
    function FacViewAssignmentModalPageModule() {
    }
    FacViewAssignmentModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__fac_view_assignment_modal__["a" /* FacViewAssignmentModalPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__fac_view_assignment_modal__["a" /* FacViewAssignmentModalPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__fac_view_assignment_modal__["a" /* FacViewAssignmentModalPage */]]
        })
    ], FacViewAssignmentModalPageModule);
    return FacViewAssignmentModalPageModule;
}());

//# sourceMappingURL=fac-view-assignment-modal.module.js.map

/***/ })

});
//# sourceMappingURL=27.js.map