import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Slides } from "ionic-angular";
import { AuthServiceProvider } from "../../../providers/auth-service/auth-service";
import { PhotoViewer } from "@ionic-native/photo-viewer";
import { File } from "@ionic-native/file";

/**
 * Generated class for the StudTimetablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-stud-timetable",
  templateUrl: "stud-timetable.html"
})
export class StudTimetablePage {
  @ViewChild(Slides) slides: Slides;
  data;
  responseData;
  timeTableInfo: any;
  Monday_Data: any;
  Tuesdy_data: any;
  Wensdy_data: any;
  Thrsdy_data: any;
  Frisdy_data: any;
  Satsdy_data: any;
  Sundy_data: any;
  dumm;
  student_info;
  currentday: any;
  reposDat;
  indexSlideno: any;
  constructor(
    public authService: AuthServiceProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    private photoViewer: PhotoViewer,
    private file: File
  ) {
    let currentDate = new Date();

    let weekdays = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday"
    ];
    this.currentday = weekdays[currentDate.getDay()];
    if (this.currentday == "monday") {
      this.indexSlideno = 0;
    } else if (this.currentday == "tuesday") {
      this.indexSlideno = 1;
    } else if (this.currentday == "wednesday") {
      this.indexSlideno = 2;
    } else if (this.currentday == "thursday") {
      this.indexSlideno = 3;
    } else if (this.currentday == "friday") {
      this.indexSlideno = 4;
    } else if (this.currentday == "saturday") {
      this.indexSlideno = 5;
    } else if (this.currentday == "sunday") {
      this.indexSlideno = 6;
    }
    console.log("indexslide:", this.indexSlideno);
  }
  // ionViewDidEnter() {}
  viewPhoto() {
    let imageName = "TimeSchedule .jpg";
    const ROOT_DIRECTORY = "file:///sdcard//";
    const downloadFolderName = "tempDownloadFolder";

    //Create a folder in memory location
    this.file
      .createDir(ROOT_DIRECTORY, downloadFolderName, true)
      .then(entries => {
        //Copy our asset/img/freaky_jolly_logo.jpg to folder we created
        this.file
          .copyFile(
            this.file.applicationDirectory + "www/assets/images/",
            imageName,
            ROOT_DIRECTORY + downloadFolderName + "//",
            imageName
          )
          .then(entries => {
            this.photoViewer.show(
              ROOT_DIRECTORY + downloadFolderName + "/" + imageName,
              "Do you want to Share Notice",
              { share: true }
            );
          })
          .catch(error => {
            alert("1 error " + JSON.stringify(error));
          });
      })
      .catch(error => {
        alert("2 error" + JSON.stringify(error));
      });
  }
  ionViewDidLoad() {
    this.getAttdc_info();

    console.log("ionViewDidLoad TimeTablePage");
  }
  prevSlide() {
    this.slides.slideTo(this.slides.getActiveIndex() - 1, 500);
  }
  nextSlide() {
    this.slides.slideTo(this.slides.getActiveIndex() + 1, 500);
  }
  getAttdc_info() {
    let getStudentsUrl = "course-time-table";
    console.log("Student Info-", getStudentsUrl);
    this.authService.getStudentData(getStudentsUrl).subscribe(
      data => {
        console.log("data", data);
        this.data = JSON.parse(data._body);
        this.responseData = this.data;

        console.log("timetable: ", this.responseData);

        this.timeTableInfo = this.responseData;

        this.Monday_Data = this.responseData.data[0].item;
        this.Tuesdy_data = this.responseData.data[1].item;
        this.Wensdy_data = this.responseData.data[2].item;
        this.Thrsdy_data = this.responseData.data[3].item;
        this.Frisdy_data = this.responseData.data[4].item;
        this.Satsdy_data = this.responseData.data[5].item;
        this.Sundy_data = this.responseData.data[6].item;
        console.log("dumm", this.dumm);
        for (let y = 0; y < this.responseData.data.length; y++) {}

        //  this.Tuesdy_data = this.responseData.data
        console.log("response", this.Monday_Data);
        this.reposDat = this.responseData.data;
        for (let j = 0; j <= 5; j++) {
          console.log("repos data", this.reposDat[0].item[j].from_time);
          //  this.wholedata.push(
          //    {name:this.reposDat[0].item[j]});

          // console.log('data',this.wholedata);
        }

        for (let i = 0; i < this.reposDat.length; i++) {
          console.log("Date ", this.reposDat[i].data);
        }
        if (this.responseData) {
          this.student_info = this.responseData.data;
        } else {
          // alert("Invalid User");

          console.log("Invalid User");
        }
      },
      (err: any) => {
        if (err.status === 401) {
          console.log("error log list: ", err.message);

          // alert("Unauthorised User");
          // redirect to the login route
          // or show a modal
        }
        if (err.status === 400) {
          console.log("Bad Request: ", err);
          alert("Bad Request");

          // alert("Unauthorised User");
          // redirect to the login route
          // or show a modal
        }
        if (err.status === 0) {
          alert("Network Connection Error. Please try Again.");
          // localStorage.clear();
          this.navCtrl.setRoot("StudHomePage");
          // redirect to the login route
          // or show a modal
        }
      }
    );
  }
  back() {
    this.navCtrl.pop();
  }
}
