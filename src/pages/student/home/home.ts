import { Component } from "@angular/core";
import {
  NavController,
  IonicPage,
  LoadingController,
  Modal,
  ModalController,
  ModalOptions
} from "ionic-angular";
import { AuthServiceProvider } from "../../../providers/auth-service/auth-service";
// import { ModalPage } from "./modal-page";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  loading: any;
  responseData: any;
  student_profile: any;
  id: any;
  student_details: any;
  DateOfBirth: any;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public authService: AuthServiceProvider,
    private modal: ModalController
  ) {
    this.getStudentProfile();
  }
  ngOnInit() {
    // this.getStudentProfile();
  }

  /*---------------PresentLoading alert method------------*/

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Loading..."
    });

    this.loading.present();
  }

  /*-------------- end PresentLoading alert method----------*/

  /*--------------Modal page method-----------*/

  presentProfileModal() {
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };

    // const myModalData = {
    //   name: "Paul Halliday",
    //   occupation: "Developer"
    // };

    const myModal: Modal = this.modal.create("EditProfilePage");

    myModal.present();

    myModal.onDidDismiss(data => {
      console.log("I have dismissed.");
      console.log(data);
    });

    myModal.onWillDismiss(data => {
      console.log("I'm about to dismiss");
      console.log(data);
    });
  }

  /*--------------end Modal page method-----------*/

  getStudentProfile() {
    this.presentLoading();
    console.log("getStudentProfile method");
    let token = JSON.parse(localStorage.getItem("token"));

    let classval = "get-student-profile?token=" + token;
    console.log("get course-", classval);

    this.authService.getData(classval).subscribe(
      data => {
        this.loading.dismiss();
        console.log(data);
        let result = JSON.parse(data._body);

        this.responseData = result;
        console.log(this.responseData);
        if (this.responseData.student_profile) {
          this.student_profile = this.responseData.student_profile;
          console.log("student_profile: ", this.student_profile);
          localStorage.setItem(
            "board_id",
            JSON.stringify(this.responseData.student_details.board_id)
          );
          localStorage.setItem(
            "class_id",
            JSON.stringify(this.responseData.student_details.class_id)
          );
          localStorage.setItem(
            "student_details",
            JSON.stringify(this.responseData.student_details)
          );
          localStorage.setItem(
            "student_profile",
            JSON.stringify(this.student_profile)
          );

          this.student_details = this.responseData.student_details;
          console.log("student details: ", this.student_details);

          //dob conversion

          let dateData1 = this.student_details.date_of_birth.split("-");
          let year1 = dateData1[0];
          let month1 = dateData1[1];
          let day1 = dateData1[2].split(" ");
          this.DateOfBirth = day1[0] + "/" + month1 + "/" + year1;
        } else if (this.responseData.status == "Authorization Token failed") {
          alert("session expired!!");
          localStorage.removeItem("token");
          this.navCtrl.setRoot("LoginPage");
        }
      },
      err => {
        if (err.status === 401 || err.status == 401 || err.status == "401") {
          alert("No data loaded!! ");
        }
        if (err.status === 500) {
          alert("No data loaded!! ");
        }
        if (err.status === 200 || err.status == 200 || err.status == "200") {
          alert("No data loaded!! ");
          localStorage.clear();
        }
      }
    );
  }
}
