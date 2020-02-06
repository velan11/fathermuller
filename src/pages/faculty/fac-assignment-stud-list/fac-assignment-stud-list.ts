import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { FacAuthServiceProvider } from "../../../providers/fac-auth-service/fac-auth-service";

/**
 * Generated class for the FacAssignmentStudListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-fac-assignment-stud-list",
  templateUrl: "fac-assignment-stud-list.html"
})
export class FacAssignmentStudListPage {
  assignmentStudList: any;
  selectedAll: boolean = false;
  loading: any;

  createAssignment: any;
  responseData: any;
  SendAssignmentAll: any = true;
  sendAssign: any = true;
  dtOptions1: DataTables.Settings = {};

  postAssignmnet = {
    course: "",
    period: "",
    section: "",
    subject: "",
    institution: "",
    startDate: "",
    expiryDate: "",
    assignmentTitle: "",
    description: "",
    searchAssignment: "N",
    clientkey: "",
    faculty_login_key: "",
    sendSmsToAll: "N",
    assignment_id: "",
    send_text_sms: "N",
    selectStudentIds: []
  };
  sendTextSMS: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public authFacService: FacAuthServiceProvider
  ) {
    this.assignmentStudList = this.navParams.get("AssignmentStudentsDetails");
    console.log(
      "AssignmentStudentsDetails: ",
      this.assignmentStudList.student_details
    );
    this.createAssignment = this.navParams.get("createAssignment");
    console.log("createAssignment: ", this.createAssignment);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad FacAssignmentStudListPage");
  }

  back() {
    this.navCtrl.pop();
  }
  ngOnInit() {
    this.dtOptions1 = {
      pagingType: "full_numbers"
    };
  }

  /*----------------CheckAll checkboxes- send all assignmnet------------ */
  checkAll(sEvent: any) {
    console.log("Select Event: ", sEvent.value);

    if (sEvent.value == true) {
      this.selectedAll = true;
      // console.log(this.items);
    } else {
      this.selectedAll = false;
      // this.postAssignmnet.selectStudentIds = [];
    }
  }
  /*-------end of method -CheckAll checkboxes- send all assignmnet------- */

  /*----------------add student_id--------------- */

  getMarkedStudList(id, ev: any) {
    console.log("i value:", id);
    console.log("event: ", ev.value);

    // for (let i = 0;i <this.postAssignmnet.selectStudentIds.length; i++){

    if (this.postAssignmnet.selectStudentIds.indexOf(id) == -1) {
      this.postAssignmnet.selectStudentIds.push(id);
    } else if (ev.value == false) {
      const index: number = this.postAssignmnet.selectStudentIds.indexOf(id);
      if (index !== -1) {
        this.postAssignmnet.selectStudentIds.splice(index, 1);
      }
    }

    if (this.postAssignmnet.selectStudentIds.length > 0) {
      this.SendAssignmentAll = false;
      this.sendAssign = true;
    } else {
      this.sendAssign = false;
      this.SendAssignmentAll = true;
    }

    console.log(
      "PostSelectedStudentIds: ",
      this.postAssignmnet.selectStudentIds
    );
  }

  /*----------------add student_id--------------- */

  /*----------------Add assignmnet------------------ */

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: "Loading..."
    });

    this.loading.present();
  }
  cancel() {
    this.navCtrl.pop();
  }

  sendAssignment() {
    this.presentLoadingDefault();

    if (this.sendTextSMS == true) {
      this.postAssignmnet.send_text_sms = "Y";
    }

    this.postAssignmnet.course = this.createAssignment.course;
    this.postAssignmnet.period = this.createAssignment.period;
    this.postAssignmnet.section = this.createAssignment.section;
    this.postAssignmnet.subject = this.createAssignment.subject;
    this.postAssignmnet.institution = this.createAssignment.institution;
    this.postAssignmnet.startDate = this.createAssignment.startDate;
    this.postAssignmnet.expiryDate = this.createAssignment.expiryDate;
    this.postAssignmnet.assignmentTitle = this.createAssignment.assignmentTitle;
    this.postAssignmnet.description = this.createAssignment.description;
    // this.postAssignmnet.searchAssignment= this.createAssignment.searchAssignment;
    this.postAssignmnet.clientkey = this.createAssignment.clientkey;
    this.postAssignmnet.faculty_login_key = this.createAssignment.faculty_login_key;
    // this.postAssignmnet.sendSmsToAll= this.createAssignment.student_details;
    this.postAssignmnet.assignment_id = this.assignmentStudList.assignment_info.id;
    console.log("Create Assignment: ", this.createAssignment);
    console.log("post Assignment: ", this.postAssignmnet);

    this.authFacService
      .postData(this.postAssignmnet, "faculty-app-manage-assignments")
      .subscribe(
        data => {
          console.log(data);
          let result = JSON.parse(data._body);
          this.responseData = result;
          console.log("response: ", this.responseData);
          // this.disabled = false;
          if (this.responseData) {
            this.loading.dismiss();

            alert(
              "Assignments Sent Successfully to " +
                this.postAssignmnet.selectStudentIds.length +
                " student"
            );
            this.navCtrl.setRoot("FacHomePage");
          } else {
            alert("Something went Wrong!!");
            console.log("Something went Wrong!!");
          }
        },
        (err: any) => {
          if (err.status === 401 || err.status == 401 || err.status == "401") {
            this.loading.dismiss();
            alert("something went wrong!!");
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
            // redirect to the login route
            // or show a modal
          }
          if (err.status === 500 || err.status == 500 || err.status == "500") {
            this.loading.dismiss();
            alert("Something went Wrong!! Try login again");
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
            // redirect to the login route
            // or show a modal
          }
        }
      );
  }

  /*----------------end of Add assignmnet------------ */

  sendToAll() {
    this.presentLoadingDefault();

    // if (this.selectedAll == false) {
    //   this.postAssignmnet.selectStudentIds = [];
    // }

    this.postAssignmnet.sendSmsToAll = "Y";

    this.postAssignmnet.course = this.createAssignment.course;
    this.postAssignmnet.period = this.createAssignment.period;
    this.postAssignmnet.section = this.createAssignment.section;
    this.postAssignmnet.subject = this.createAssignment.subject;
    this.postAssignmnet.institution = this.createAssignment.institution;
    this.postAssignmnet.startDate = this.createAssignment.startDate;
    this.postAssignmnet.expiryDate = this.createAssignment.expiryDate;
    this.postAssignmnet.assignmentTitle = this.createAssignment.assignmentTitle;
    this.postAssignmnet.description = this.createAssignment.description;
    // this.postAssignmnet.searchAssignment= this.createAssignment.searchAssignment;
    this.postAssignmnet.clientkey = this.createAssignment.clientkey;
    this.postAssignmnet.faculty_login_key = this.createAssignment.faculty_login_key;

    this.postAssignmnet.assignment_id = this.assignmentStudList.assignment_info.id;
    console.log("Create Assignment: ", this.createAssignment);
    console.log("post Assignment: ", this.postAssignmnet);

    this.authFacService
      .postData(this.postAssignmnet, "faculty-app-manage-assignments")
      .subscribe(
        data => {
          console.log(data);
          let result = JSON.parse(data._body);
          this.responseData = result;
          console.log("response: ", this.responseData);
          // this.disabled = false;
          if (this.responseData) {
            this.loading.dismiss();

            alert(
              "Assignments Sent Successfully to " +
                this.assignmentStudList.student_details.length +
                " student"
            );
            this.navCtrl.setRoot("FacHomePage");
          } else {
            alert("Something went Wrong!!");
            console.log("Something went Wrong!!");
          }
        },
        (err: any) => {
          if (err.status === 401 || err.status == 401 || err.status == "401") {
            this.loading.dismiss();
            alert("something went wrong!!");
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
            // redirect to the login route
            // or show a modal
          }
          if (err.status === 500 || err.status == 500 || err.status == "500") {
            this.loading.dismiss();
            alert("Something went Wrong!! Please Try again");
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
            // redirect to the login route
            // or show a modal
          }
        }
      );
  }
}
