import { Component, ViewChild } from "@angular/core";
import {
  Platform,
  Nav,
  Events,
  ToastController,
  App,
  AlertController
} from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Network } from "@ionic-native/network";
import { NetworkProvider } from "../providers/network/network";
import { Firebase } from "@ionic-native/firebase";

// import { HomePage } from "../pages/home/home";
// import { LoginPage } from "../pages/login/login";
// import { RazerPaymentPage } from "../pages/razer-payment/razer-payment";
// import { MenuPage } from "../pages/menu/menu";
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = "LandingPage";
  @ViewChild(Nav)
  nav: Nav;

  exam_count_no = 0;
  exam_notify_show: any;
  facultyPages: Array<{ title: string; component: any; icon: string; id: any }>;

  pages: Array<{ title: string; component: any; icon: string; id: any }>;
  parentMenuShow: any;
  facultyMenuShow: any;
  user_type: any;
  studentPages: Array<{ title: string; component: any; icon: string; id: any }>;
  studentMenuShow: any;
  public tinyMceSettings = {
    skin_url: "/assets/tinymce/skins/lightgray",
    inline: false,
    statusbar: false,
    browser_spellcheck: true,
    height: 320,
    plugins: "fullscreen"
  };
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public network: Network,
    public networkProvider: NetworkProvider,
    public events: Events,
    private toastCtrl: ToastController,
    public firebase: Firebase,
    public app: App,
    public alertCtrl: AlertController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleLightContent();
      splashScreen.hide();
    });

    this.login_check();
    this.NetworkMsg();

    /*----------exit on exit confirm alert click back button-------*/

    platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();
      // alert(activeView.name);
      // console.log("activeView: ", activeView);
      // Checks if can go back before show up the alert
      if (activeView.name !== "LoginPage") {
        if (nav.canGoBack()) {
          nav.pop();
        } else {
          const alert = this.alertCtrl.create({
            title: "Confirm",
            message: "Are you sure, You want to exit app?",
            buttons: [
              {
                text: "Cancel",
                role: "cancel",
                handler: () => {
                  this.nav.setRoot("LoginPage");
                  console.log("** Check for user credentials! **");
                }
              },
              {
                text: "Exit App",
                handler: () => {
                  // this.logout();
                  platform.exitApp();
                }
              }
            ]
          });
          alert.present();
        }
      } else {
        platform.exitApp();
      }
    });

    /*----------end of exit confirm alert click back button-------*/

    // watch network for a disconnection
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      console.log("network was disconnected :-(");
    });

    // stop disconnect watch
    disconnectSubscription.unsubscribe();

    // watch network for a connection
    let connectSubscription = this.network.onConnect().subscribe(() => {
      console.log("network connected!");
      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (this.network.type === "wifi") {
          console.log("we got a wifi connection, woohoo!");
        }
      }, 3000);
    });

    // stop connect watch
    connectSubscription.unsubscribe();
  }

  login_check() {
    const student_token = JSON.parse(localStorage.getItem("token"));
    // const client_id = localStorage.getItem("client_id");
    const faculty_token = JSON.parse(localStorage.getItem("factoken"));
    console.log("login_check", faculty_token);
    // localStorage.clear();

    if (student_token != null) {
      // this.fcm.getToken();
      this.rootPage = "MenuPage";
    }
    if (faculty_token != null) {
      // FacMockTestPage

      this.rootPage = "MenuPage";
    }
  }

  listenToLoginEvents() {
    this.events.subscribe("user:faculty", () => {
      console.log("LoggedIn - faculty triggered");
      this.facultyMenuShow = true;
      this.parentMenuShow = false;
      this.studentMenuShow = false;
    });

    this.events.subscribe("user:parent", () => {
      console.log("LoggedIn - parent triggered");
      this.parentMenuShow = true;
      this.facultyMenuShow = false;
      this.studentMenuShow = false;
    });

    this.events.subscribe("user:student", () => {
      console.log("LoggedIn - student triggered");
      this.parentMenuShow = false;
      this.facultyMenuShow = false;
      this.studentMenuShow = true;
    });
  }

  getUser() {
    this.user_type = localStorage.getItem("user_logged_in");
    if (this.user_type === "faculty") {
      let user_type = localStorage.getItem("user_logged_in");
      this.parentMenuShow = false;
      this.facultyMenuShow = true;
      console.log("faculty: ", this.facultyMenuShow);
    } else if (this.user_type === "parent") {
      this.parentMenuShow = true;
      this.facultyMenuShow = false;
      console.log("parent: ", this.parentMenuShow);
      let user_type = localStorage.getItem("user_logged_in");
    }
    // else if (this.user_type === "student") {
    //   this.parentMenuShow = false;
    //   this.facultyMenuShow = false;
    //   this.studentMenuShow = true;
    //   console.log("student: ", this.studentMenuShow);
    //   let user_type = localStorage.getItem("user_logged_in");
    // }
  }

  getNotices() {
    this.exam_count_no = JSON.parse(localStorage.getItem("exam_count_no"));
    if (this.exam_count_no > 0) {
      this.exam_notify_show = true;
    } else {
      this.exam_notify_show = false;
    }
  }

  openPage(pages) {
    localStorage.setItem("menu_id", pages.id);
    this.nav.push(pages.component);
    // this.pushSetup();
  }
  openfacPage(pages) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(pages.component);
    localStorage.setItem("menu_id", pages.id);
    this.nav.setRoot(pages.component);
    // this.pushSetup();
  }
  // openStudPage(pages) {
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   // this.nav.setRoot(pages.component);
  //   localStorage.setItem("menu_id", pages.id);
  //   this.nav.setRoot(pages.component);
  //   // this.pushSetup();
  // }
  NetworkMsg() {
    this.networkProvider.initializeNetworkEvents();

    // Offline event
    this.events.subscribe("network:offline", () => {
      alert("No Internet Connection Please Try Again." + this.network.type);
    });

    // Online event
    this.events.subscribe("network:online", () => {
      let toast = this.toastCtrl.create({
        message: "Your Network Connection is: " + this.network.type,
        duration: 3000,
        position: "top"
      });

      toast.onDidDismiss(() => {
        console.log("Dismissed toast");
      });

      toast.present();
    });
  }
}
