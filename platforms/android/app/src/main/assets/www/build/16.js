webpackJsonp([16],{

/***/ 1043:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudAssignmentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage_ngx__ = __webpack_require__(373);
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
 * Generated class for the StudAssignmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudAssignmentsPage = /** @class */ (function () {
    function StudAssignmentsPage(navCtrl, navParams, authService, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.selectedSubject = [];
        this.allSubject = [];
        this.noAssignment = true;
        this.subjectList = [];
        this.noData = false;
        this.dropdown = true;
        this.flag = false;
        /*-------Read/UnRead Assignment ------*/
        this.assignment_count = 0;
        this.unread_assignment = [];
        this.read_assignment = [];
        this.displayAssignmentInfo();
    }
    StudAssignmentsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad StudAssignmentsPage");
        this.presentLoadingCustom();
    };
    StudAssignmentsPage.prototype.presentLoadingCustom = function () {
        var loading = this.loadingCtrl.create({
            content: "Loading...",
            duration: 2000
        });
        loading.onDidDismiss(function () {
            console.log("Dismissed loading");
        });
        loading.present();
    };
    StudAssignmentsPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    StudAssignmentsPage.prototype.displayAssignmentInfo = function () {
        var _this = this;
        this.hide = true;
        var assignmentUrl = "assignments-details";
        this.subjectList = [];
        this.authService.getStudentData(assignmentUrl).subscribe(function (data) {
            console.log(data);
            _this.data = JSON.parse(data._body);
            _this.assignmentInfo = _this.data.data;
            console.log("length assignment: ", _this.assignmentInfo);
            if (_this.assignmentInfo.length == 0) {
                _this.noData = true;
                _this.noDataValue = "No Items to Display";
                _this.noAssignment = false;
                // } else if (
                //   this.assignmentInfo.assignmentList == 0 ||
                //   this.assignmentInfo.assignmentList == undefined
                // ) {
                //   this.noData = true;
                //   this.noAssignment = false;
                // } else {
                //   this.noData = false;
                //   this.noAssignment = true;
            }
            for (var i = 0; i < _this.assignmentInfo.length; i++) {
                if (_this.assignmentInfo[i].assignmentList == "" ||
                    _this.assignmentInfo[i].assignmentList == "null" ||
                    _this.assignmentInfo[i].assignmentList == null ||
                    _this.assignmentInfo[i].assignmentList === null ||
                    _this.assignmentInfo[i].assignmentList == undefined) {
                    // this.allSubject = ["Nothing to display"];
                    console.log("flag: ", _this.flag);
                    if (_this.flag != true) {
                        _this.flag = false;
                        console.log("Nothing to display");
                        _this.noAssignment = false;
                        _this.noData = true;
                        _this.noDataValue = "No Items to display";
                    }
                    else {
                    }
                }
                else {
                    _this.noAssignment = true;
                    _this.flag = true;
                    _this.noData = false;
                    if (_this.assignmentInfo[i].subname != null) {
                        _this.subjectList.push(_this.assignmentInfo[i].subname);
                    }
                    console.log("this.subjectList.push", _this.assignmentInfo[i].subname);
                }
            }
            console.log("subjectList: ", _this.subjectList);
            console.log("assignmentInfo: ", _this.assignmentInfo);
            // console.log(this.assignmentInfo[0].subname);
            _this.allSubject = [];
            for (var i = 0; i < _this.assignmentInfo.length; i++) {
                _this.hide = true;
                // console.log("length:", this.assignmentInfo[i].assignmentList.length);
                if (_this.assignmentInfo[i].assignmentList == "" ||
                    _this.assignmentInfo[i].assignmentList == null ||
                    _this.assignmentInfo[i].assignmentList == "null" ||
                    _this.assignmentInfo[i].assignmentList === null ||
                    _this.assignmentInfo[i].assignmentList == undefined) {
                    // this.allSubject = ["Nothing to display"];
                }
                else {
                    for (var j = 0; j < _this.assignmentInfo[i].assignmentList.length; j++) {
                        _this.allSubject.push({
                            assignNo: _this.assignmentInfo[i].assignmentList[j].assignedNo,
                            assignment: _this.assignmentInfo[i].assignmentList[j],
                            subname: _this.assignmentInfo[i].subname,
                            read: false
                        });
                        _this.unread_assignment.push({
                            assignment: _this.assignmentInfo[i].assignmentList[j]
                        });
                        // console.log("allSubject: ", this.allSubject);
                    }
                }
            }
            console.log("assignNo: ", _this.allSubject);
            _this.allSubject.sort(function (a, b) { return a.assignment.assignedNo - b.assignment.assignedNo; });
            console.log(_this.allSubject);
            // if (this.read_assignment != null) {
            //   this.read_assignment = JSON.parse(
            //     localStorage.getItem("read_assignment")
            //   );
            // }
            console.log("All assignment: ", _this.allSubject);
            console.log("read Assignment:", _this.read_assignment);
            // if (this.read_assignment != null) {
            //   for (let k = 0; k < this.assignmentInfo.length; k++) {
            //     for (let l = 0; l < this.read_assignment.length; l++)
            //       if (
            //         this.read_assignment[l].assignment.assignedNo ===
            //         this.assignmentInfo[k].assignment.assignedNo
            //       ) {
            //         this.allSubject[k].read = true;
            //       }
            //   }
            // } else {
            //   console.log("read assignment empty");
            // }
            console.log("allsubject read:", _this.allSubject);
            // localStorage.setItem(
            //   "assignment_count",
            //   JSON.stringify(this.assign_new_count)
            // );
        }, function (err) {
            if (err.status === 0) {
                alert("Network Connection Error. Please try Again.");
                _this.navCtrl.setRoot("studHomePage");
            }
        });
    };
    StudAssignmentsPage.prototype.getSubject = function () {
        console.log("Selected assignment", this.subjectName);
        localStorage.setItem("selectedSubject", this.subjectName);
        this.selectedSubject = [];
        for (var i = 0; i < this.assignmentInfo.length; i++) {
            if (this.subjectName == this.assignmentInfo[i].subname) {
                this.hide = false;
                console.log("Subject Selected: ", this.assignmentInfo[i].subname);
                // console.log(
                //   "inside loop: ",
                //   this.assignmentInfo[i].assignmentList.length
                // );
                if (this.assignmentInfo[i].assignmentList == "" ||
                    this.assignmentInfo[i].assignmentList == null ||
                    this.assignmentInfo[i].assignmentList == "null" ||
                    this.assignmentInfo[i].assignmentList === null ||
                    this.assignmentInfo[i].assignmentList == undefined ||
                    this.assignmentInfo[i].subname == null) {
                }
                else {
                    for (var j = 0; j < this.assignmentInfo[i].assignmentList.length; j++) {
                        this.selectedSubject.push({
                            assignment: this.assignmentInfo[i].assignmentList[j],
                            subname: this.assignmentInfo[i].subname
                        });
                        console.log("val inside loop: ", this.selectedSubject);
                    }
                }
            }
        }
        if (this.subjectName == "All Subject") {
            this.hide = true;
            this.allSubject = [];
            // this.subjectList = [];
            console.log("clear subjectList:", this.subjectList);
            this.displayAssignmentInfo();
        }
    };
    StudAssignmentsPage.prototype.displayAssignmentDesc = function (item) {
        /*------- Assignment Count ------*/
        var _this = this;
        // console.log("assignment Count:", this.assign_new_count);
        // this.assign_old_count = JSON.parse(
        //   localStorage.getItem("assignment_count")
        // );
        // let assignment_count_dec = this.assign_old_count - 1;
        // console.log("assignment count: ", assignment_count_dec);
        // if (assignment_count_dec > 0) {
        //   localStorage.setItem(
        //     "assignment_count",
        //     JSON.stringify(assignment_count_dec)
        //   );
        //   // this.storage.setItem("assignment", this.assignment_count).then(() => {
        //   //   console.log("assignment count Updated");
        //   //   console.log(data);
        //   // });
        // }
        // this.unread_assignment.push({
        //   assignment_no: item.assignedNo,
        //   read: true
        // });
        // this.read_assignment.push(item.assignment);
        console.log("unread assignment:", this.unread_assignment);
        console.log("item.assignment.assignedNo:", item.assignment.assignedNo);
        // this.unread_assignment = this.read_assignment.filter(
        //   assignedNo => item.assignment
        // );
        var read_assign = this.unread_assignment.filter(function (item) {
            for (var i = 0; i < _this.unread_assignment.length; i++) {
                return (_this.unread_assignment[i].assignment.assignedNo ==
                    item.assignment.assignedNo);
            }
        });
        console.log("read_assign:", read_assign);
        this.read_assignment.push({ asignedNo: read_assign });
        console.log("read_assignment:", this.read_assignment);
        // if (read_assign == null) {
        // } else {
        //   for (let m = 0; m < read_assign.length; m++) {
        //     // for (let n = 0; n < this.read_assignment.length; n++) {
        //     if (this.read_assignment == null) {
        //       this.read_assignment.push({
        //         assignedNo: this.unread_assignment[m].assignedNo
        //       });
        //     } else if (
        //       this.read_assignment[m].assignment.assignedNo !=
        //       read_assign[m].assignedNo
        //     ) {
        //       this.read_assignment.push({
        //         assignedNo: this.unread_assignment[m].assignedNo
        //       });
        //     }
        //     // }
        //   }
        // }
        console.log("assigned read assignment:", this.read_assignment);
        var unread_assign = this.unread_assignment.filter(function (item) {
            for (var i = 0; i < _this.unread_assignment.length; i++) {
                return (_this.unread_assignment[i].assignment.assignedNo !=
                    item.assignment.assignedNo);
            }
        });
        console.log("read assignment - read_assign:", this.read_assignment);
        // this.read_assignment.push(read_assign);
        // console.log("read assignment:", this.read_assignment);
        console.log("unread_assign assignment:", unread_assign);
        localStorage.setItem("read_assignment", JSON.stringify(this.read_assignment));
        /*------- end Assignment Count ----*/
        console.log("item: ", item);
        localStorage.setItem("selectedAssigment", JSON.stringify(item));
        console.log("Selected Subject - Assignment: ", JSON.parse(localStorage.getItem("selectedAssigment")));
        this.navCtrl.push("StudAssignmentInfoPage");
    };
    StudAssignmentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-stud-assignments",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/student/stud-assignments/stud-assignments.html"*/'<!--\n  Generated template for the StudAssignmentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu" style="color:white"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>Assignments</ion-title>\n    <ion-buttons right (click)="back()">\n      <button ion-button icon-only>\n        <ion-icon\n          ios="ios-arrow-back"\n          md="md-arrow-back"\n          style="color:white"\n        ></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class="content-page">\n  <!-- <div *ngIf="noData" class="alert alert-danger">\n      {{ noDataValue }}\n\n      asdfasd f\n    </div> -->\n\n  <div>\n    <ion-card>\n      <ion-card>\n        <p>\n          <span text-right>\n            MBBS-A\n          </span>\n          <span float-right>Amritha</span>\n        </p>\n\n        <p>\n          <span text-left>\n            Carbohydrates\n          </span>\n          <span float-right> 25th Oct 2019</span>\n        </p>\n      </ion-card>\n\n      <ion-card>\n        <p>\n          <span text-left>\n            Submission Date\n          </span>\n          <span float-right> 28th Oct 2019</span>\n        </p>\n      </ion-card>\n\n      <ion-card>\n        <h3 text-center style="padding: 5px;">\n          Carbohydrates\n        </h3>\n        <ion-card-content>\n          We are often drew back when it comes to Biochemistry during First year\n          of MBBS. It’s not simply a confusing subject, but you have to mug up a\n          lot from this. Some even get to the brink of failing and start looking\n          out for only important topics, so it’s much easier to pass out in the\n          semester. For such students, we have got the list. Below are the\n          important topics to study for Biochemistry during First year of MBBS.\n          Before we go, we hope you’ve got some important Biochemistry books in\n          your pocket. If not, you can get them here for free:\n          <ul>\n            <li>\n              <a\n                href="https://medicforyou.in/lippincott-biochemistry-pdf-download"\n                >U. Satyanarayana</a\n              >\n            </li>\n            <li>\n              <a\n                href="https://medicforyou.in/lippincott-biochemistry-pdf-download"\n                >Harper’s Biochemistry</a\n              >\n            </li>\n            <li>\n              <a\n                href="https://medicforyou.in/lippincott-biochemistry-pdf-download"\n                >Lipincott Illustrated Biochemistry</a\n              >\n            </li>\n          </ul>\n          <h3>Carbohydrates</h3>\n\n          <ul>\n            <li>Glycogen Storage diseases</li>\n            <li>Glycolysis</li>\n            <li>TCA cycle</li>\n            <li>Glycogen Metabolism</li>\n            <li>Gluconeogenesis</li>\n            <li>Mucopolysaccharidosis</li>\n            <li>Glucose transporters</li>\n\n            <li>Lactose intolerance</li>\n\n            <li>Test for carbohydrates</li>\n          </ul>\n        </ion-card-content>\n      </ion-card>\n    </ion-card>\n  </div>\n\n  <div class="form-attendance" style="display: none;">\n    <ion-item *ngIf="noAssignment">\n      <ion-label floating>Select Subjects</ion-label>\n      <ion-select\n        required\n        name="subject"\n        [(ngModel)]="subjectName"\n        (ionChange)="getSubject()"\n      >\n        <ion-option selected="true" [value]="all">All Subject</ion-option>\n        <ion-option *ngFor="let item of subjectList" [value]="item.subname"\n          >{{ item }}</ion-option\n        >\n      </ion-select>\n    </ion-item>\n\n    <ion-list *ngIf="hide" style="display: none;">\n      <div>\n        <div class="card">\n          <ion-grid>\n            <ion-row\n              class="card-row divider"\n              *ngFor="let item of allSubject.slice().reverse(); let i = index"\n            >\n              <ion-col class="icon-col">\n                <button\n                  ion-button\n                  class="btn-icon"\n                  (click)="displayAssignmentDesc(item)"\n                  full\n                >\n                  Created Date:<br />{{ item.assignment.assigneddate }}\n                </button>\n              </ion-col>\n              <ion-col class="icon-info-col">\n                <button\n                  class="btn-icon-info"\n                  (click)="displayAssignmentDesc(item)"\n                >\n                  <h4>{{ item.assignment.title }}</h4>\n                  {{ item.assignment.assigneeName }}\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </div>\n    </ion-list>\n\n    <ion-list style="display: none;">\n      <div>\n        <div class="card">\n          <ion-grid>\n            <ion-row\n              class="card-row divider"\n              *ngFor="let item of selectedSubject; let i = index"\n            >\n              <ion-col class="icon-col">\n                <button\n                  ion-button\n                  class="btn-icon"\n                  (click)="displayAssignmentDesc(item)"\n                  full\n                >\n                  Created Date:<br />{{ item.assignment.assigneddate }}\n                </button>\n              </ion-col>\n              <ion-col class="icon-info-col">\n                <button\n                  class="btn-icon-info"\n                  (click)="displayAssignmentDesc(item)"\n                >\n                  <h4>{{ item.assignment.title }}</h4>\n                  {{ item.assignment.assigneeName }}\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer>\n  <p><img src="../../assets/imgs/atc.jpg" /> Powered By ATC ONLINE</p>\n</ion-footer>\n'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/student/stud-assignments/stud-assignments.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage_ngx__["a" /* NativeStorage */]])
    ], StudAssignmentsPage);
    return StudAssignmentsPage;
}());

//# sourceMappingURL=stud-assignments.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudAssignmentsPageModule", function() { return StudAssignmentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stud_assignments__ = __webpack_require__(1043);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_froala_wysiwyg__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StudAssignmentsPageModule = /** @class */ (function () {
    function StudAssignmentsPageModule() {
    }
    StudAssignmentsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__stud_assignments__["a" /* StudAssignmentsPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__stud_assignments__["a" /* StudAssignmentsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot()
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__stud_assignments__["a" /* StudAssignmentsPage */]]
        })
    ], StudAssignmentsPageModule);
    return StudAssignmentsPageModule;
}());

//# sourceMappingURL=stud-assignments.module.js.map

/***/ })

});
//# sourceMappingURL=16.js.map