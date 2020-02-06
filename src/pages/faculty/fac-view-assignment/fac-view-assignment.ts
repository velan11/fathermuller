import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  ModalController,
  AlertController
} from "ionic-angular";
import { FacAuthServiceProvider } from "../../../providers/fac-auth-service/fac-auth-service";
import { DataTableDirective } from "angular-datatables";

/**
 * Generated class for the FacViewAssignmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-fac-view-assignment",
  templateUrl: "fac-view-assignment.html"
})
export class FacViewAssignmentPage {
  responseData: any;
  assignment_list: any;
  loading: any;
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authFacService: FacAuthServiceProvider,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController
  ) {
    // this.getAssignmentList();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad FacViewAssignmentPage");
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: "full_numbers"
    };
    this.assignment_list = [];
    this.getAssignmentList();
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: "Loading..."
    });

    this.loading.present();
  }
  back() {
    this.navCtrl.pop();
  }

  getAssignmentList() {
    this.presentLoadingDefault();
    console.log("getCourse method");

    let institution = JSON.parse(localStorage.getItem("institution_id"));
    console.log("Institution Id: ", institution);

    let fac_key = JSON.parse(localStorage.getItem("facultyData"));
    console.log("faculty_login_key: ", fac_key.faculty_login_key);

    // let clientkey = localStorage.getItem("clientkey");
    // console.log("clientkey", clientkey);
    let assignmentList =
      "faculty-app-get-sent-assignment-list?&faculty_login_key=" +
      fac_key.faculty_login_key +
      "&institution_id=" +
      institution;
    console.log("get course-", assignmentList);

    this.authFacService.getData(assignmentList).subscribe(
      data => {
        console.log(data);
        let result = JSON.parse(data._body);

        this.responseData = result;
        console.log(this.responseData);

        if (this.responseData.assignment_details) {
          this.loading.dismiss();

          this.assignment_list = this.responseData.assignment_details;
          console.log("length: ", this.assignment_list.length);
        } else {
          alert("no data loaded");
          this.loading.dismiss();
        }
      },
      err => {
        if (err.status === 401 || err.status == 401 || err.status == "401") {
          alert("Something went wrong!! Please Try again.");
          // this.navCtrl.setRoot("FacLgoutPage");
          this.loading.dismiss();
          // redirect to the login route
          // or show a modal
        }
        if (err.status === 500) {
          alert("Something went wrong. Please try Again.");
          // this.navCtrl.setRoot("FacLgoutPage");
          this.loading.dismiss();
          // redirect to the login route
          // or show a modal
        } else {
          alert("Something went wrong. Please try Again.");
          // this.navCtrl.setRoot("FacLgoutPage");
          this.loading.dismiss();
        }
      }
    );
  }

  //View Assignment Description Modal
  viewAssign(item) {
    console.log("itemitem", item);

    localStorage.setItem("FacAssignmt", JSON.stringify(item));
    console.log("item", item);
    const modal = this.modalCtrl.create("FacViewAssignmentModalPage");
    modal.present();
  }

  //Delete Assignment - confirm Delete
  DeleteAlert(item) {
    let alert = this.alertCtrl.create({
      title: "Confirm Delete  ",
      buttons: [
        {
          text: "No",
          role: "cancel",
          handler: () => {
            // this.navCtrl.pop();
            console.log("No clicked");
          }
        },
        {
          text: "Yes",
          handler: () => {
            this.deleteAssign(item);
            console.log("Yes clicked");
          }
        }
      ]
    });

    alert.present();
  }

  //Delete Assignment
  deleteAssign(item) {
    this.presentLoadingDefault();
    console.log("getCourse method");

    let faculty_login_key = JSON.parse(
      localStorage.getItem("faculty_login_key")
    );

    let delAssign =
      "faculty-app-delete-assignment?&faculty_login_key=" +
      faculty_login_key +
      "&assignment_id=" +
      item.assignment_id;
    console.log("get course-", delAssign);

    this.authFacService.getData(delAssign).subscribe(
      data => {
        console.log(data);
        // let result = JSON.parse(data._body);
        this.loading.dismiss();
        alert("Assignment Title: " + item.title + " Deleted Successfully ");
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
      },
      err => {
        if (err.status === 401 || err.status == 401 || err.status == "401") {
          alert("Something Went wrong. Delete was unsuccessfull.");

          this.loading.dismiss();
          // redirect to the login route
          // or show a modal
        }
        if (err.status === 500) {
          alert("Something went wrong. Login Again.");

          this.loading.dismiss();
          // redirect to the login route
          // or show a modal
        }
      }
    );
  }
}
