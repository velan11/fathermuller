import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  App,
  LoadingController,
  AlertController
} from "ionic-angular";
import { AuthServiceProvider } from "../../../providers/auth-service/auth-service";

// import { LoginPage } from "../login/login";

/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-logout",
  templateUrl: "logout.html"
})
export class LogoutPage {
  responseData: any;
  error: any;
  logoutData = { token: "" };
  token: any;
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public app: App,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
    this.presentLoadingDefault();
    this.presentAlert();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LogoutPage");
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: "Confirm LogOut  ",
      buttons: [
        {
          text: "No",
          role: "cancel",
          handler: () => {
            this.navCtrl.pop();
            console.log("No clicked");
          }
        },
        {
          text: "Yes",
          handler: () => {
            this.logout();
            console.log("Yes clicked");
          }
        }
      ]
    });

    alert.present();
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: "Logging Out..."
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 800);
  }

  logout() {
    localStorage.removeItem("student_id");
    localStorage.removeItem("client_id");
    localStorage.removeItem("token");
    localStorage.removeItem("token_type");
    localStorage.removeItem("facultyMenuShow");
    localStorage.removeItem("parentMenuShow");
    this.app.getRootNav().setRoot("LandingPage");
  }
}
