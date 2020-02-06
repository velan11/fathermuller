import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AuthServiceProvider } from "../../../providers/auth-service/auth-service";

/**
 * Generated class for the StudAssignmentInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-stud-assignment-info",
  templateUrl: "stud-assignment-info.html"
})
export class StudAssignmentInfoPage {
  selectedAssignment: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider
  ) {
    this.getAssignmentDetails();
    this.readAssignment();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AssignmentInfoPage");
  }

  back() {
    this.navCtrl.pop();
  }

  getAssignmentDetails() {
    this.selectedAssignment = JSON.parse(
      localStorage.getItem("selectedAssigment")
    );
    console.log("Selected Assignment: ", this.selectedAssignment);
    console.log("Selected title: ", this.selectedAssignment.assignment.title);
    console.log(
      "Selected assignedNo: ",
      this.selectedAssignment.assignment.assignedNo
    );
    console.log(
      "seleted description:",
      this.selectedAssignment.assignment.description
    );
  }

  //Read assignment api

  readAssignment() {
    let assignmentUrl =
      "assignment/" +
      this.selectedAssignment.assignment.assignedNo +
      "/read-assignment";

    this.authService.getStudentData(assignmentUrl).subscribe(
      data => {
        console.log(data);
        // let result = JSON.parse(data._body);
        // let readAssign = result.data;

        // console.log("readAssign: ", readAssign);
      },
      (err: any) => {
        if (err.status === 0) {
          alert("Network Connection Error. Please try Again.");
          this.navCtrl.setRoot("studHomePage");
        }
      }
    );
  }
  //end read api
}
