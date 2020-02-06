import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  AlertController,
  App
} from "ionic-angular";
import { FacAuthServiceProvider } from "../../../providers/fac-auth-service/fac-auth-service";
import { Network } from "@ionic-native/network";

/**
 * Generated class for the FacHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-fac-home",
  templateUrl: "fac-home.html"
})
export class FacHomePage {
  facultyDetails: any;
  responseData: any;
  testRadioOpen: any;
  testRadioResult: any;
  faculty_login_key1: any;
  faculty_login_key: any;
  institution_lists: any;
  institution_id = [];
  TIME_IN_MS: any;
  hideFooterTimeout: any;
  user_name: any;

  sm = {
    course: 587,
    period: 2400,
    section: 2908,
    subject: 1,
    institution: 19,
    startDate: "07/06/2019",
    expiryDate: "31/06/2019",
    assignmentTitle: "Test this",
    description: "Test This 2",
    searchAssignment: "N",
    clientkey: "MJES",
    faculty_login_key:
      "$2y$10$ACeRXXKzK8f9qf07YzC6Ne3SW4KSgq7u901cOh.dwe4M62uj4js6"
  };
  constructor(
    public navCtrl: NavController,
    public authFacService: FacAuthServiceProvider,
    public appCtrl: App,
    public atrCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private network: Network
  ) {
    this.setloginVal();
    // this.login_check();
    this.getUsername();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad FacHomePage");
  }
  circularNotices(menu_id) {
    localStorage.setItem("menu_id", menu_id);
    this.navCtrl.push("FacNoticesPage");
  }
  // disconnectSubscription = this.network.onDisconnect().subscribe(() => {
  //   console.log("network was disconnected :-(");
  // });
  Newsee() {
    //EvesPage
    this.navCtrl.push("EvesPage");
    // this.navCtrl.push("FacEventsPage");
  }

  Notice() {
    this.navCtrl.push("FacNoticesPage");
  }
  about() {
    this.navCtrl.push("StudVideosPage");
  }
  TIME_TABLE() {
    this.navCtrl.push("StudTimetablePage");
  }
  Calender() {
    this.navCtrl.push("StudCalendarPage");
  }
  presenthomeLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: "Loading..."
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 600);
  }
  getUsername() {
    this.faculty_login_key1 = JSON.parse(localStorage.getItem("facultyData"));
    this.user_name = this.faculty_login_key1.user_name;
    console.log("username", this.user_name);
  }

  // login_check(){
  //   const data = JSON.parse(localStorage.getItem('facultyData'));
  //   const clientkey = localStorage.getItem('clientkey');

  //   console.log("login_check", data);
  //   console.log("client key", clientkey);

  //   if(data != null && clientkey != null){
  //     // if(data != null && clientkey != null){
  //     this.TIME_IN_MS = 1200000;
  //   this.hideFooterTimeout = setTimeout( () => {
  //     alert("Session Timeout!! Login Again!!");
  //     // localStorage.clear();
  //     this.navCtrl.push(LogoutPage);
  //   }, this.TIME_IN_MS);

  //   }

  // }

  // ngOnInit(): void {
  //   this.login_check();

  // }

  getInstitute() {
    this.presenthomeLoadingDefault();

    console.log("getInstitute method");

    this.faculty_login_key1 = JSON.parse(localStorage.getItem("facultyData"));
    console.log(
      "faculty_login_key-attendance",
      this.faculty_login_key1.faculty_login_key
    );
    let clientkey = localStorage.getItem("clientkey");
    console.log("clientkey", clientkey);

    this.faculty_login_key = this.faculty_login_key1.faculty_login_key;

    let attendanceVal =
      "student-attendance-get-institution?clientkey=" +
      clientkey +
      "&faculty_login_key=" +
      this.faculty_login_key1.faculty_login_key;
    console.log("Attedance Val-", attendanceVal);

    this.authFacService.getData(attendanceVal).subscribe(
      data => {
        console.log(data);
        let result = JSON.parse(data._body);
        this.responseData = result;
        console.log(this.responseData);
        console.log("institution list: ", this.responseData.institution_lists);

        if (this.responseData.institution_lists) {
          this.institution_lists = this.responseData.institution_lists;

          localStorage.setItem(
            "getStudents.institution",
            JSON.stringify(this.responseData.institution_lists[0].id)
          );
          console.log(
            "response Institution: ",
            this.responseData.institution_lists[0].id
          );

          /*----- alert for institution popup ------*/

          let alert = this.atrCtrl.create();
          alert.setTitle("Select Institution");

          for (let i = 0; i < this.institution_lists.length; i++) {
            this.institution_id.push(
              this.institution_lists[i].id,
              this.institution_lists[i].display_name
            );

            if (i == 0) {
              alert.addInput({
                type: "radio",
                label: this.institution_lists[i].display_name,
                value: this.institution_lists[i].id,
                checked: true
              });
            } else {
              alert.addInput({
                type: "radio",
                label: this.institution_lists[i].display_name,
                value: this.institution_lists[i].id,
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
              localStorage.setItem("institution_id", this.testRadioResult);
            }
          });
          alert.present();
        } else {
          alert("Unauthorised User!! Login Again!!");
          this.navCtrl.setRoot("FacLgoutPage");
        }
      },
      err => {
        if (err.status === 401) {
          alert("Unauthorised User!! Login Again!!");
          this.navCtrl.setRoot("FacLgoutPage");
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

  setloginVal() {
    const data = JSON.parse(localStorage.getItem("facultyData"));
    console.log("dashboard: ", data);

    const clientkey = localStorage.getItem("clientkey");
    console.log("clientkey : ", clientkey);

    this.facultyDetails = data.facultyData;
  }

  attendance() {
    this.navCtrl.push("FacAttendanceDashPage");
  }

  backToWelcome() {
    const root = this.appCtrl.getRootNav();
    root.popToRoot();
  }

  logout() {
    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 1000);
  }
  showAttendance() {
    this.navCtrl.push("FacAttendancePage");
  }
  showMarks() {
    this.navCtrl.push("FacMarksPage");
  }
  showAssignments() {
    this.navCtrl.push("FacAssignmentPage");
  }
  showAttendanceReport() {
    this.navCtrl.push("FacAttendanceReportPage");
  }
  changePasswd() {
    this.navCtrl.push("FacChangePasswordPage");
  }
  viewAssignments() {
    this.navCtrl.push("FacViewAssignmentPage");
  }
}
