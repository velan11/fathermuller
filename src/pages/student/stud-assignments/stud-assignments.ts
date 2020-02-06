import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { AuthServiceProvider } from "../../../providers/auth-service/auth-service";
import { NativeStorage } from "@ionic-native/native-storage/ngx";

/**
 * Generated class for the StudAssignmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-stud-assignments",
  templateUrl: "stud-assignments.html"
})
export class StudAssignmentsPage {
  data: any;
  assignmentInfo: any;
  assignmentArray: any;
  subjectName: any;
  selectedSubject = [];
  hide: any;
  allSubject = [];
  noAssignment = true;
  subjectList = [];
  noData = false;
  noDataValue: any;
  dropdown = true;
  flag = false;

  /*-------Read/UnRead Assignment ------*/
  assignment_count = 0;
  unread_assignment = [];
  read_assignment = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public loadingCtrl: LoadingController,
    public storage: NativeStorage
  ) {
    this.displayAssignmentInfo();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad StudAssignmentsPage");
    this.presentLoadingCustom();
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
  back() {
    this.navCtrl.pop();
  }

  displayAssignmentInfo() {
    this.hide = true;
    let assignmentUrl = "assignments-details";
    this.subjectList = [];
    this.authService.getStudentData(assignmentUrl).subscribe(
      data => {
        console.log(data);
        this.data = JSON.parse(data._body);
        this.assignmentInfo = this.data.data;

        console.log("length assignment: ", this.assignmentInfo);

        if (this.assignmentInfo.length == 0) {
          this.noData = true;
          this.noDataValue = "No Items to Display";
          this.noAssignment = false;
          // } else if (
          //   this.assignmentInfo.assignmentList == 0 ||
          //   this.assignmentInfo.assignmentList == undefined
          // ) {
          //   this.noData = true;
          //   this.noAssignment = false;
          // } else {
          //   this.noData = false;
          //   this.noAssignment = true;
        }

        for (let i = 0; i < this.assignmentInfo.length; i++) {
          if (
            this.assignmentInfo[i].assignmentList == "" ||
            this.assignmentInfo[i].assignmentList == "null" ||
            this.assignmentInfo[i].assignmentList == null ||
            this.assignmentInfo[i].assignmentList === null ||
            this.assignmentInfo[i].assignmentList == undefined
          ) {
            // this.allSubject = ["Nothing to display"];
            console.log("flag: ", this.flag);
            if (this.flag != true) {
              this.flag = false;
              console.log("Nothing to display");
              this.noAssignment = false;
              this.noData = true;
              this.noDataValue = "No Items to display";
            } else {
            }
          } else {
            this.noAssignment = true;
            this.flag = true;
            this.noData = false;
            if (this.assignmentInfo[i].subname != null) {
              this.subjectList.push(this.assignmentInfo[i].subname);
            }

            console.log(
              "this.subjectList.push",
              this.assignmentInfo[i].subname
            );
          }
        }
        console.log("subjectList: ", this.subjectList);

        console.log("assignmentInfo: ", this.assignmentInfo);
        // console.log(this.assignmentInfo[0].subname);

        this.allSubject = [];
        for (let i = 0; i < this.assignmentInfo.length; i++) {
          this.hide = true;
          // console.log("length:", this.assignmentInfo[i].assignmentList.length);

          if (
            this.assignmentInfo[i].assignmentList == "" ||
            this.assignmentInfo[i].assignmentList == null ||
            this.assignmentInfo[i].assignmentList == "null" ||
            this.assignmentInfo[i].assignmentList === null ||
            this.assignmentInfo[i].assignmentList == undefined
          ) {
            // this.allSubject = ["Nothing to display"];
          } else {
            for (
              let j = 0;
              j < this.assignmentInfo[i].assignmentList.length;
              j++
            ) {
              this.allSubject.push({
                assignNo: this.assignmentInfo[i].assignmentList[j].assignedNo,
                assignment: this.assignmentInfo[i].assignmentList[j],
                subname: this.assignmentInfo[i].subname,
                read: false
              });

              this.unread_assignment.push({
                assignment: this.assignmentInfo[i].assignmentList[j]
              });

              // console.log("allSubject: ", this.allSubject);
            }
          }
        }

        console.log("assignNo: ", this.allSubject);

        this.allSubject.sort(
          (a, b) => a.assignment.assignedNo - b.assignment.assignedNo
        );

        console.log(this.allSubject);

        // if (this.read_assignment != null) {
        //   this.read_assignment = JSON.parse(
        //     localStorage.getItem("read_assignment")
        //   );
        // }

        console.log("All assignment: ", this.allSubject);

        console.log("read Assignment:", this.read_assignment);

        // if (this.read_assignment != null) {
        //   for (let k = 0; k < this.assignmentInfo.length; k++) {
        //     for (let l = 0; l < this.read_assignment.length; l++)
        //       if (
        //         this.read_assignment[l].assignment.assignedNo ===
        //         this.assignmentInfo[k].assignment.assignedNo
        //       ) {
        //         this.allSubject[k].read = true;
        //       }
        //   }
        // } else {
        //   console.log("read assignment empty");
        // }
        console.log("allsubject read:", this.allSubject);
        // localStorage.setItem(
        //   "assignment_count",
        //   JSON.stringify(this.assign_new_count)
        // );
      },
      (err: any) => {
        if (err.status === 0) {
          alert("Network Connection Error. Please try Again.");
          this.navCtrl.setRoot("studHomePage");
        }
      }
    );
  }

  getSubject() {
    console.log("Selected assignment", this.subjectName);
    localStorage.setItem("selectedSubject", this.subjectName);

    this.selectedSubject = [];

    for (let i = 0; i < this.assignmentInfo.length; i++) {
      if (this.subjectName == this.assignmentInfo[i].subname) {
        this.hide = false;
        console.log("Subject Selected: ", this.assignmentInfo[i].subname);

        // console.log(
        //   "inside loop: ",
        //   this.assignmentInfo[i].assignmentList.length
        // );
        if (
          this.assignmentInfo[i].assignmentList == "" ||
          this.assignmentInfo[i].assignmentList == null ||
          this.assignmentInfo[i].assignmentList == "null" ||
          this.assignmentInfo[i].assignmentList === null ||
          this.assignmentInfo[i].assignmentList == undefined ||
          this.assignmentInfo[i].subname == null
        ) {
        } else {
          for (
            let j = 0;
            j < this.assignmentInfo[i].assignmentList.length;
            j++
          ) {
            this.selectedSubject.push({
              assignment: this.assignmentInfo[i].assignmentList[j],
              subname: this.assignmentInfo[i].subname
            });
            console.log("val inside loop: ", this.selectedSubject);
          }
        }
      }
    }

    if (this.subjectName == "All Subject") {
      this.hide = true;
      this.allSubject = [];
      // this.subjectList = [];
      console.log("clear subjectList:", this.subjectList);
      this.displayAssignmentInfo();
    }
  }

  displayAssignmentDesc(item) {
    /*------- Assignment Count ------*/

    // console.log("assignment Count:", this.assign_new_count);

    // this.assign_old_count = JSON.parse(
    //   localStorage.getItem("assignment_count")
    // );
    // let assignment_count_dec = this.assign_old_count - 1;
    // console.log("assignment count: ", assignment_count_dec);
    // if (assignment_count_dec > 0) {
    //   localStorage.setItem(
    //     "assignment_count",
    //     JSON.stringify(assignment_count_dec)
    //   );
    //   // this.storage.setItem("assignment", this.assignment_count).then(() => {
    //   //   console.log("assignment count Updated");
    //   //   console.log(data);
    //   // });
    // }

    // this.unread_assignment.push({
    //   assignment_no: item.assignedNo,
    //   read: true
    // });

    // this.read_assignment.push(item.assignment);
    console.log("unread assignment:", this.unread_assignment);
    console.log("item.assignment.assignedNo:", item.assignment.assignedNo);
    // this.unread_assignment = this.read_assignment.filter(
    //   assignedNo => item.assignment
    // );

    let read_assign = this.unread_assignment.filter(item => {
      for (let i = 0; i < this.unread_assignment.length; i++) {
        return (
          this.unread_assignment[i].assignment.assignedNo ==
          item.assignment.assignedNo
        );
      }
    });

    console.log("read_assign:", read_assign);

    this.read_assignment.push({ asignedNo: read_assign });

    console.log("read_assignment:", this.read_assignment);

    // if (read_assign == null) {
    // } else {
    //   for (let m = 0; m < read_assign.length; m++) {
    //     // for (let n = 0; n < this.read_assignment.length; n++) {
    //     if (this.read_assignment == null) {
    //       this.read_assignment.push({
    //         assignedNo: this.unread_assignment[m].assignedNo
    //       });
    //     } else if (
    //       this.read_assignment[m].assignment.assignedNo !=
    //       read_assign[m].assignedNo
    //     ) {
    //       this.read_assignment.push({
    //         assignedNo: this.unread_assignment[m].assignedNo
    //       });
    //     }
    //     // }
    //   }
    // }

    console.log("assigned read assignment:", this.read_assignment);

    let unread_assign = this.unread_assignment.filter(item => {
      for (let i = 0; i < this.unread_assignment.length; i++) {
        return (
          this.unread_assignment[i].assignment.assignedNo !=
          item.assignment.assignedNo
        );
      }
    });
    console.log("read assignment - read_assign:", this.read_assignment);
    // this.read_assignment.push(read_assign);
    // console.log("read assignment:", this.read_assignment);
    console.log("unread_assign assignment:", unread_assign);

    localStorage.setItem(
      "read_assignment",
      JSON.stringify(this.read_assignment)
    );

    /*------- end Assignment Count ----*/

    console.log("item: ", item);
    localStorage.setItem("selectedAssigment", JSON.stringify(item));
    console.log(
      "Selected Subject - Assignment: ",
      JSON.parse(localStorage.getItem("selectedAssigment"))
    );
    this.navCtrl.push("StudAssignmentInfoPage");
  }
}
