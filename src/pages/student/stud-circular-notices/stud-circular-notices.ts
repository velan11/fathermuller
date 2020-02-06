import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  ToastController
} from "ionic-angular";
import { AuthServiceProvider } from "../../../providers/auth-service/auth-service";
import { NativeStorage } from "@ionic-native/native-storage/ngx";
import { File } from "@ionic-native/file";
import { PhotoViewer } from "@ionic-native/photo-viewer";

/**
 * Generated class for the StudCircularNoticesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-stud-circular-notices",
  templateUrl: "stud-circular-notices.html"
})
export class StudCircularNoticesPage {
  data: any;
  responseData: any;
  user_id: any;
  student_info: any;

  client_id: any;
  student_id: any;

  PageTitle: any;
  noticeBoard: any;
  noticeBoardInfo: any = [];
  menu_id: any;
  noData = false;
  noDataValue: any;
  flag = false;
  exam_count = 0;
  news_count = 0;
  notice_count = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public loadingCtrl: LoadingController,
    public storage: NativeStorage,
    public toastCtrl: ToastController,
    private photoViewer: PhotoViewer,
    private file: File
  ) {
    this.getNoticeBoardInfo();
  }

  viewPhoto() {
    let imageName = "notice.jpg";
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
    console.log("ionViewDidLoad CircularNoticesPage");
    this.presentLoadingCustom();
  }

  presentLoadingCustom() {
    const loading = this.loadingCtrl.create({
      content: "Loading...",
      duration: 1000
    });

    loading.onDidDismiss(() => {
      console.log("Dismissed loading");
    });

    loading.present();
  }

  getNoticeBoardInfo() {
    this.menu_id = JSON.parse(localStorage.getItem("menu_id"));
    console.log("menu_id", this.menu_id);

    let getnoticeBoardUrl = "notice-board-details";
    console.log("Student Info-", getnoticeBoardUrl);

    this.authService.getStudentData(getnoticeBoardUrl).subscribe(
      data => {
        console.log(data);
        this.data = JSON.parse(data._body);
        this.responseData = this.data;

        if (this.responseData.data.length != 0) {
          console.log("Data: ", this.responseData.data);
          // console.log("Data: ", this.responseData.data[0].noticeList[0].type);

          this.noticeBoard = this.responseData.data;
          console.log("length: ", this.noticeBoard.length);

          for (let i = 0; i < this.noticeBoard.length; i++) {
            // console.log("Data before: ",this.responseData.data[i].noticeList[0].type);

            if (this.menu_id == "5" || this.menu_id == 5) {
              console.log(
                "Data: ",
                this.responseData.data[i].noticeList[0].type
              );

              if (
                this.responseData.data[i].noticeList[0].type == "EXAM_SCHEDULE"
              ) {
                this.flag = true;
                localStorage.setItem("exam_count_no", JSON.stringify(0));
                console.log(
                  "Data: ",
                  this.responseData.data[i].noticeList[0].type
                );
                this.PageTitle = "Exam Schedule";
                this.noticeBoardInfo.push(this.responseData.data[i]);
                this.exam_count++;
                localStorage.setItem(
                  "noticeBoardInfo",
                  JSON.stringify(this.noticeBoardInfo)
                );
                localStorage.setItem("PageTitle", this.PageTitle);
                localStorage.setItem(
                  "exam_count",
                  JSON.stringify(this.exam_count)
                );
                this.storage
                  .setItem("exam_schedule", JSON.stringify(this.exam_count))
                  .then(() => {
                    console.log("exam_schedule Updated");
                    console.log(this.exam_count);

                    // this.toastCtrl
                    //   .create({
                    //     message: "exam_schedule Updated",
                    //     duration: 1000
                    //   })
                    //   .present();
                  });
              } else {
                if (this.flag != true) {
                  this.flag = false;
                }
                console.log("no exam schedule :", i);
                this.PageTitle = "Exam Schedule";
              }
            } else if (this.menu_id == "3" || this.menu_id == 3) {
              if (
                this.responseData.data[i].noticeList[0].type == "NEWS_EVENTS" &&
                this.responseData.data[i].noticeList.length != 0
              ) {
                this.flag = true;
                console.log(
                  "Data: ",
                  this.responseData.data[i].noticeList[0].type
                );
                this.PageTitle = "News and Events";
                this.noticeBoardInfo.push(this.responseData.data[i]);
                this.news_count++;
                localStorage.setItem(
                  "noticeBoardInfo",
                  JSON.stringify(this.noticeBoardInfo)
                );
                localStorage.setItem("PageTitle", this.PageTitle);
                localStorage.setItem(
                  "news_count",
                  JSON.stringify(this.news_count)
                );
              } else {
                if (this.flag != true) {
                  this.flag = false;
                  // this.noData = true;
                  // this.noDataValue = "No Items to display ";
                }
                this.PageTitle = "News and Events";
              }
            } else if (this.menu_id == "4" || this.menu_id == 4) {
              // for(let j=0; j<this.noticeBoard.length; j++){
              console.log(
                "Data before : ",
                i,
                ": ",
                this.responseData.data[i].noticeList[0].type
              );
              if (
                this.responseData.data[i].noticeList[0].type ==
                  "NOTICE_BOARD" &&
                this.responseData.data[i].noticeList.length != 0
              ) {
                this.flag = true;
                console.log(
                  "Data after: ",
                  this.responseData.data[i].noticeList[0].type
                );
                this.PageTitle = "Circular and Notices";
                this.noticeBoardInfo.push(this.responseData.data[i]);
                console.log("noticeBoardInfo", this.noticeBoardInfo);
                localStorage.setItem(
                  "noticeBoardInfo",
                  JSON.stringify(this.noticeBoardInfo)
                );
                localStorage.setItem("PageTitle", this.PageTitle);
                this.notice_count++;
              } else {
                if (this.flag != true) {
                  this.flag = false;
                }
                this.PageTitle = "Circular and Notices";
                // this.noData = true;
                // this.noDataValue = "No Items to display ";
              }
            }
          }
        } else {
          if (this.menu_id == "5" || this.menu_id == 5) {
            this.PageTitle = "Exam Schedule";
          } else if (this.menu_id == "3" || this.menu_id == 3) {
            this.PageTitle = "News and Events";
          } else if (this.menu_id == "4" || this.menu_id == 4) {
            this.PageTitle = "Circular and Notices";
          }
          this.noData = true;
          this.noDataValue = "No Items to display ";

          console.log("Invalid User");
        }
        if (this.flag != true) {
          this.noData = true;
          this.noDataValue = "No Items to display ";
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
          this.navCtrl.setRoot("LandingPage");
          // redirect to the login route
          // or show a modal
        }
      }
    );
  }
  displayNoticeInfo(noticeInfo) {
    console.log("displayNoticeInfo: ", noticeInfo);
    localStorage.setItem("NoticeDetails", JSON.stringify(noticeInfo));
    this.navCtrl.push("StudNoticeBoardInfoPage");
  }
  back() {
    this.navCtrl.pop();
  }
}
