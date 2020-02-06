import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { AuthServiceProvider } from "../../../providers/auth-service/auth-service";

/**
 * Generated class for the AboutStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-about-student",
  templateUrl: "about-student.html"
})
export class AboutStudentPage {
  data: any;
  responseData: any;
  user_id: any;
  student_info: any;

  // client_id: any;
  // student_id: any;
  // FullName: any;
  // AdmissionDate: any;
  // AdmissionNo: any;
  DateOfBirth: any;
  NoInternet: any;
  joining_date: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public loadingCtrl: LoadingController
  ) {
    this.getStudentInfo();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AboutStudentPage");
  }

  back() {
    this.navCtrl.pop();
  }

  getStudentInfo() {
    let loading = this.loadingCtrl.create({
      content: "Loading Please Wait..."
    });

    loading.present();

    let getStudentsUrl = "student-info";
    console.log("Student Info-", getStudentsUrl);

    this.authService.getStudentData(getStudentsUrl).subscribe(
      data => {
        loading.dismiss();
        console.log(data);
        this.data = JSON.parse(data._body);
        this.responseData = this.data;
        console.log(this.responseData.data);
        if (this.responseData) {
          console.log("Data: ", this.responseData.data);

          this.student_info = this.responseData.data;
          console.log(this.student_info);
          let dob = this.student_info.DateOfBirth;
          let jod = this.student_info.joining_date;

          let dateData1 = dob.split("-");
          let year1 = dateData1[0];
          let month1 = dateData1[1];
          let day1 = dateData1[2];
          this.DateOfBirth = day1 + "/" + month1 + "/" + year1;
          console.log("dob: ", this.DateOfBirth);

          let dateData2 = jod.split("-");
          let year2 = dateData2[0];
          let month2 = dateData2[1];
          let day2 = dateData2[2];
          this.joining_date = day2 + "/" + month2 + "/" + year2;
          console.log("jod: ", this.joining_date);
        } else {
          // alert("Invalid User");
          loading.dismiss();
          console.log("Invalid User");
        }
      },
      (err: any) => {
        loading.dismiss();
        this.NoInternet = true;
        if (err.status === 401) {
          console.log("error log list: ", err.message);
        }
        if (err.status === 400) {
          console.log("Bad Request: ", err);
          alert("Bad Request");
        }
        if (err.status === 0) {
          alert("Network Connection Error. Please try Again.");
          // localStorage.clear();
          this.navCtrl.setRoot("StudHomePage");
        }
      }
    );
  }
}
