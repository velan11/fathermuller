import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AuthServiceProvider } from "../../../providers/auth-service/auth-service";

import {
  CalendarModal,
  CalendarModalOptions,
  DayConfig,
  CalendarResult
} from "ion2-calendar";
import { CalendarComponentOptions } from "ion2-calendar";
import { AlertController } from "ionic-angular";
import { LoadingController } from "ionic-angular";

/**
 * Generated class for the StudCalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-stud-calendar",
  templateUrl: "stud-calendar.html"
})
export class StudCalendarPage {
  responseData;
  user_id;
  date: string[];
  client_id;
  title = [];
  calc = 1;
  student_id;
  data;
  MM;
  M2;
  obj: any;
  date1: any | Date = new Date();
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string | any[];
  currentMonth: any;
  currentYear: any;
  currentDate: any = [];
  simMoth = new Date().getUTCMonth() + 1;
  current_Moth = new Date().getUTCMonth();
  simYr = new Date().getFullYear();
  reposDat: any = [];
  count: any = [];
  Show_Event = [];
  curtData = [
    { year: 2018, month: 9, date: 26, type: "HOLIDAY" },
    { year: 2018, month: 9, date: 12, type: "EVENT" },
    { year: 2018, month: 9, date: 12, type: "HOLIDAY" },
    { year: 2018, month: 9, date: 12, type: "HOLIDAY" },
    { year: 2018, month: 9, date: 27, type: "REMAINDER" },
    { year: 2018, month: 9, date: 27, type: "EVENT" },
    { year: 2018, month: 9, date: "01", type: "REMAINDER" },
    { year: 2018, month: 10, date: 14, type: "HOLIDAY" },
    { year: 2018, month: 10, date: 16, type: "EVENT" },
    { year: 2018, month: 10, date: 17, type: "HOLIDAY" },
    { year: 2018, month: 10, date: 17, type: "REMAINDER" },
    { year: 2018, month: 10, date: 18, type: "HOLIDAY" },
    { year: 2018, month: 10, date: 18, type: "EVENT" },
    { year: 2018, month: 10, date: 19, type: "EVENT" },
    { year: 2018, month: 10, date: 19, type: "REMAINDER" },
    { year: 2018, month: 10, date: 29, type: "REMAINDER" },
    { year: 2018, month: 10, date: 21, type: "EVENT" },
    { year: 2018, month: 10, date: 22, type: "HOLIDAY" }
  ];
  yyy;
  test;
  test1;
  AssnMt: any;
  eventSource = [];
  demo_ary: Array<{ year: any; month: any; date: any; type: any }> = [];
  MonthAry: any = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "	June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  currentEvents: Array<{
    year: any | number | void;
    month: any | number;
    date: any | number | void | null;
    type: any | number;
    description: any | string | number;
    title: any | number | string;
  }> = [];
  student_info;
  _daysConfig: DayConfig[] | any = [];
  constructor(
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public authService: AuthServiceProvider,
    public navParams: NavParams
  ) {
    setTimeout(() => {});
    this.getCalanderfo();
  }

  optionsRange: CalendarComponentOptions | any = {
    pickMode: "multi",
    color: "my-day",
    weekStart: 0,
    // monthStart:1,
    from: new Date(2018, 0, 1),
    to: new Date(2019, 12),
    daysConfig: this._daysConfig,
    showMonthPicker: true,
    // defaultTitle:"anesh"
    showToggleButtons: true,
    monthPickerFormat: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC"
    ],
    // title: 'BASIC',
    disableWeeks: []
  };

  getAlert(day, AssnMt) {}
  presentAlert(iu, type, fullDate) {
    let alert: any = this.alertCtrl.create();
    for (let i in type) {
      alert.setTitle(
        "<center><font color=red>" + fullDate + "</font></center>"
      );
    }

    for (let i in iu) {
      if (iu[i].length == 0) {
        alert.addInput({
          type: "radio",
          label: type[i] + ":" + "No description",
          value: "anees",
          checked: true
        });
      } else {
        alert.addInput({
          type: "radio",

          label: type[i] + ":" + iu[i],
          checked: true
        });
      }
      console.log("type", iu[i]);
    }
    alert.addButton({
      text: "OK"
    });
    alert.present();
  }
  onSelect(event) {
    console.log("event", event.time);
    console.log("event", event);
    let t: any = new Date(event.time).toLocaleDateString().substring(0, 2);
    let m: any = new Date(event.time).toLocaleDateString().substring(3, 5);
    console.log("localstring", m);
    m = m - 1;
    let year1 = new Date(event.time).toISOString().substring(0, 4);
    let month1 = new Date(event.time).toISOString().substring(5, 7);
    let date1 = new Date(event.time).toISOString().substring(8, 10);
    console.log("timee", year1);
    console.log("Month", month1);
    console.log("date", date1);
    let evnt = [];

    let desc = [];
    let fulldate;
    // for Selecting popup  event on calnder

    // for (let i = 0; i < this.currentEvents.length; i++) {
    //   if (t == this.currentEvents[i].date && m == this.currentEvents[i].month && year1 == this.currentEvents[i].year) {
    //     fulldate = t +"-"+ this.MonthAry[m] +"-"+year1;
    //     evnt.push(this.currentEvents[i].type);
    //     desc.push(this.currentEvents[i].description);

    //   }
    // }

    // if(fulldate != undefined){
    //   this.presentAlert(desc,evnt,fulldate);
    // }
  }
  monthchnge(eve) {
    console.log(eve, "eve Moths");
    this.Show_Event = [];
    let myt = eve.newMonth.months;
    let year = eve.newMonth.years;
    myt = myt - 1;
    for (let i = 0; i < this.currentEvents.length; i++) {
      if (
        myt == this.currentEvents[i].month &&
        year == this.currentEvents[i].year
      ) {
        if (this.currentEvents[i].description == "") {
          this.Show_Event.push({
            date: this.currentEvents[i].date,
            month: this.currentEvents[i].month,
            year: this.currentEvents[i].year,
            descri: "No Description Found.",
            title: this.currentEvents[i].title,
            type: this.currentEvents[i].type
          });
        } else {
          this.Show_Event.push({
            date: this.currentEvents[i].date,
            month: this.currentEvents[i].month,
            year: this.currentEvents[i].year,
            descri: this.currentEvents[i].description,
            title: this.currentEvents[i].title,
            type: this.currentEvents[i].type
          });
        }
      }
    }
    console.log("month chnge", eve.oldMonth.dateObj.toISOString());
    this.title.push(eve.oldMonth.dateObj);
    this.yyy = eve.oldMonth.dateObj.toISOString().substring(0, 4);
    this.MM = eve.oldMonth.dateObj.toISOString().substring(4, 7);
    this.MM = new Date(this.MM).getMonth();
    let mm = new Date().getMonth();

    console.log("yy,mm,dd", mm);
    console.log("show event", this.Show_Event);
    console.log("name", name);
  }
  getCalanderfo() {
    this.user_id = JSON.parse(localStorage.getItem("user_id"));
    console.log("user_id", this.user_id);

    this.client_id = JSON.parse(localStorage.getItem("client_id"));
    console.log("client_id", this.client_id);

    this.student_id = JSON.parse(localStorage.getItem("student_id"));
    console.log("student_id", this.student_id);

    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present();
    let getStudentsUrl = "institution-calender-details";
    console.log("institution-calender-details-", getStudentsUrl);

    this.authService.getStudentData(getStudentsUrl).subscribe(
      data => {
        console.log("haii", data);
        loading.dismiss();
        setTimeout(() => {}, 100);

        this.data = JSON.parse(data._body);

        this.responseData = this.data;
        console.log("reponse", this.responseData);
        this.reposDat = this.responseData.data;
        console.log("data", this.reposDat);
        for (let i = 0; i < this.reposDat.length; i++) {
          console.log("Date ", this.reposDat[i].date);
          let d = this.reposDat[i].date.slice(7, 10);
          this.currentEvents.push({
            year: this.reposDat[i].date.slice(6, 10),
            month: this.reposDat[i].date.slice(3, 5) - 1,
            date: this.reposDat[i].date.slice(0, 2),
            type: this.reposDat[i].type,
            description: this.reposDat[i].description,
            title: this.reposDat[i].title
          });
          console.log("current events", this.currentEvents);

          console.log("count", this.count);
          for (let c in this.count) {
            // for(let y=0; y<count[c].events.length;y++){
            console.log("count cc", this.count[c].count);

            //  }
          }
        }

        if (this.responseData) {
          this.student_info = this.responseData.data;
        } else {
          // alert("Invalid User");

          console.log("Invalid User");
        }
      },
      (err: any) => {
        if (err.status === 401) {
          console.log("error log list: ", err.message);
        }
        if (err.status === 400) {
          console.log("Bad Request: ", err);
          alert("Bad Request");

          // alert("Unauthorised User");
          // redirect to the login route
          // or show a modal
        }
        if (err.status === 0) {
          alert("Network Connection Error. Please try Again.");
          // localStorage.clear();
          this.navCtrl.setRoot("StudHomePage");
          // redirect to the login route
          // or show a modal
        }
      }
    );
  }

  Push_calnder() {
    this.currentEvents = [];
    let colors: string[] = ["primary", "warning", "danger", "success"];
    for (let i = 0; i < this.reposDat.monthData.length; i++) {
      console.log("Date ", this.reposDat.monthData[i].date);
      let d = this.reposDat.monthData[i].date.slice(3, 5);
      console.log("d", d);
      this.currentEvents.push({
        year: this.reposDat.monthData[i].date.slice(6, 10),
        month: this.reposDat.monthData[i].date.slice(3, 5) - 1,
        date: this.reposDat.monthData[i].date.slice(0, 2),
        type: "am",
        description: this.reposDat.monthData[i].message,
        title: "f"
      });
      console.log("curentevents", this.currentEvents);
      this.test = this.currentEvents.reduce(
        (x, y) => (x.findIndex(e => e.date == y.date) < 0 ? [...x, y] : x),
        []
      );

      this.test1 = this.test.reduce(
        (x, y) => (x.findIndex(e => e.month == y.month) <= 0 ? [...x, y] : x),
        []
      );
    }
  }

  getDaysofMonth() {
    this.currentDate = [];
    this.daysInThisMonth = [];
    this.daysInLastMonth = [];
    this.daysInNextMonth = [];

    this.currentMonth = this.date1.getMonth();
    this.currentYear = this.date1.getFullYear();

    this.AssnMt = this.MonthAry[this.currentMonth];
    //  loading.present();
    for (let i = 0; i < this.currentEvents.length; i++) {
      this.currentDate.push({
        Date: new Date(
          Date.UTC(
            this.currentEvents[i].year,
            this.currentEvents[i].month,
            this.currentEvents[i].date
          )
        ).getDate(),
        month: new Date(
          Date.UTC(
            this.currentEvents[i].year,
            this.currentEvents[i].month,
            this.currentEvents[i].date
          )
        ).getMonth(),
        year: new Date(
          Date.UTC(
            this.currentEvents[i].year,
            this.currentEvents[i].month,
            this.currentEvents[i].date
          )
        ).getFullYear()
      });
      console.log("curr Arry", this.currentDate[i]);
      1;
    }
    // loading.dismiss();
    console.log("currentDate", this.currentDate);

    if (this.date1.getMonth() === new Date().getMonth()) {
    }

    var firstDayThisMonth = new Date(
      this.date1.getFullYear(),
      this.date1.getMonth(),
      1
    ).getDay();
    var prevNumOfDays = new Date(
      this.date1.getFullYear(),
      this.date1.getMonth(),
      0
    ).getDate();
    console.log("firstDay", prevNumOfDays);

    for (
      let i = prevNumOfDays - (firstDayThisMonth - 1);
      i <= prevNumOfDays;
      i++
    ) {
      this.daysInLastMonth.push({ day: i });
      console.log(this.daysInLastMonth);
    }
    var thisNumOfDays = new Date(
      this.date1.getFullYear(),
      this.date1.getMonth() + 1,
      0
    ).getDate();
    for (var i = 0; i < thisNumOfDays; i++) {
      this.daysInThisMonth.push({ day: i + 1 });
      console.log(this.daysInThisMonth);
    }
    var lastDayThisMonth = new Date(
      this.date1.getFullYear(),
      this.date1.getMonth() + 1,
      0
    ).getDay();
    var nextNumOfDays = new Date(
      this.date1.getFullYear(),
      this.date1.getMonth() + 2,
      0
    ).getDate();
    for (var i = 0; i < 6 - lastDayThisMonth; i++) {
      this.daysInNextMonth.push({ day: i + 1 });
    }
    var totalDays =
      this.daysInLastMonth.length +
      this.daysInThisMonth.length +
      this.daysInNextMonth.length;
    if (totalDays < 36) {
      for (var i = 7 - lastDayThisMonth; i < 7 - lastDayThisMonth + 7; i++) {
        this.daysInNextMonth.push({ day: i });
      }
    }
    this.daysInThisMonth.forEach(day => {
      this.currentDate.forEach(event => {
        if (
          day.day === event.Date &&
          this.currentMonth === event.month &&
          this.currentYear === event.year
        ) {
          day.event = event;
        }
      });
    });
  }

  goToLastMonth() {
    this.date1 = new Date(this.date1.getFullYear(), this.date1.getMonth(), 0);
    // this.getStudentInfo(this.date1.getMonth()+1,this.date1.getFullYear());
    setTimeout(() => {
      this.getDaysofMonth();
    }, 51);
  }

  goToNextMonth() {
    this.date1 = new Date(
      this.date1.getFullYear(),
      this.date1.getMonth() + 2,
      0
    );
    // this.getStudentInfo(this.date1.getMonth()+1,this.date1.getFullYear());
    setTimeout(() => {
      this.getDaysofMonth();
    }, 51);
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.getDaysofMonth();
      for (let i = 0; i < this.currentEvents.length; i++) {
        if (
          !this.count.hasOwnProperty(
            this.currentEvents[i].date +
              "" +
              this.currentEvents[i].month +
              "" +
              this.currentEvents[i].year
          )
        ) {
          this.count[
            this.currentEvents[i].date +
              "" +
              this.currentEvents[i].month +
              "" +
              this.currentEvents[i].year
          ] = {
            count: 0,
            events: [],
            date: this.currentEvents[i].date,
            month: this.currentEvents[i].month,
            year: this.currentEvents[i].year
          };
        }
        this.count[
          this.currentEvents[i].date +
            "" +
            this.currentEvents[i].month +
            "" +
            this.currentEvents[i].year
        ]["count"]++;
        this.count[
          this.currentEvents[i].date +
            "" +
            this.currentEvents[i].month +
            "" +
            this.currentEvents[i].year
        ]["events"].push(this.currentEvents[i].type);
        this.count[
          this.currentEvents[i].date +
            "" +
            this.currentEvents[i].month +
            "" +
            this.currentEvents[i].year
        ]["date"] = this.currentEvents[i].date;
        this.count[
          this.currentEvents[i].date +
            "" +
            this.currentEvents[i].month +
            "" +
            this.currentEvents[i].year
        ]["month"] = this.currentEvents[i].month;
        this.count[
          this.currentEvents[i].date +
            "" +
            this.currentEvents[i].month +
            "" +
            this.currentEvents[i].year
        ]["year"] = this.currentEvents[i].year;
        // this.console.log('timer',this.currentEvents[i])
        if (this.current_Moth == this.currentEvents[i].month) {
          this.Show_Event.push({
            date: this.currentEvents[i].date,
            month: this.currentEvents[i].month,
            year: this.currentEvents[i].year,
            descri: this.currentEvents[i].description,
            title: this.currentEvents[i].title,
            type: this.currentEvents[i].type
          });
        }
      }

      console.log("this.count", this.count);
      for (let i in this.count) {
        console.log("this.count ii", this.count[i]);
        for (let e in this.count[i].events) {
          console.log("counts ee", this.count[i].events[e]);

          this._daysConfig.push({
            date: this.count[i],
            marked: true,
            disable: false,
            cssClass:
              this.count[i].count >= 3
                ? "circle"
                : (this.count[i].count == 2 &&
                    this.count[i].events[0] == "HOLIDAY" &&
                    this.count[i].events[1] == "EVENT") ||
                  (this.count[i].count == 2 &&
                    this.count[i].events[0] == "EVENT" &&
                    this.count[i].events[1] == "HOLIDAY")
                ? "Hol_ev"
                : this.count[i].count === 1 &&
                  this.count[i].events[e] == "HOLIDAY"
                ? "holiday"
                : this.count[i].count === 1 &&
                  this.count[i].events[e] == "EVENT"
                ? "event"
                : this.count[i].count === 1 &&
                  this.count[i].events[e] == "REMINDER"
                ? "reminder"
                : (this.count[i].count == 2 &&
                    this.count[i].events[0] == "EVENT" &&
                    this.count[i].events[1] == "REMINDER") ||
                  (this.count[i].count == 2 &&
                    this.count[i].events[1] == "EVENT" &&
                    this.count[i].events[0] == "REMINDER")
                ? "REM_ev"
                : (this.count[i].count == 2 &&
                    this.count[i].events[0] == "HOLIDAY" &&
                    this.count[i].events[1] == "REMINDER") ||
                  (this.count[i].count == 2 &&
                    this.count[i].events[1] == "HOLIDAY" &&
                    this.count[i].events[0] == "REMINDER")
                ? "REM_hl"
                : "ss"
            // cssClass:count[c].count >= 3 ? 'circle': count[c].events[1] == "REMAINDER" && count[c].events[0] == "EVENT" ||count[c].events[0] == "REMAINDER" && count[c].events[1] == "EVENT" ?'REM_ev':count[c].count == 1 && count[c].events[y] == "HOLIDAY" ?'holiday':count[c].count == 1 && count[c].events[y] == "EVENT"? 'event':count[c].count == 1 && count[c].events[y] == "REMAINDER"? 'reminder': count[c].events[1] == "HOLIDAY" && count[c].events[0] == "EVENT" ||count[c].events[0] == "HOLIDAY" && count[c].events[1] == "EVENT" ?'Hol_ev':count[c].events[1] == "REMAINDER" && count[c].events[0] == "HOLIDAY" ||count[c].events[0] == "REMAINDER" && count[c].events[1] == "HOLIDAY"?'REM_hl':'NaN'
            //  cssClass: (this.curtData[i].date && this.curtData[i].month && this.curtData[i].year &&  this.curtData[i].type == "HOLIDAY") && (this.curtData[i].date && this.curtData[i].month && this.curtData[i].year &&  this.curtData[i].type == "REMAINDER") &&(this.curtData[i].date && this.curtData[i].month && this.curtData[i].year && this.curtData[i].type == "EVENT") ?'circle':this.curtData[i].type == "EVENT" ?'event':this.curtData[i].type == "HOLIDAY" ?'holiday':'reminder'
            //  cssClass:count[this.curtData[i].date]['count'] ==  3  ? 'circle':this.curtData[i].type == "EVENT" ? 'event'  : 'reminder'
            //  cssClass:count[this.curtData[i].date]['count'] != 1 &&  count[this.curtData[i].date]['count'] == 3 ? 'circle':count[this.curtData[i].date]['count'] ===  2 ? 'event'  : 'reminder'
          });
        }
      }
      this.calc = 0;
    }, 751);
    console.log("ionViewDidLoad SchoolCalendarPage");
  }

  back() {
    this.navCtrl.pop();
  }
}
