import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Events } from "ionic-angular";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

/**
 * Generated class for the StudResetLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-stud-reset-login",
  templateUrl: "stud-reset-login.html"
})
export class StudResetLoginPage {
  responseData: any;
  error: any;
  loginError: any;
  Page_heading: any;
  buttonLabel: any;
  parentOtp = {
    mobile_number: "",
    user_type: "PARENT",
    client_unique_key: "MJES", //MJES ALOYSIUS
    institution_abbreviation: "SAG",
    process_type: ""
  };
  user_val: any;
  ParentForm: any;
  FacultyForm: any;
  LoginError: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public events: Events
  ) {
    console.log(this.navParams.get("process_type"));
    this.parentOtp.process_type = this.navParams.get("process_type");

    if (this.parentOtp.process_type == "register") {
      this.Page_heading = "Register";
      this.buttonLabel = "Register";
    } else {
      this.Page_heading = "Reset Password";
      this.buttonLabel = "Reset Password";
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad StudResetLoginPage");
  }

  resetLogin() {
    //menu code

    this.user_val = "p";
    localStorage.setItem("user_val", JSON.stringify(this.user_val));
    console.log("user_val", this.user_val);
    this.ParentForm = true;
    this.FacultyForm = false;
    // this.studentForm = false;
    localStorage.setItem("user_logged_in", "parent");
    console.log("UserType:", "parent");
    localStorage.setItem("parentMenuShow", JSON.stringify(true));
    localStorage.setItem("facultyMenuShow", JSON.stringify(false));

    // localStorage.setItem("user_val", JSON.stringify(this.user_val));
    this.events.publish("user:parent");

    //end menu code

    console.log("user_val", this.user_val);
    localStorage.setItem("user_val", JSON.stringify(this.user_val));
    console.log("Parent otp:", this.parentOtp);
    this.authService.postlogData(this.parentOtp, "generate-otp").subscribe(
      data => {
        console.log(data);
        let result = JSON.parse(data._body);
        this.responseData = result;

        if (this.responseData.token) {
          console.log(this.responseData);
          localStorage.setItem(
            "parentOtpData",
            JSON.stringify(this.responseData)
          );
          localStorage.setItem(
            "parentToken",
            JSON.stringify(this.responseData.token)
          );
          localStorage.setItem(
            "parentMobileNumber",
            JSON.stringify(this.responseData.mobile_number)
          );
          localStorage.setItem(
            "parentOtp",
            JSON.stringify(this.responseData.otp)
          );

          console.log("user_type ", this.parentOtp.user_type);
          this.navCtrl.setRoot("VerifyOtpPage", {
            process_type: this.parentOtp.process_type
          });
        } else {
          // alert("Invalid User");
          this.error = true;
          this.LoginError =
            "Already registered!! Kindly login using mobile no and password.";
          console.log("Invalid User");
        }
      },
      (err: any) => {
        if (err.status == 400) {
          this.error = true;
          this.LoginError = "Invalid credentials. Please enter valid details ";
          console.log("error log list: ", err);
          console.log("error log list: ", err.statusText);
          console.log("error log list: ", err.message);
          // this.navCtrl.setRoot(LoginPage);

          // alert("Unauthorised User");
          // redirect to the login route
          // or show a modal
        }
        if (err.status == 0) {
          alert("Network Connection Error. Please try Again.");
          // localStorage.clear();
          // this.navCtrl.setRoot("LandingPage");
          // this.navCtrl.setRoot(LoginPage);
          // redirect to the login route
          // or show a modal
        }
      }
    );
  }
  back() {
    this.navCtrl.setRoot("LoginPage");
  }
}
