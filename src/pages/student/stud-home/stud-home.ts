import { Component, HostBinding } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  ToastController
} from "ionic-angular";
import { AuthServiceProvider } from "../../../providers/auth-service/auth-service";
import { FcmProvider } from "../../../providers/fcm/fcm";
import { NativeStorage } from "@ionic-native/native-storage/ngx";
import { Subject } from "rxjs/Subject";
import { tap } from "rxjs/operators";

import { AppVersion } from "@ionic-native/app-version";
import { ReportcardPage } from "../../reportcard/reportcard";
import { AttendancePage } from "../../attendance/attendance";
/**
 * Generated class for the StudHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-stud-home",
  templateUrl: "stud-home.html"
})
export class StudHomePage {
  @HostBinding("class.is-open")
  data: any;
  responseData: any;
  testRadioOpen: any;
  testRadioResult: any;
  userToken: any;
  token_type: any;
  user_id: any;
  student_data: any;
  student_list = [];
  client_id: any;
  student_id: any;
  MessageInfo: any;
  message: any;
  UnreadMsg: any;
  ReadMsg: any;
  UnreadMsglenth: any;
  dateone: any;
  datetwo: any;
  array: any;
  current_student: any;
  /*-----exam count details -----*/
  noticeBoard: any;
  exam_count_new = 0;
  notify: any;
  exam_count_no = 0;

  /*---- Notice count-----*/
  notice_new = 0;

  /*-----News Count -------*/
  news_new = 0;

  /*----- Assignments count -----*/
  notify_assignment: any;
  assignment_old_count = 0;
  assignment_count_new = 0;
  assignment_count: any;

  constructor(
    public navCtrl: NavController,
    public authService: AuthServiceProvider,
    public atrCtrl: AlertController,
    private toast: ToastController,
    public fcm: FcmProvider,
    public storage: NativeStorage,
    private appVersion: AppVersion
  ) {
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
      return myArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
      });
    }
    // this.dateone = new Date("2018-10-01");
    // this.datetwo = new Date();
    // var dayDif = (this.datetwo - this.dateone) / 1000 / 60 / 60 / 24;
    // console.log(dayDif);
  }

  Report() {
    this.navCtrl.push("ReportcardPage");
  }
  atten() {
    this.navCtrl.push("AttendancePage");
  }
  /*--------- FCM Notification code ---------*/
  getFcmToken() {
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
  }
  /*---------End FCM Notification code -----------*/

  /*-------- Set Default Values -------------*/

  setDefaultVal() {
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
  }
  /*-------- end default values -----------*/

  /*------- Get Student Data using parent Id ------*/
  getStudentsList() {
    console.log("getStudent method");

    this.user_id = JSON.parse(localStorage.getItem("user_id"));
    console.log("user_id", this.user_id);

    let getStudentsUrl = "parent/" + this.user_id + "/students";
    console.log("Attedance Val-", getStudentsUrl);

    this.authService.getData(getStudentsUrl).subscribe(
      data => {
        console.log(data);
        this.data = JSON.parse(data._body);
        this.responseData = this.data;
        console.log("getStudents: ", this.responseData);
        console.log("getStudents-data: ", this.responseData.data);

        localStorage.setItem(
          "studentData",
          JSON.stringify(this.responseData.data)
        );

        this.current_student = localStorage.getItem("student_id");

        if (this.responseData.data) {
          this.student_data = this.responseData.data;

          localStorage.setItem(
            "student_data",
            JSON.stringify(this.responseData.data)
          );
          console.log(
            "response Institution: ",
            this.responseData.data[0].student_id
          );

          /*----- alert for institution popup ------*/

          let alert = this.atrCtrl.create();
          alert.setTitle("Current Student");

          for (let i = 0; i < this.student_data.length; i++) {
            // institution list
            console.log("count: ", i);
            this.student_list.push({
              student_id: this.student_data[i].student_id,
              fullname: this.student_data[i].FullName,
              coursename: this.student_data[i].CourseName,
              client_id: this.student_data[i].client_id,
              client_name: this.student_data[i].client_name
            });

            if (this.current_student == this.student_data[i].student_id) {
              alert.addInput({
                type: "radio",
                label:
                  this.student_data[i].FullName +
                  " - " +
                  this.student_data[i].CourseName,
                value: this.student_data[i].student_id,
                checked: true
              });
            } else {
              alert.addInput({
                type: "radio",
                label:
                  this.student_data[i].FullName +
                  " - " +
                  this.student_data[i].CourseName,
                value: this.student_data[i].student_id,
                checked: false
              });
            }
          }

          // alert.addButton('Cancel');
          alert.addButton({
            text: "OK",
            handler: data => {
              this.testRadioOpen = false;
              this.testRadioResult = data;
              console.log("radiovalue: ", this.testRadioResult);
              this.student_id = data;
              console.log("studentid:", this.student_id);
              localStorage.setItem("student_id", this.testRadioResult);
            }
          });
          alert.present();

          this.student_id = JSON.parse(localStorage.getItem("student_id"));

          for (let i = 0; i < this.student_list.length; i++) {
            // institution list
            console.log(
              "this.student_list[i].student_id:",
              this.student_list[i].student_id
            );
            console.log("student_id:", this.student_id);
            if (this.student_id == this.student_list[i].student_id) {
              this.client_id = this.student_list[i].client_id;
              console.log("client_id: ", this.client_id);
              localStorage.setItem(
                "client_id",
                JSON.stringify(this.student_list[i].client_id)
              );
            }
          }

          this.navCtrl.setRoot("StudHomePage");
        } else {
        }
      },
      err => {
        if (err.status === 401) {
          alert("Unauthorised User!! Login Again!!");
          this.navCtrl.setRoot("LogoutPage");
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
      }
    );
  }
  /*------- End Get Student Data using parent Id --------*/
  ionViewWillEnter() {
    console.log("IonViewWillEnter Method");
    this.getMessagesInfo();
    // this.getNoticeBoardInfo();

    // this.setDefaultVal();
  }

  /*----------Get Message Data Information--------*/
  getMessagesInfo() {
    let getMessageUrl = "/messages";
    this.authService.getMessageData(getMessageUrl).subscribe(
      data => {
        console.log(data);
        this.data = JSON.parse(data._body);
        this.MessageInfo = [this.data][0].data;

        console.log(this.MessageInfo);
        if ((this.message = JSON.parse(localStorage.getItem("MessageId")))) {
          this.message = JSON.parse(localStorage.getItem("MessageId"));
          console.log(this.message);

          const bindex = this.message.reduce((acc, obj) => {
            acc[obj.id] = obj;
            return acc;
          }, {});

          this.UnreadMsg = this.MessageInfo.filter(obj => !bindex[obj.id]);
          console.log(this.UnreadMsg);
          this.UnreadMsglenth = this.UnreadMsg.length;
          console.log(this.UnreadMsglenth);
          this.ReadMsg = this.MessageInfo.filter(obj => bindex[obj.id]);
          console.log(this.ReadMsg);
        } else {
          this.UnreadMsg = this.MessageInfo;
          this.UnreadMsglenth = this.MessageInfo.length;
        }
      },
      err => {
        console.log(err);
      }
    );
  }
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
  Newsee() {
    //EvesPage
    this.navCtrl.push("EvesPage");
    // this.navCtrl.push("FacEventsPage");
  }
  GotoSmsPage() {
    this.navCtrl.push("StudSmsPage");
  }
  Attendence() {
    this.navCtrl.push("StudAttendancePage");
  }
  Marks() {
    this.navCtrl.push("StudProgressReportPage");
  }
  Assignment() {
    this.navCtrl.push("StudAssignmentsPage");
  }
  TIME_TABLE() {
    this.navCtrl.push("StudTimetablePage");
  }
  circularNotices(menu_id) {
    localStorage.setItem("menu_id", menu_id);
    this.navCtrl.push("StudCircularNoticesPage");
  }
  about() {
    this.navCtrl.push("StudVideosPage");
  }
  Calender() {
    this.navCtrl.push("StudCalendarPage");
  }
}
