import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  LoadingController
} from "ionic-angular";
import { AuthServiceProvider } from "../../../providers/auth-service/auth-service";

import { AppVersion } from "@ionic-native/app-version";

/**
 * Generated class for the StudentListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-student-list",
  templateUrl: "student-list.html"
})
export class StudentListPage {
  os_type: any = 1; //android
  data: any;
  responseData: any;
  testRadioOpen: any;
  testRadioResult: any;

  userToken: any;
  token_type: any;
  user_id: any;
  student_data: any;
  student_list = [];
  client_id: any;
  student_id: any;
  loading: any;

  // AppName: string;
  // PackageName: string;
  // VersionCode: string | number;
  VersionNumber = "1.1.1";
  // VersionNum: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public atrCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private appVersion: AppVersion
  ) {
    //fetch App version code
    // this.appVersion.getVersionNumber().then(function(versionNumber) {
    //   // 1.0.0
    //   console.log("version number", versionNumber);
    // });
    // this.appVersion.getVersionNumber().then(
    //   versionNumber => {
    //     this.VersionCode = versionNumber;
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
    // this.appVersion.getVersionCode().then(value => {
    //   this.VersionCode = value;
    // });
    // alert("version-code: " + this.VersionCode);
    // this.appVersion.getVersionNumber().then(value => {
    //   this.VersionNumber = value;
    // });
    // alert("version-number: " + this.VersionNumber);
    //end version code
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad StudentListPage");
    this.presentLoadingCustom();
    this.getUser();
  }

  presentLoadingCustom() {
    const loading = this.loadingCtrl.create({
      content: "Loading...",
      duration: 2000
    });

    loading.onDidDismiss(() => {
      console.log("Dismissed loading");
    });

    loading.present();
  }

  getUser() {
    this.authService.getData("user").subscribe(
      data => {
        // this.loading.dismiss();
        console.log(data);
        this.data = JSON.parse(data._body);
        this.responseData = this.data;

        if (this.responseData) {
          console.log("Data: ", this.responseData);
          localStorage.setItem(
            "UserData",
            JSON.stringify(this.responseData.data)
          );
          localStorage.setItem(
            "user_id",
            JSON.stringify(this.responseData.data.id)
          );
          this.user_id = this.responseData.data.id;
          console.log("userId:", this.responseData.data.id);
          localStorage.setItem(
            "name",
            JSON.stringify(this.responseData.data.name)
          );
          localStorage.setItem(
            "mobile_number",
            JSON.stringify(this.responseData.data.mobile_number)
          );

          this.getStudents();

          //       this.navCtrl.setRoot(HomePage);
        } else {
          // alert("Invalid User");

          console.log("Invalid User");
        }
      },
      (err: any) => {
        if (err.status == 401) {
          console.log("error log list: ", err.message);

          // alert("Unauthorised User");
          // redirect to the login route
          // or show a modal
        }
        if (err.status == 400) {
          console.log("Bad Request: ", err);
          alert("Bad Request");

          // alert("Unauthorised User");
          // redirect to the login route
          // or show a modal
        }
        if (err.status == 0) {
          alert("Network Connection Error. Please try Again.");
          // localStorage.clear();
          this.navCtrl.setRoot("StudHomePage");
          // redirect to the login route
          // or show a modal
        }
      }
    );
  }

  getStudents() {
    console.log("getStudent method");

    this.user_id = JSON.parse(localStorage.getItem("user_id"));
    console.log("user_id", this.user_id);

    let getStudentsUrl =
      "parent/" +
      this.user_id +
      "/students?version_code=" +
      this.VersionNumber +
      "&os_type=" +
      this.os_type;
    console.log("Attedance Val-", getStudentsUrl);

    this.authService.getData(getStudentsUrl).subscribe(
      data => {
        console.log(data);
        this.data = JSON.parse(data._body);
        this.responseData = this.data;
        console.log("getStudents: ", this.responseData);
        console.log("getStudents-data: ", this.responseData.data);

        localStorage.setItem(
          "studentData",
          JSON.stringify(this.responseData.data)
        );

        if (this.responseData.data) {
          this.student_data = this.responseData.data;

          localStorage.setItem(
            "student_data",
            JSON.stringify(this.responseData.data)
          );
          localStorage.setItem(
            "student_id",
            JSON.stringify(this.responseData.data[0].student_id)
          );
          localStorage.setItem(
            "client_id",
            JSON.stringify(this.responseData.data[0].client_id)
          );
          console.log(
            "response Institution: ",
            this.responseData.data[0].student_id
          );

          /*----- alert for institution popup ------*/

          let alert = this.atrCtrl.create();
          alert.setTitle("Current Student");

          for (let i = 0; i < this.student_data.length; i++) {
            // institution list
            console.log("count: ", i);
            this.student_list.push({
              student_id: this.student_data[i].student_id,
              fullname: this.student_data[i].FullName,
              coursename: this.student_data[i].CourseName,
              client_id: this.student_data[i].client_id,
              client_name: this.student_data[i].client_name
            });

            if (i == 0) {
              alert.addInput({
                type: "radio",
                label:
                  this.student_data[i].FullName +
                  " \r\n " +
                  this.student_data[i].CourseName,
                value: this.student_data[i].student_id,
                checked: true
              });
            } else {
              alert.addInput({
                type: "radio",
                label:
                  this.student_data[i].FullName +
                  " - " +
                  this.student_data[i].CourseName,
                value: this.student_data[i].student_id,
                checked: false
              });
            }
          }

          // alert.addButton('Cancel');
          alert.addButton({
            text: "OK",
            handler: data => {
              this.testRadioOpen = false;
              this.testRadioResult = data;
              console.log("radiovalue: ", this.testRadioResult);
              this.student_id = data;
              console.log("studentid:", this.student_id);
              localStorage.setItem(
                "student_id",
                JSON.stringify(this.testRadioResult)
              );
              this.getClientid();
            }
          });
          alert.present();

          this.student_id = JSON.parse(localStorage.getItem("student_id"));
          console.log("student list- student id:", this.student_id);

          this.navCtrl.setRoot("StudHomePage");
        } else {
          alert(
            "No Students found in the Institutions. Kindly Enter the Valid Details"
          );
          localStorage.clear();
          this.navCtrl.setRoot("LandingPage");
        }
      },
      err => {
        if (err.status === 401) {
          alert("Unauthorised User!! Login Again!!");
          this.navCtrl.setRoot("LogoutPage");
          // redirect to the logout route
          // or show a modal
        }
        if (err.status === 0) {
          alert("Network Connection Error. Please try Again.");
          // localStorage.clear();
          this.navCtrl.setRoot("LandingPage");
          // redirect to the logout route
          // or show a modal
        }
      }
    );
  }

  getClientid() {
    this.student_id = JSON.parse(localStorage.getItem("student_id"));
    this.student_data = JSON.parse(localStorage.getItem("student_data"));

    for (let i = 0; i < this.student_data.length; i++) {
      // institution list
      console.log(
        "this.student_data[i].student_id:",
        this.student_data[i].student_id
      );
      console.log("student_id:", this.student_id);
      if (this.student_id == this.student_list[i].student_id) {
        this.client_id = this.student_list[i].client_id;
        console.log("client_id: ", this.client_id);
        localStorage.setItem(
          "client_id",
          JSON.stringify(this.student_list[i].client_id)
        );
      }
    }
  }
}
