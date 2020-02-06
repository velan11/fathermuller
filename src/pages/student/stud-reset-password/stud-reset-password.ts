import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AuthServiceProvider } from "../../../providers/auth-service/auth-service";

/**
 * Generated class for the StudResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-stud-reset-password",
  templateUrl: "stud-reset-password.html"
})
export class StudResetPasswordPage {
  resetPasswd = {
    password: "",
    password_confirmation: ""
  };
  responseData: any;
  error: any;
  loginError: any;
  icon: any;
  process_type: any;
  buttonLabel: any;
  pageHeading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider
  ) {
    console.log(this.navParams.get("process_type"));
    this.process_type = this.navParams.get("process_type");

    if (this.process_type == "register") {
      this.pageHeading = "Create Password";
      this.buttonLabel = "Register";
    } else {
      this.pageHeading = "Reset Password";
      this.buttonLabel = "Reset Password";
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad StudResetPasswordPage");
  }

  showPassword(input: any): any {
    console.log("input type: ", input.type);
    input.type = input.type === "password" ? "text" : "password";
    input.setFocus();
    console.log("input icon: ", this.icon);
    this.icon = this.icon === "eye-off" ? "eye" : "eye-off";
    //  input.type = input.type === 'text' ?  'password' : 'text';
  }

  setPassword() {
    console.log("login_data: ", this.resetPasswd);

    this.authService
      .postloginData(this.resetPasswd, "password-change")
      .subscribe(
        data => {
          console.log(data);
          let result = JSON.parse(data._body);
          this.responseData = result;
          console.log("login_data: ", this.resetPasswd);

          if (this.responseData.message) {
            console.log(this.responseData);
            // localStorage.setItem("signData", JSON.stringify(this.responseData));
            // localStorage.setItem(
            //   "token",
            //   JSON.stringify(this.responseData.token)
            // );
            // localStorage.setItem(
            //   "token_type",
            //   JSON.stringify(this.responseData.token_type)
            // );

            // this.getUser();

            localStorage.clear();
            alert(this.responseData.message);
            this.navCtrl.setRoot("LoginPage");
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
            this.loginError = "Minimum password length is 7! ";
            console.log("error log list: ", err);
            console.log("error log list: ", err.statusText);
            console.log("error log list: ", err.message);

            // alert("Unauthorised User");
            // redirect to the login route
            // or show a modal
          }
          if (err.status === 400) {
            this.error = true;
            this.loginError = "Minimum password length is 7! ";
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

  checkConfirmPassword() {
    console.log("paswd: ", this.resetPasswd.password);
    console.log("confirm paswd: ", this.resetPasswd.password_confirmation);

    if (this.resetPasswd.password == this.resetPasswd.password_confirmation) {
      this.error = true;
      this.loginError = "";
      this.setPassword();
      console.log("true val");
    } else {
      // localStorage.clear();
      this.error = true;
      this.loginError = "Password Mismatch";
      console.log("false val");
    }
  }

  ionViewWillLeave() {
    localStorage.clear();
  }

  back() {
    localStorage.clear();
    this.navCtrl.setRoot("LoginPage");
  }
}
