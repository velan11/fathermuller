import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  App
} from "ionic-angular";
import { FacAuthServiceProvider } from "../../../providers/fac-auth-service/fac-auth-service";
/**
 * Generated class for the FacAssignmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import * as Quill from "quill";
import imageCompressor from "../../../assets/js/quill.imageCompressor.js";

Quill.register("modules/imageCompress", imageCompressor);

@IonicPage()
@Component({
  selector: "page-fac-assignment",
  templateUrl: "fac-assignment.html"
})
export class FacAssignmentPage {
  modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction
      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"], // remove formatting button
      ["link", "image", "code-block"] // link and image and code
    ],

    imageCompress: {
      quality: 0.5, // default
      maxWidth: 1000, // default
      imageType: "image/jpeg" // default
    }
  };

  responseData: any;
  createAssignment = {
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
    faculty_login_key: ""
  };
  faculty_login_key1: any;
  course_list: any;
  coursePeriod = [];
  subject_details = [];
  section_details = [];
  loading: any;
  hideMe: any;
  tday: String = new Date().toISOString().substring(0, 10);
  // public tinyMceSettings = {
  //   skin_url: "/assets/tinymce/skins/lightgray",
  //   inline: false,
  //   statusbar: false,
  //   browser_spellcheck: true,
  //   height: 320,
  //   plugins: "fullscreen"
  // };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authFacService: FacAuthServiceProvider,
    public loadingCtrl: LoadingController,
    public app: App
  ) {
    this.getCourse();
    this.startDate();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad FacAssignmentsPage");
  }
  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: "Loading..."
    });

    this.loading.present();
  }
  onEditorContentChange(sdfa) {
    console.log(sdfa, "sdfa", sdfa.html);
    this.createAssignment.description = sdfa.html;
  }
  back() {
    this.navCtrl.setRoot("FacHomePage");
  }

  getCourse() {
    this.presentLoadingDefault();
    console.log("getCourse method");

    this.createAssignment.institution = JSON.parse(
      localStorage.getItem("institution_id")
    );
    console.log("Institution Id: ", this.createAssignment.institution);

    this.faculty_login_key1 = JSON.parse(localStorage.getItem("facultyData"));
    console.log(
      "faculty_login_key-attendance",
      this.faculty_login_key1.faculty_login_key
    );
    localStorage.setItem(
      "faculty_login_key",
      JSON.stringify(this.faculty_login_key1.faculty_login_key)
    );

    this.createAssignment.faculty_login_key = this.faculty_login_key1.faculty_login_key;

    // localStorage.setItem(
    //   "getStudents.faculty_login_key",
    //   JSON.stringify(this.faculty_login_key1.faculty_login_key)
    // );

    console.log("Institution Id: ", this.createAssignment.institution);
    let clientkey = localStorage.getItem("clientkey");
    console.log("clientkey", clientkey);
    let courseval =
      "student-attendance-get-course?institution_id=" +
      this.createAssignment.institution +
      "&faculty_login_key=" +
      this.faculty_login_key1.faculty_login_key;
    console.log("get course-", courseval);

    this.authFacService.getData(courseval).subscribe(
      data => {
        console.log(data);
        let result = JSON.parse(data._body);

        this.responseData = result;
        console.log(this.responseData);
        console.log("course list", this.responseData.course_list);
        console.log("faculty id", this.responseData.faculty_id);

        localStorage.setItem(
          "getStudents.faculty_id",
          this.responseData.faculty_id
        );
        // console.log("faculty id",this.faculty_id);

        if (this.responseData.course_list) {
          this.loading.dismiss();
          this.course_list = this.responseData.course_list;
        } else {
          alert("no data loaded");
        }
      },
      err => {
        if (err.status === 401 || err.status == 401 || err.status == "401") {
          alert("Unauthorised user. Login Again.");
          this.navCtrl.setRoot("FacLgoutPage");
          this.loading.dismiss();
          // redirect to the login route
          // or show a modal
        }
        if (err.status === 500) {
          alert("Something went wrong. Login Again.");
          this.navCtrl.setRoot("FacLgoutPage");
          this.loading.dismiss();
          // redirect to the login route
          // or show a modal
        }
      }
    );
  }

  getCoursePeriod() {
    this.presentLoadingDefault();
    console.log("getCoursePeriod method");
    this.coursePeriod = [];

    localStorage.setItem("getStudents.course", this.createAssignment.course);
    console.log(this.createAssignment.course);

    // this.createAssignment.institution = localStorage.getItem("institution_id");
    // console.log("Institution Id: ", this.createAssignment.institution);

    let periodval =
      "faculty-app-get-course-period?institution=" +
      this.createAssignment.institution +
      "&course=" +
      this.createAssignment.course +
      "&faculty_login_key=" +
      this.faculty_login_key1.faculty_login_key;
    console.log("get course-", periodval);

    this.authFacService.getData(periodval).subscribe(
      data => {
        console.log(data);
        let result = JSON.parse(data._body);
        this.responseData = result;

        console.log("response courseperiod: ", this.responseData.coursePeriod);
        if (this.responseData.coursePeriod) {
          this.loading.dismiss();
          for (let key in this.responseData.coursePeriod) {
            this.coursePeriod.push({
              key: key,
              value: this.responseData.coursePeriod[key]
            });
          }
          console.log("coursePeriod:", this.coursePeriod);

          // this.coursePeriod = this.responseData.coursePeriod;
        } else {
        }
      },
      err => {
        if (err.status === 500) {
          alert("Something went wrong!! Login Again!!");
          this.navCtrl.setRoot("FacAssignmentPage");
          // redirect to the login route
          // or show a modal
        }
      }
    );
  }

  getSubject() {
    // this.presentLoadingDefault();
    console.log("getSubject method");
    console.log("Period Id: ", this.createAssignment.period);
    this.subject_details = [];

    localStorage.setItem(
      "getStudents.period",
      JSON.stringify(this.createAssignment.period)
    );
    console.log(this.createAssignment.period);

    // this.createAssignment.institution = localStorage.getItem("institution_id");
    // console.log("Institution Id: ", this.createAssignment.institution);

    let subjectval =
      "faculty-app-course-subject-details?institution=" +
      this.createAssignment.institution +
      "&course=" +
      this.createAssignment.course +
      "&period=" +
      this.createAssignment.period +
      "&faculty_login_key=" +
      this.faculty_login_key1.faculty_login_key;
    console.log("get course-", subjectval);

    this.authFacService.getData(subjectval).subscribe(
      data => {
        console.log(data);
        let result = JSON.parse(data._body);
        this.responseData = result;
        if (this.responseData.subject_details) {
          this.loading.dismiss();
        }

        console.log(this.responseData);

        if (this.responseData) {
          for (let key in this.responseData) {
            console.log(this.responseData[key], " this.responseData[key]");
            if (this.responseData[key] == "EVS") {
              console.log(this.responseData[key], " this.responseData[123]");

              this.subject_details.push({
                key: key,
                value: this.responseData[key]
              });
            }

            // this.subject_details = this.responseData.subject_details;
          }
        } else {
        }
      },
      err => {
        if (err.status === 500) {
          alert("Something went wrong!! Login Again!!");
          this.navCtrl.setRoot("FacAssignmentPage");
          this.loading.dismiss();
          // redirect to the login route
          // or show a modal
        }
      }
    );
  }

  getBatch() {
    this.presentLoadingDefault();
    console.log("getBatch method");
    console.log(this.createAssignment.subject);
    this.section_details = [];

    localStorage.setItem(
      "createAssignment.subject",
      JSON.stringify(this.createAssignment.subject)
    );
    console.log(this.createAssignment.subject);

    console.log("Course Id: ", this.createAssignment.course);

    console.log("period Id: ", this.createAssignment.period);

    let subjectval =
      "faculty-app-subject-section-details?institution=" +
      this.createAssignment.institution +
      "&course=" +
      this.createAssignment.course +
      "&period=" +
      this.createAssignment.period +
      "&subject=" +
      this.createAssignment.subject +
      "&faculty_login_key=" +
      this.faculty_login_key1.faculty_login_key;

    console.log("get course-", subjectval);

    this.authFacService.getData(subjectval).subscribe(
      data => {
        console.log(data);
        let result = JSON.parse(data._body);
        this.responseData = result;
        console.log(this.responseData);
        console.log(this.responseData.section_details);

        if (this.responseData.section_details) {
          this.loading.dismiss();
          for (let key in this.responseData.section_details) {
            this.section_details.push({
              key: key,
              value: this.responseData.section_details[key]
            });
          }
          this.hideMe = true;
          // this.startDate();
          // this.section_details = this.responseData.section_details;
        } else {
        }
      },
      err => {
        if (err.status === 500) {
          alert("Something went wrong!! Login Again!!");
          this.navCtrl.setRoot("FacAssignmentPage");
          this.loading.dismiss();
          // redirect to the login route
          // or show a modal
        }
      }
    );
  }

  startDate() {
    console.log("student date: ", this.createAssignment.startDate);

    // this.saveDate = localStorage.getItem("savedate");

    console.log("tday: ", this.tday);
    let dateData1 = this.tday.split("-");
    let year1 = dateData1[0];
    let month1 = dateData1[1];
    let day1 = dateData1[2];
    this.createAssignment.startDate = day1 + "/" + month1 + "/" + year1;

    console.log("Start date : ", this.createAssignment.startDate);
  }

  getStartDate() {
    let dateData1 = this.createAssignment.startDate.split("-");
    let year1 = dateData1[0];
    let month1 = dateData1[1];
    let day1 = dateData1[2];
    this.createAssignment.startDate = day1 + "/" + month1 + "/" + year1;
  }

  getExpirydate() {
    console.log("tday: ", this.createAssignment.expiryDate);
    let dateData1 = this.createAssignment.expiryDate.split("-");
    let year1 = dateData1[0];
    let month1 = dateData1[1];
    let day1 = dateData1[2];
    this.createAssignment.expiryDate = day1 + "/" + month1 + "/" + year1;
  }

  createAssignments() {
    this.presentLoadingDefault();
    this.createAssignment.description = this.createAssignment.description
      .replace(/"/g, "'")
      .replace(/'>/g, "'/>");
    // .replace(/.$/, "/'");
    //   .replace(/ \/>/g, "/>");
    console.log(this.createAssignment.description);
    // alert(this.createAssignment.description);

    this.createAssignment.clientkey = localStorage.getItem("clientkey");
    console.log("Create Assignment: ", this.createAssignment);

    this.authFacService
      .postData(this.createAssignment, "faculty-app-assignment-search-students")
      .subscribe(
        data => {
          console.log(data);
          let result = JSON.parse(data._body);
          this.responseData = result;
          console.log("response: ", this.responseData);
          // this.disabled = false;
          if (this.responseData) {
            this.loading.dismiss();
            console.log(this.responseData);
            // localStorage.setItem(
            //   "AssignmentStudentsDetails",
            //   JSON.stringify(this.responseData.student_details)
            // );
            // alert("description:" + this.createAssignment.description);

            this.navCtrl.push("FacAssignmentStudListPage", {
              AssignmentStudentsDetails: this.responseData,
              createAssignment: this.createAssignment
            });
          } else {
            this.loading.dismiss();
            alert("Something went Wrong!! Please Try again");
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
          } else if (
            err.status === 500 ||
            err.status == 500 ||
            err.status == "500"
          ) {
            this.loading.dismiss();
            alert("Something went Wrong!! Please Try again");
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
            // redirect to the login route
            // or show a modal
          } else if (
            err.status === 415 ||
            err.status == 415 ||
            err.status == "415"
          ) {
            this.loading.dismiss();
            alert("Invalid Image Uploaded!! Try Valid Image");
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
            // redirect to the login route
            // or show a modal
          } else {
            this.loading.dismiss();
            console.log(JSON.stringify(err));
            alert("Something went Wrong!! Please Try again");
          }
        }
      );
  }
  reset() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
}
