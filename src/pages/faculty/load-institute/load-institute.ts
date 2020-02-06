import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  App,
  LoadingController,
  AlertController
} from "ionic-angular";
import { FacAuthServiceProvider } from "../../../providers/fac-auth-service/fac-auth-service";

/**
 * Generated class for the LoadInstitutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-load-institute",
  templateUrl: "load-institute.html"
})
export class LoadInstitutePage {
  responseData: any;
  testRadioOpen: any;
  testRadioResult: any;
  faculty_login_key1: any;
  faculty_login_key: any;
  institution_lists: any;
  institution_id = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authFacService: FacAuthServiceProvider,
    public appCtrl: App,
    public atrCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
    this.presentLoadingDefault();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoadInstitutePage");

    this.getInstitute();
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: "Logging In..."
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 800);
  }

  getInstitute() {
    console.log("getInstitute method");

    this.faculty_login_key1 = JSON.parse(localStorage.getItem("facultyData"));
    console.log(
      "faculty_login_key-attendance",
      this.faculty_login_key1.faculty_login_key
    );
    let clientkey = localStorage.getItem("clientkey");
    console.log("clientkey", clientkey);

    this.faculty_login_key = this.faculty_login_key1.faculty_login_key;

    let attendanceVal =
      "student-attendance-get-institution?clientkey=" +
      clientkey +
      "&faculty_login_key=" +
      this.faculty_login_key1.faculty_login_key;
    console.log("Attedance Val-", attendanceVal);

    this.authFacService.getData(attendanceVal).subscribe(
      data => {
        console.log(data);
        let result = JSON.parse(data._body);
        this.responseData = result;
        console.log(this.responseData);
        console.log("institution list: ", this.responseData.institution_lists);
        console.log(
          "institution length: ",
          this.responseData.institution_lists.length
        );
        // this.getCourse();

        if (this.responseData.institution_lists.length > 1) {
          this.institution_lists = this.responseData.institution_lists;
          // this.getCourse();
          localStorage.setItem(
            "getStudents.institution",
            JSON.stringify(this.responseData.institution_lists.id)
          );
          console.log(
            "response Institution: ",
            this.responseData.institution_lists[0].id
          );

          /*----- alert for institution popup ------*/

          let alert = this.atrCtrl.create();
          alert.setTitle("Select Institution");

          for (let i = 0; i < this.institution_lists.length; i++) {
            // institution list
            this.institution_id.push(
              this.institution_lists[i].id,
              this.institution_lists[i].display_name
            );

            if (i == 0) {
              alert.addInput({
                type: "radio",
                label: this.institution_lists[i].display_name,
                value: this.institution_lists[i].id,
                checked: true
              });
            } else {
              alert.addInput({
                type: "radio",
                label: this.institution_lists[i].display_name,
                value: this.institution_lists[i].id,
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
              localStorage.setItem("institution_id", this.testRadioResult);
            }
          });
          alert.present();
          this.navCtrl.setRoot("FacHomePage");
        } else {
          localStorage.setItem(
            "institution_id",
            JSON.stringify(this.responseData.institution_lists[0].id)
          );
          console.log(
            "response Institution: ",
            this.responseData.institution_lists[0].id
          );
          this.navCtrl.setRoot("FacHomePage");
        }
      },
      err => {
        if (err.status === 401) {
          alert("Unauthorised User!! Login Again!!");
          this.navCtrl.setRoot("FacLgoutPage");
          // redirect to the logout route
          // or show a modal
        }
        if (err.status === 0) {
          alert("Network Connection Error. Please try Again.");
          // localStorage.clear();
          // this.navCtrl.setRoot("LandingPage");
          // redirect to the logout route
          // or show a modal
        }
      }
    );
  }
}
