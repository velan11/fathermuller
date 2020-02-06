webpackJsonp([12],{

/***/ 1049:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudProgressReportPage; });
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



// import * as jsPDF from "jspdf";
// import * as html2canvas from "html2canvas";
// import { File } from "@ionic-native/file";
// import { FileOpener } from "@ionic-native/file-opener/ngx";
/**
 * Generated class for the StudProgressReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudProgressReportPage = /** @class */ (function () {
    function StudProgressReportPage(navCtrl, navParams, authService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.exam_title = [];
        this.mark_details = [];
        this.noData = false;
        this.mark_details_key = [];
        this.mark_data = [];
        this.mark_details_data = [];
        this.getMarksInfo();
    }
    StudProgressReportPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad MarksPage");
        this.presentLoadingCustom();
    };
    StudProgressReportPage.prototype.presentLoadingCustom = function () {
        var loading = this.loadingCtrl.create({
            content: "Loading...",
            duration: 1000
        });
        loading.onDidDismiss(function () {
            console.log("Dismissed loading");
        });
        loading.present();
    };
    StudProgressReportPage.prototype.getMarksInfo = function () {
        var _this = this;
        var getMarksUrl = "student-marks";
        console.log("Marks Info-", getMarksUrl);
        this.authService.getStudentData(getMarksUrl).subscribe(function (data) {
            console.log(data);
            _this.data = JSON.parse(data._body);
            _this.responseData = _this.data.data;
            console.log("response data", _this.responseData);
            // this.toggleSection(0);
            console.log("this.responseData.mark_details:", _this.responseData.mark_details);
            if (_this.responseData.length > 0) {
                _this.noMarks = true;
                console.log("Marks Data: ", _this.responseData);
                // for (let key in this.responseData[0].mark_details) {
                //   console.log("key value: ", key);
                //   console.log(
                //     "Key Value Marks Details: ",
                //     this.responseData[0].mark_details[key][0].subject
                //   );
                //   this.mark_details_key.push(key);
                // }
                // console.log("key value details: ", this.mark_details_key);
                for (var i = 0; i < _this.responseData.length; i++) {
                    console.log("Exam Title: ", _this.responseData[i].exam_title);
                    _this.exam_title.push(_this.responseData[i].exam_title);
                    console.log("Exam Details: ", _this.responseData[i].mark_details);
                    // let key = this.mark_details_key[i];
                    for (var key in _this.responseData[i].mark_details) {
                        // let j;
                        console.log("key value: ", key);
                        console.log("Key Value Marks Details: ", _this.responseData[i].mark_details[key]);
                        _this.mark_details_data.push(_this.responseData[i].mark_details[key]);
                        console.log("marks details for loop:", _this.mark_details_data);
                    }
                    _this.mark_data.push({
                        exam_title: _this.responseData[i].exam_title,
                        mark_details: _this.mark_details_data
                    });
                    _this.mark_details_data = [];
                    // for (let j = 0; j < this.responseData[i].mark_details.length; j++) {
                    //   console.log(
                    //     "Exam Details marks: ",
                    //     this.responseData[i].this.mark_details_key[j].subject
                    //   );
                    //   this.mark_details.push(this.responseData[i].mark_details[j]);
                    // }
                }
                console.log("marks_details_value_end: ", _this.mark_details);
                console.log("marks_data: ", _this.mark_data);
                _this.toggleSection(0);
            }
            else {
                _this.noMarks = false;
                _this.noData = true;
                _this.noDataValue = "No Items to Display";
                console.log("No Items to Display");
            }
        }, function (err) {
            if (err.status === 401) {
                console.log("error log list: ", err.message);
            }
            if (err.status === 400) {
                console.log("Bad Request: ", err);
                alert("Bad Request");
            }
            if (err.status === 0) {
                alert("Network Connection Error. Please try Again.");
                _this.navCtrl.setRoot("StudHomePage");
            }
        });
    };
    StudProgressReportPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    /*-------- toggle mark display---*/
    StudProgressReportPage.prototype.toggleSection = function (i) {
        console.log("outside i=", i);
        if (i == 0) {
            console.log("inside i=", i);
            this.mark_data[i].open = this.mark_data[i].open;
        }
        this.mark_data[i].open = !this.mark_data[i].open;
    };
    StudProgressReportPage.prototype.toggleItem = function (i, j) {
        console.log();
        if (i == 0) {
            console.log("inside toggleItem i=", i);
            this.mark_data[i].mark_details[j].open = this.mark_data[i].mark_details[j].open;
        }
        this.mark_data[i].mark_details[j].open = !this.mark_data[i].mark_details[j]
            .open;
    };
    /*-------- end toggle mark display---*/
    /*---------Loading Method-----------*/
    StudProgressReportPage.prototype.DataLoading = function () {
        this.dataloading = this.loadingCtrl.create({
            content: "Loading..."
        });
        this.dataloading.present();
    };
    StudProgressReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-stud-progress-report",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/student/stud-progress-report/stud-progress-report.html"*/'<!--\n  Generated template for the StudProgressReportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu" style="color:white"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>Progress Report</ion-title>\n    <ion-buttons right (click)="back()">\n      <button ion-button icon-only>\n        <ion-icon\n          ios="ios-arrow-back"\n          md="md-arrow-back"\n          style="color:white"\n        ></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class="content-page">\n  <div class="form-attendance">\n    <!--<ion-item>\n      <ion-label floating\n        >Course<span class="mandatory-asterick">*</span></ion-label\n      >\n      <ion-select\n        interface="popover"\n        required\n        name="course"\n        [(ngModel)]="course_period"\n        (ionChange)="getMarksInfo()"\n      >\n        <ion-option *ngIf="changedate" aria-checked="true">\n          Select Course\n        </ion-option>\n        <ion-option\n          *ngFor="let item of course_list; let i = index; let l = last"\n          [value]="item.key"\n          [selected]="l"\n        >\n          {{ item.value }}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n  </div> -->\n\n  <div *ngIf="noData" class="alert alert-danger">\n    {{ noDataValue }}\n  </div>\n  <!--\n    <ion-grid *ngFor="let data of responseData; let i=index">\n      <h4 class="marks-title">{{data.exam_title}}</h4>\n      <div class="marks-grid-body">\n        <ion-row class="marks-row-head">\n          <ion-col class="marks-col-head">Subject</ion-col>\n          <ion-col class="marks-col-head">Max Marks</ion-col>\n          <ion-col class="marks-col-head">Min Marks</ion-col>\n          <ion-col class="marks-col-head">Marks Secured</ion-col>\n          <ion-col class="marks-col-head">Result</ion-col>\n        </ion-row>\n        <ion-row class="marks-row" *ngFor="let marks of data.mark_details">\n          <ion-col class="marks-col">{{marks.subject}}</ion-col>\n          <ion-col class="marks-col">{{marks.max_marks}}</ion-col>\n          <ion-col class="marks-col">{{marks.min_marks}}</ion-col>\n          <ion-col class="marks-col">{{marks.mark_secured}}</ion-col>\n          <ion-col class="marks-col">{{marks.result}}</ion-col>\n        </ion-row>\n      </div>\n    </ion-grid>\n  -->\n\n  <!-- <button *ngIf="noMarks" ion-button (click)="generatePdf()">\n    Generate Pdf\n  </button> -->\n\n  <!-- accordian section -->\n\n  <ion-list *ngIf="noMarks" class="accordion-list">\n    <!-- Save pdf id -->\n    <div id="Html2Pdf">\n      <!-- First Level -->\n      <ion-list-header\n        *ngFor="let item of mark_data; let i = index"\n        no-lines\n        no-padding\n      >\n        <!-- Toggle Button -->\n        <button\n          ion-item\n          full\n          (click)="toggleSection(i)"\n          class="marks-title"\n          detail-none\n          [ngClass]="{ \'section-active\': item.open, section: !item.open }"\n        >\n          <ion-icon\n            item-right\n            name="ios-arrow-back"\n            *ngIf="!item.open"\n          ></ion-icon>\n          <ion-icon\n            item-right\n            name="ios-arrow-down"\n            *ngIf="item.open"\n          ></ion-icon>\n          {{ item.exam_title }}\n        </button>\n        <ion-list *ngIf="item.mark_details && item.open" no-lines>\n          <ion-row class="marks-row-head">\n            <ion-col class="marks-col-head">Subject</ion-col>\n            <!-- <ion-col class="marks-col-head">Max Marks</ion-col> -->\n            <ion-col class="marks-col-head">Min Marks</ion-col>\n            <ion-col class="marks-col-head">Marks Secured</ion-col>\n            <ion-col class="marks-col-head">Result</ion-col>\n          </ion-row>\n\n          <!-- Second Level -->\n\n          <div\n            *ngFor="let child of item.mark_details; let j = index"\n            no-padding\n            class="animated fadeInDown"\n          >\n            <div *ngFor="let key of item.mark_details[j]">\n              <!-- Direct Add Button as Fallback -->\n              <!--\n              <ion-item *ngIf="!child.mark_details" ion-item detail-none class="child-item" text-wrap>\n            -->\n              <!--\n              <h2>{{ child.subject }}</h2>\n              <p text-lowercase>{{ child.result }}</p>\n            -->\n              <ion-row\n                class="marks-row"\n                *ngIf="!child.mark_details"\n                class="child-item"\n              >\n                <ion-col class="marks-col-subject" text-wrap>{{\n                  key.subject\n                }}</ion-col>\n                <!-- <ion-col class="marks-col"></ion-col> -->\n                <ion-col class="marks-col">{{ key.min_marks }}</ion-col>\n                <ion-col class="marks-col"\n                  >{{ key.mark_secured }}/{{ key.max_marks }}\n                </ion-col>\n                <ion-col class="marks-col">{{ key.result }}</ion-col>\n              </ion-row>\n              <!--\n              <button ion-button outline item-end (click)="buyItem(child)">{{ child.price }}</button>\n            -->\n              <!-- </ion-item> -->\n            </div>\n          </div>\n        </ion-list>\n      </ion-list-header>\n    </div>\n  </ion-list>\n</div>\n  <!-- end accordian section -->\n</ion-content>\n<ion-footer>\n    <p><img src="../../assets/imgs/atc.jpg" /> Powered By ATC ONLINE</p>\n</ion-footer>'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/student/stud-progress-report/stud-progress-report.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], StudProgressReportPage);
    return StudProgressReportPage;
}());

//# sourceMappingURL=stud-progress-report.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudProgressReportPageModule", function() { return StudProgressReportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stud_progress_report__ = __webpack_require__(1049);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StudProgressReportPageModule = /** @class */ (function () {
    function StudProgressReportPageModule() {
    }
    StudProgressReportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__stud_progress_report__["a" /* StudProgressReportPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__stud_progress_report__["a" /* StudProgressReportPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__stud_progress_report__["a" /* StudProgressReportPage */]]
        })
    ], StudProgressReportPageModule);
    return StudProgressReportPageModule;
}());

//# sourceMappingURL=stud-progress-report.module.js.map

/***/ })

});
//# sourceMappingURL=12.js.map