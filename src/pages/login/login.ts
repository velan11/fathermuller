import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Events } from "ionic-angular";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { FacAuthServiceProvider } from "../../providers/fac-auth-service/fac-auth-service";
import { Platform } from "ionic-angular";
import { FcmProvider } from "../../providers/fcm/fcm";

/**
 * Generated class for the LoginPagdsae page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  responseData: any;

  parentOtp = {
    mobile_number: "",
    password: "",
    user_type: "PARENT",
    client_unique_key: "MJES", //MJES ALOYSIUS
    institution_abbreviation: "SAG"
    // client_unique_key: "MJES",
    // institution_abbreviation: "SAG"
    // client_id: "3",
    // institution_abbreviation: "SAPG"
  };
  error: any;
  LoginError: any;
  icon: any;
  lang: any;
  user_val: any;
  ParentForm = true;
  FacultyForm: any;

  /*-----------Faculty Login variables--------*/
  facultyData = { username: "", password: "", clientkey: "MJES" }; //MJES ALOYSIUS
  // facultyData = { username: "", password: "", clientkey: "MJES" };
  // facultyData = { username: "", password: "", clientkey: "TESTCLIENT" };
  loginError: any;
  facultyMenuShow: any;
  parentMenuShow: any;
  /*-----------end Faculty Login variables--------*/

  constructor(
    public pt: Platform,

    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public fcm: FcmProvider,
    public authFacService: FacAuthServiceProvider,
    public events: Events
  ) {
    this.login_check();
    // this.User_Form();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }
  ionViewWillEnter() {
    this.User_Form();
  }

  User_Form() {
    if (this.user_val == undefined) {
      this.user_val = this.navParams.get("user_val");
      console.log("login user", this.user_val);
      localStorage.setItem("login_user", this.user_val);
    }
    console.log("userval:", this.user_val);

    if (this.user_val == "f") {
      this.FacultyForm = true;
      this.ParentForm = false;
      // this.studentForm = false;
      localStorage.setItem("user_logged_in", "faculty");
      console.log("UserType:", "faculty");
      localStorage.setItem("facultyMenuShow", JSON.stringify(true));
      localStorage.setItem("parentMenuShow", JSON.stringify(false));
      localStorage.setItem("studentMenuShow", JSON.stringify(false));

      this.events.publish("user:faculty");
    } else if (this.user_val == "p") {
      this.ParentForm = true;
      this.FacultyForm = false;
      // this.studentForm = false;
      localStorage.setItem("user_logged_in", "parent");
      console.log("UserType:", "parent");
      localStorage.setItem("parentMenuShow", JSON.stringify(true));
      localStorage.setItem("facultyMenuShow", JSON.stringify(false));
      localStorage.setItem("studentMenuShow", JSON.stringify(false));
      // localStorage.setItem("user_val", JSON.stringify(this.user_val));
      this.events.publish("user:parent");
    } else if (this.user_val == "s") {
      this.FacultyForm = false;
      this.ParentForm = false;
      // this.studentForm = true;
      localStorage.setItem("user_logged_in", "student");
      console.log("UserType:", "student");
      localStorage.setItem("studentMenuShow", JSON.stringify(true));
      localStorage.setItem("parentMenuShow", JSON.stringify(false));
      localStorage.setItem("facultyMenuShow", JSON.stringify(false));
      // localStorage.setItem("user_val", JSON.stringify(this.user_val));
      this.events.publish("user:student");
    }
  }

  showPassword(input: any): any {
    console.log("input type: ", input.type);
    input.type = input.type === "password" ? "text" : "password";
    input.setFocus();
    console.log("input icon: ", this.icon);
    this.icon = this.icon === "eye-off" ? "eye" : "eye-off";
    //  input.type = input.type === 'text' ?  'password' : 'text';
  }

  login_check() {
    const student_id = JSON.parse(localStorage.getItem("student_id"));
    const client_id = localStorage.getItem("client_id");

    console.log("login_check", student_id);
    console.log("client key", client_id);

    if (student_id != null) {
      this.fcm.getToken();
      this.navCtrl.setRoot("MenuPage", { login: "student" });
    }

    /*------ Faculty login check --------*/
    const faculty_details = JSON.parse(localStorage.getItem("facultyData"));

    const facMenu = localStorage.getItem("facultyMenuShow");

    console.log("faculty_details", faculty_details);

    if (faculty_details != null && facMenu === "true") {
      localStorage.setItem("facultyMenuShow", JSON.stringify(true));
      localStorage.setItem("parentMenuShow", JSON.stringify(false));
      this.parentMenuShow = false;
      // this.studentMenuShow = false;
      this.facultyMenuShow = true;
      this.navCtrl.setRoot("MenuPage", { login: "faculty" });
    }
  }

  // switchLanguage(x) {
  //   console.log(this.lang.SIGNINPAGE);
  //   this.translate.use(this.lang);
  //   if (this.lang === "ar") {
  //     this.pt.setDir("rtl", true);
  //     this.translate.setDefaultLang(this.lang);
  //   } else {
  //     this.pt.setDir("ltr", true);
  //     this.translate.setDefaultLang(this.lang);
  //   }
  // }
  login() {
    //menu code

    if (this.user_val == undefined) {
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
    } else {
      this.user_val = JSON.parse(localStorage.getItem("user_val"));
      console.log("user_val", this.user_val);
    }

    //end menu code

    console.log("user_val", this.user_val);
    localStorage.setItem("user_val", JSON.stringify(this.user_val));
    console.log("Parent otp:", this.parentOtp);
    this.authService.postlogData(this.parentOtp, "login").subscribe(
      data => {
        console.log(data);
        let result = JSON.parse(data._body);
        this.responseData = result;

        if (this.responseData.token) {
          console.log(this.responseData);
          // localStorage.setItem(
          //   "parentOtpData",
          //   JSON.stringify(this.responseData)
          // );
          // localStorage.setItem(
          //   "parentToken",
          //   JSON.stringify(this.responseData.token)
          // );
          // localStorage.setItem(
          //   "parentMobileNumber",
          //   JSON.stringify(this.responseData.mobile_number)
          // );
          // localStorage.setItem(
          //   "parentOtp",
          //   JSON.stringify(this.responseData.otp)
          // );
          localStorage.setItem(
            "token",
            JSON.stringify(this.responseData.token)
          );
          localStorage.setItem(
            "token_type",
            JSON.stringify(this.responseData.token_type)
          );

          console.log("user_type ", this.parentOtp.user_type);
          this.navCtrl.setRoot("MenuPage", { login: "student" });
        } else {
          // alert("Invalid User");
          this.error = true;
          this.LoginError = "Invalid User";
          console.log("Invalid User");
        }
      },
      (err: any) => {
        if (err.status == 400) {
          this.error = true;
          this.LoginError = "Invalid Credentials. Please enter valid details ";
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

  /*----------Faculty Login Code----------*/

  facultyLogin() {
    localStorage.setItem("user_val", JSON.stringify(this.user_val));
    this.authFacService
      .postlogData(this.facultyData, "faculty-signin")
      .subscribe(
        data => {
          console.log(data);
          let result = JSON.parse(data._body);
          this.responseData = result;

          if (this.responseData.faculty_login_key) {
            console.log(this.responseData);
            localStorage.setItem(
              "facultyData",
              JSON.stringify(this.responseData)
            );
            localStorage.setItem("clientkey", this.facultyData.clientkey);
            console.log("clientKey ", this.facultyData.clientkey);
            this.navCtrl.setRoot("MenuPage", { login: "faculty" });
          } else {
            // alert("Invalid User");
            this.error = true;
            this.loginError =
              "You have not been assigned to any of the subject";
            console.log("Invalid User");
          }
        },
        (err: any) => {
          if (err.status === 401) {
            this.error = true;
            this.loginError =
              "Invalid Credentials. Please enter valid details ";
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
            // this.navCtrl.setRoot(LoginPage);
            // redirect to the login route
            // or show a modal
          }
        }
      );
  }
  /*----------------End Faculty Code-----------------*/

  back() {
    this.navCtrl.setRoot("LandingPage");
  }
  register(type) {
    console.log("processType:", type);
    this.navCtrl.push("StudResetLoginPage", { process_type: type });
  }
}
