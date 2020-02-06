webpackJsonp([10],{

/***/ 1051:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudSmsPage; });
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



/**
 * Generated class for the StudSmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudSmsPage = /** @class */ (function () {
    function StudSmsPage(navCtrl, navParams, authService, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.isFavorite = false;
        this.Sms = "UnreadMessage";
        this.count = 1;
        this.test = [];
        this.favorite = [];
        this.Favorite1 = [];
        this.food = {
            id: 3,
            name: "Pizza",
            price: 16
        };
        var orders = [
            { food_id: 2, table_id: 5 },
            { food_id: 2, table_id: 5 },
            { food_id: 1, table_id: 5 },
            { food_id: 3, table_id: 5 },
            { food_id: 1, table_id: 5 }
        ];
        console.log(orders);
        var index = orders.findIndex(function (order) { return order.food_id === _this.food.id; });
        this.Favorite1.push(orders);
        console.log(this.Favorite1);
        //orders.splice(index, 1);
        // console.log(orders);
        this.getMessagesInfo();
    }
    StudSmsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SmsPage");
        var a = [{ id: 123, randomvalue: "hello", othervalue: "sup" }];
        var b = [
            { id: 123, randomvalue: "hello", othervalue: "sup" },
            { id: 125, randomvalue: "sup", othervalue: "hello" }
        ];
        var bindex = b.reduce(function (acc, obj) {
            acc[obj.id] = obj;
            return acc;
        }, {});
        var unique = a.filter(function (obj) { return bindex[obj.id]; });
        console.log(unique);
        console.log("ionViewDidLoad SmsPage");
    };
    StudSmsPage.prototype.back = function () {
        this.navCtrl.pop();
        //this.home.getMessagesInfo();
    };
    StudSmsPage.prototype.getMessagesInfo = function () {
        var _this = this;
        var getMessageUrl = "/messages";
        this.authService.getMessageData(getMessageUrl).subscribe(function (data) {
            console.log(data);
            _this.data = JSON.parse(data._body);
            _this.MessageInfo = [_this.data][0].data;
            console.log(_this.MessageInfo);
            if (_this.MessageInfo.length == 0) {
                _this.noData = true;
                _this.noDataValue = " No Items to Display";
            }
            if ((_this.message = JSON.parse(localStorage.getItem("MessageId")))) {
                _this.message = JSON.parse(localStorage.getItem("MessageId"));
                console.log(_this.message);
                var bindex_1 = _this.message.reduce(function (acc, obj) {
                    acc[obj.id] = obj;
                    console.log("acc:", acc);
                    return acc;
                }, {});
                console.log("bindex:", bindex_1);
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
    StudSmsPage.prototype.favoriteFilm = function (x) {
        this.isFavorite = true;
    };
    StudSmsPage.prototype.unfavoriteFilm = function (x) {
        console.log(x);
        this.isFavorite = false;
    };
    StudSmsPage.prototype.view = function (x) {
        console.log(x);
        if ((this.test = JSON.parse(localStorage.getItem("MessageId")))) {
            this.test = JSON.parse(localStorage.getItem("MessageId"));
            var alert_1 = this.alertCtrl.create({
                title: x.institution_name,
                subTitle: x.message_content,
                buttons: ["OK"]
            });
            alert_1.present();
            this.msgid = { id: x.id };
            this.test.push(this.msgid);
            this.test = this.test.reduce(function (x, y) { return (x.findIndex(function (e) { return e.id == y.id; }) < 0 ? x.concat([y]) : x); }, []);
            console.log(this.test);
            localStorage.setItem("MessageId", JSON.stringify(this.test));
            this.getMessagesInfo();
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: x.institution_name,
                subTitle: x.message_content,
                buttons: ["OK"]
            });
            alert_2.present();
            this.test = [{ id: 2011300 }];
            this.msgid = { id: x.id };
            this.test.push(this.msgid);
            this.test = this.test.reduce(function (x, y) { return (x.findIndex(function (e) { return e.id == y.id; }) < 0 ? x.concat([y]) : x); }, []);
            console.log(this.test);
            localStorage.setItem("MessageId", JSON.stringify(this.test));
            this.getMessagesInfo();
        }
    };
    StudSmsPage.prototype.deleteMessage = function (MsgId) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: "Do you want to delete this message ?",
            buttons: [
                {
                    text: "No",
                    handler: function () {
                        console.log("Disagree clicked");
                    }
                },
                {
                    text: "Yes",
                    handler: function () {
                        console.log(MsgId);
                        console.log("Agree clicked");
                        _this.authService.getMessageDelete(MsgId).subscribe(function (data) {
                            console.log(data);
                            _this.getMessagesInfo();
                        }, function (err) {
                            console.log(err);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    StudSmsPage.prototype.Favorite = function (x) {
        console.log(x);
        if ((this.favorite = JSON.parse(localStorage.getItem("FavoriteId")))) {
            this.favorite = JSON.parse(localStorage.getItem("FavoriteId"));
            this.favid = { id: x.id };
            this.favorite.push(this.favid);
            this.favorite = this.favorite.reduce(function (x, y) { return (x.findIndex(function (e) { return e.id == y.id; }) < 0 ? x.concat([y]) : x); }, []);
            console.log(this.favorite);
            localStorage.setItem("FavoriteId", JSON.stringify(this.favorite));
            //this.getMessagesInfo();
        }
        else {
            this.favorite = [{ id: 2011300 }];
            this.msgid = { id: x.id };
            this.favorite.push(this.msgid);
            this.favorite = this.favorite.reduce(function (x, y) { return (x.findIndex(function (e) { return e.id == y.id; }) < 0 ? x.concat([y]) : x); }, []);
            console.log(this.favorite);
            localStorage.setItem("FavoriteId", JSON.stringify(this.favorite));
            //this.getMessagesInfo();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])()
        // home: HomePage;
        ,
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("back"),
        __metadata("design:type", Object)
    ], StudSmsPage.prototype, "responseData", void 0);
    StudSmsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-stud-sms",template:/*ion-inline-start:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/student/stud-sms/stud-sms.html"*/'\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu" style="color:white"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>SMS</ion-title>\n    <ion-buttons right (click)="back()">\n      <button ion-button icon-only>\n        <ion-icon\n          ios="ios-arrow-back"\n          md="md-arrow-back"\n          style="color:white"\n        ></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n  <div class="segments-sms">\n    <ion-segment [(ngModel)]="Sms">\n      <ion-segment-button value="UnreadMessage">\n        <ion-icon\n          style="color: #3ca198;"\n          ios="ios-mail"\n          md="md-mail"\n        ></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value="ReadMessage">\n        <ion-icon\n          style="color: #3ca198;"\n          ios="ios-mail-open"\n          md="md-mail-open"\n        ></ion-icon>\n      </ion-segment-button>\n      <!-- <ion-segment-button value="Favorite">\n        <ion-icon ios="ios-star" md="md-star"></ion-icon>\n      </ion-segment-button> -->\n    </ion-segment>\n  </div>\n</ion-header>\n\n<ion-content padding class="content-page">\n  <div class="form-attendance">\n    <div *ngIf="noData" class="alert alert-danger">\n      {{ noDataValue }}\n    </div>\n  \n    <div [ngSwitch]="Sms">\n      <ion-list *ngSwitchCase="\'UnreadMessage\'">\n        <div *ngFor="let y of UnreadMsg">\n          <ion-item>\n            <ion-icon\n              (click)="deleteMessage(y.id)"\n              ios="ios-trash"\n              md="md-trash"\n              item-start\n              style="color: #b70218;"\n            ></ion-icon>\n            <div>\n              <h2 (click)="view(y)">{{ y.institution_name }}</h2>\n              <!-- <div style="    margin-top: -15px;\n            margin-left: -29px">\n                <input (click)="Favorite(y)" style="color:yellow" class="star" type="checkbox" title="bookmark page" checked>\n              </div> -->\n              <p (click)="view(y)" ng-bind-html="item.get(\'Content\') | limitTo:5">\n                {{ y.message_content }}\n              </p>\n            </div>\n          </ion-item>\n        </div>\n      </ion-list>\n    </div>\n    <div [ngSwitch]="Sms">\n      <ion-list *ngSwitchCase="\'ReadMessage\'">\n        <div *ngFor="let x of ReadMsg">\n          <ion-item>\n            <ion-icon\n              (click)="deleteMessage(x.id)"\n              ios="ios-trash"\n              md="md-trash"\n              item-start\n              style="color: #b70218;"\n            ></ion-icon>\n            <div>\n              <h2 (click)="view(x)">{{ x.institution_name }}</h2>\n              <!-- <div style="    margin-top: -15px;\n                margin-left: -29px">\n                    <input (click)="Favorite(y)" style="color:yellow" class="star" type="checkbox" title="bookmark page" checked>\n                  </div> -->\n              <p (click)="view(x)" ng-bind-html="item.get(\'Content\') | limitTo:5">\n                {{ x.message_content }}\n              </p>\n            </div>\n          </ion-item>\n        </div>\n      </ion-list>\n    </div>\n  </div>\n  \n</ion-content>\n<ion-footer>\n    <p><img src="../../assets/imgs/atc.jpg" /> Powered By ATC ONLINE</p>\n</ion-footer>'/*ion-inline-end:"/home/sushmitha/dontdelete/velan/medical-app/src/pages/student/stud-sms/stud-sms.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], StudSmsPage);
    return StudSmsPage;
}());

//# sourceMappingURL=stud-sms.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudSmsPageModule", function() { return StudSmsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stud_sms__ = __webpack_require__(1051);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StudSmsPageModule = /** @class */ (function () {
    function StudSmsPageModule() {
    }
    StudSmsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__stud_sms__["a" /* StudSmsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__stud_sms__["a" /* StudSmsPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__stud_sms__["a" /* StudSmsPage */]]
        })
    ], StudSmsPageModule);
    return StudSmsPageModule;
}());

//# sourceMappingURL=stud-sms.module.js.map

/***/ })

});
//# sourceMappingURL=10.js.map