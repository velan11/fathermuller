import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FacAuthServiceProvider } from "../../../providers/fac-auth-service/fac-auth-service";

/**
 * Generated class for the FacChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-fac-change-password",
  templateUrl: "fac-change-password.html"
})
export class FacChangePasswordPage {
  responseData: any;
  updatePassword = { faculty_login_key: "", password: "", newPassword: "" };
  chnagePasswordError: any;
  error: any;
  confirmPassword: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authFacService: FacAuthServiceProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad FacChangePasswordPage");
  }

  changePassword() {
    console.log("Faculty user_val", this.updatePassword);
    let fac_login_key = JSON.parse(localStorage.getItem("facultyData"));
    this.updatePassword.faculty_login_key = fac_login_key.faculty_login_key;

    if (this.updatePassword.newPassword != this.confirmPassword) {
      console.log("The password confirmation and new password must match.");
      this.updatePassword.password = "";
      this.updatePassword.newPassword = "";
      this.confirmPassword = "";
      this.error = true;
      this.chnagePasswordError =
        "The password confirmation and new password must match.";
    } else {
      this.authFacService
        .postData(this.updatePassword, "faculty-app-update-login-password")
        .subscribe(
          data => {
            console.log(data);
            let result = JSON.parse(data._body);
            this.responseData = result;

            if (this.responseData) {
              console.log("change password response: ", this.responseData);
              alert("Password Updated Successfully");
              // this.navCtrl.setRoot(this.navCtrl.getActive().component);
              localStorage.clear();
              this.navCtrl.setRoot("LandingPage");
            } else {
              // alert("Invalid User");
              this.error = true;
              this.chnagePasswordError = "Invalid Password";
              console.log("Invalid User");
            }
          },
          (err: any) => {
            if (err.status === 401) {
              this.error = true;
              this.chnagePasswordError =
                "Invalid Credentials. Please Enter valid Details ";
              console.log("error log list: ", err);
              console.log("error log list: ", err.statusText);
              console.log("error log list: ", err.message);

              // this.navCtrl.setRoot(LoginPage);

              // alert("Unauthorised User");
              // redirect to the login route
              // or show a modal
            }
            if (err.status === 0) {
              alert("Network Connection Error. Please try Again.");
              // localStorage.clear();

              // this.navCtrl.setRoot("LandingPage");
              // redirect to the login route
              // or show a modal
            }
          }
        );
    }
  }
  reset() {
    // this.app.getRootNav().setRoot(FacAttendanceReportPage);
    this.navCtrl.setRoot("FacChangePasswordPage");
  }

  back() {
    this.navCtrl.setRoot("FacHomePage");
  }
}
