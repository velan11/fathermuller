import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

/**
 * Generated class for the VerifyOtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-verify-otp",
  templateUrl: "verify-otp.html"
})
export class VerifyOtpPage {
  responseData: any;
  login_data = { mobile_number: "", password: "", token: "" };
  error: any;
  loginError: any;
  userToken: any;
  token_type: any;
  user_id: any;
  process_type: any;
  buttonLabel: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public loadingCtrl: LoadingController
  ) {
    this.showOtp();
    console.log(this.navParams.get("process_type"));
    this.process_type = this.navParams.get("process_type");

    if (this.process_type == "register") {
      this.buttonLabel = "Register";
    } else {
      this.buttonLabel = "Reset Password";
    }
  }
  back() {
    this.navCtrl.pop();
  }
  showOtp() {
    // this.login_data.password = JSON.parse(localStorage.getItem("parentOtp"));
    console.log("otp: ", this.login_data.password);
    this.login_data.mobile_number = JSON.parse(
      localStorage.getItem("parentMobileNumber")
    );
    console.log("mobile_number: ", this.login_data.mobile_number);
    this.login_data.token = JSON.parse(localStorage.getItem("parentToken"));
    console.log("token: ", this.login_data.token);
    this.presentLoadingCustom();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad VerifyOtpPage");
  }
  presentLoadingCustom() {
    const loading = this.loadingCtrl.create({
      content: "Loading OTP...",
      duration: 800
    });

    loading.onDidDismiss(() => {
      console.log("Dismissed loading");
    });

    loading.present();
  }

  VerifyOtp() {
    console.log("login_data: ", this.login_data);

    this.authService.postlogData(this.login_data, "signin").subscribe(
      data => {
        console.log(data);
        let result = JSON.parse(data._body);
        this.responseData = result;
        console.log("login_data: ", this.login_data);

        if (this.responseData.token) {
          console.log(this.responseData);
          localStorage.setItem("signData", JSON.stringify(this.responseData));
          localStorage.setItem(
            "token",
            JSON.stringify(this.responseData.token)
          );
          localStorage.setItem(
            "token_type",
            JSON.stringify(this.responseData.token_type)
          );

          // this.getUser();

          // this.navCtrl.setRoot("MenuPage", { login: "student" });
          this.navCtrl.setRoot("StudResetPasswordPage", {
            process_type: this.process_type
          });
        } else {
          // alert("Invalid User");
          this.error = true;
          this.loginError = "Not Valid";
          console.log("Invalid User");
        }
      },
      (err: any) => {
        if (err.status === 401) {
          this.error = true;
          this.loginError = "Invalid credentials. Please enter valid details ";
          console.log("error log list: ", err);
          console.log("error log list: ", err.statusText);
          console.log("error log list: ", err.message);

          // alert("Unauthorised User");
          // redirect to the login route
          // or show a modal
        }
        if (err.status === 400) {
          this.error = true;
          this.loginError = "Incorrect OTP. Kindly enter correct OTP";
          console.log("error log list: ", err);
          // alert("Bad Request");

          // alert("Unauthorised User");
          // redirect to the login route
          // or show a modal
        }
        if (err.status === 0) {
          alert("Network Connection Error. Please try Again.");
          this.navCtrl.setRoot("LoginPage");
          // redirect to the login route
          // or show a modal
        }
      }
    );
  }
}
