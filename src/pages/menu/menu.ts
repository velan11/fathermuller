import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Nav,
  AlertController
} from "ionic-angular";
//
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "MenuPage"
})
@Component({
  selector: "page-menu",
  templateUrl: "menu.html"
})
export class MenuPage {
  facultyPages: Array<{ title: string; component: any; icon: string; id: any }>;
  studentPages: Array<{ title: string; component: any; icon: string; id: any }>;
  homePage: any;
  @ViewChild(Nav) nav: Nav;
  login_user: any;
  studentMenuShow: any;
  facultyMenuShow: any;

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    public navParams: NavParams
  ) {
    this.getMenu();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MenuPage");
  }
  ngOnInit() {
    this.getMenu();
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: "Confirm LogOut  ",
      buttons: [
        {
          text: "No",
          role: "cancel",
          handler: () => {
            console.log("No clicked");
          }
        },
        {
          text: "Yes",
          handler: () => {
            console.log("Yes clicked");
          }
        }
      ]
    });

    alert.present();
  }

  getMenu() {
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
    } else if (this.login_user == "faculty") {
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
  }

  openPage(pages) {
    localStorage.setItem("menu_id", pages.id);
    this.nav.push(pages.component);

    // this.pushSetup();
  }
}
