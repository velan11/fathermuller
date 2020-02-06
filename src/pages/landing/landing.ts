import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Nav } from "ionic-angular";

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-landing",
  templateUrl: "landing.html"
})
export class LandingPage {
  @ViewChild(Nav) nav: Nav;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.login_check();
  }
  ngOnInit() {}
  ionViewDidLoad() {
    console.log("ionViewDidLoad LandingPage");
  }
  facultyLogin() {
    this.navCtrl.push("LoginPage", { user_val: "f" });
  }
  parentLogin() {
    this.navCtrl.push("LoginPage", { user_val: "p" });
  }
  login_check() {
    const student_id = JSON.parse(localStorage.getItem("student_id"));
    const client_id = localStorage.getItem("client_id");
    //localStorage.getItem("login_user");

    console.log("login_check", student_id);
    console.log("client key", client_id);

    if (student_id != null) {
      this.navCtrl.setRoot("MenuPage", { login: "student" });
    }

    /*------ Faculty loginss check --------*/
    const faculty_details = JSON.parse(localStorage.getItem("facultyData"));

    const facMenu = localStorage.getItem("facultyMenuShow");

    console.log("faculty_details", faculty_details);

    if (faculty_details != null && facMenu === "true") {
      localStorage.setItem("facultyMenuShow", JSON.stringify(true));
      localStorage.setItem("parentMenuShow", JSON.stringify(false));

      this.navCtrl.setRoot("MenuPage", { login: "faculty" });
    }
  }
}
