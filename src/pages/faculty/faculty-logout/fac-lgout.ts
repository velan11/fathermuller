import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  App
} from "ionic-angular";
import { FacAuthServiceProvider } from "../../../providers/fac-auth-service/fac-auth-service";
/**
 * Generated class for the FacLgoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-fac-lgout",
  templateUrl: "fac-lgout.html"
})
export class FacLgoutPage {
  logoutData = { token: "" };
  responseData;
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public app: App,
    public authFacService: FacAuthServiceProvider
  ) {
    this.presentAlert();
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
  ionViewDidLoad() {
    console.log("ionViewDidLoad FacLgoutPage");
  }
  logout() {
    let faculty_login = JSON.parse(localStorage.getItem("facultyData"));
    console.log("logout", faculty_login.faculty_login_key);
    let logoutval = "logout?faculty_login_key=";
    console.log("logoutval", logoutval);
    //       this.authService.getData(this.facultyData,'faculty-signin').then((result) => {
    this.authFacService
      .getlogData(logoutval, faculty_login.faculty_login_key)
      .subscribe(
        data => {
          console.log(data);
          let result = JSON.parse(data._body);
          this.responseData = result;

          //       if(this.responseData.faculty_login_key){
          console.log(this.responseData);
          localStorage.clear();
          localStorage.removeItem("facultyMenuShow");
          localStorage.removeItem("parentMenuShow");
          localStorage.removeItem("studentMenuShow");
          //       this.navCtrl.setRoot(LoginPage);
          this.app.getRootNav().setRoot("LandingPage");
          //       }
        },
        (err: any) => {
          if (err.status === 401 || err.status == 401 || err.status == "401") {
            alert("Unauthorised User");

            // redirect to the login route
            // or show a modal
            localStorage.clear();
            this.app.getRootNav().setRoot("LandingPage");
          }
        }
      );
  }
}
