import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { AuthServiceProvider } from "../../../providers/auth-service/auth-service";
// import * as jsPDF from "jspdf";
// import * as html2canvas from "html2canvas";
// import { File } from "@ionic-native/file";
// import { FileOpener } from "@ionic-native/file-opener/ngx";

/**
 * Generated class for the StudProgressReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-stud-progress-report",
  templateUrl: "stud-progress-report.html"
})
export class StudProgressReportPage {
  data: any;
  responseData: any;
  exam_title: any = [];
  mark_details: any = [];
  marks_report: any;
  noData = false;
  noDataValue: any;
  mark_details_key = [];

  mark_data = [];
  mark_details_data = [];
  noMarks: any;
  dataloading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public loadingCtrl: LoadingController
  ) {
    this.getMarksInfo();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MarksPage");
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

  getMarksInfo() {
    let getMarksUrl = "student-marks";
    console.log("Marks Info-", getMarksUrl);

    this.authService.getStudentData(getMarksUrl).subscribe(
      data => {
        console.log(data);
        this.data = JSON.parse(data._body);
        this.responseData = this.data.data;
        console.log("response data", this.responseData);
        // this.toggleSection(0);
        console.log(
          "this.responseData.mark_details:",
          this.responseData.mark_details
        );
        if (this.responseData.length > 0) {
          this.noMarks = true;
          console.log("Marks Data: ", this.responseData);
          // for (let key in this.responseData[0].mark_details) {
          //   console.log("key value: ", key);
          //   console.log(
          //     "Key Value Marks Details: ",
          //     this.responseData[0].mark_details[key][0].subject
          //   );
          //   this.mark_details_key.push(key);
          // }
          // console.log("key value details: ", this.mark_details_key);

          for (let i = 0; i < this.responseData.length; i++) {
            console.log("Exam Title: ", this.responseData[i].exam_title);
            this.exam_title.push(this.responseData[i].exam_title);
            console.log("Exam Details: ", this.responseData[i].mark_details);
            // let key = this.mark_details_key[i];

            for (let key in this.responseData[i].mark_details) {
              // let j;
              console.log("key value: ", key);
              console.log(
                "Key Value Marks Details: ",
                this.responseData[i].mark_details[key]
              );
              this.mark_details_data.push(
                this.responseData[i].mark_details[key]
              );
              console.log("marks details for loop:", this.mark_details_data);
            }
            this.mark_data.push({
              exam_title: this.responseData[i].exam_title,
              mark_details: this.mark_details_data
            });
            this.mark_details_data = [];

            // for (let j = 0; j < this.responseData[i].mark_details.length; j++) {
            //   console.log(
            //     "Exam Details marks: ",
            //     this.responseData[i].this.mark_details_key[j].subject
            //   );
            //   this.mark_details.push(this.responseData[i].mark_details[j]);
            // }
          }

          console.log("marks_details_value_end: ", this.mark_details);
          console.log("marks_data: ", this.mark_data);
          this.toggleSection(0);
        } else {
          this.noMarks = false;
          this.noData = true;
          this.noDataValue = "No Items to Display";
          console.log("No Items to Display");
        }
      },
      (err: any) => {
        if (err.status === 401) {
          console.log("error log list: ", err.message);
        }
        if (err.status === 400) {
          console.log("Bad Request: ", err);
          alert("Bad Request");
        }
        if (err.status === 0) {
          alert("Network Connection Error. Please try Again.");
          this.navCtrl.setRoot("StudHomePage");
        }
      }
    );
  }
  back() {
    this.navCtrl.pop();
  }

  /*-------- toggle mark display---*/
  toggleSection(i) {
    console.log("outside i=", i);

    if (i == 0) {
      console.log("inside i=", i);
      this.mark_data[i].open = this.mark_data[i].open;
    }
    this.mark_data[i].open = !this.mark_data[i].open;
  }

  toggleItem(i, j) {
    console.log();
    if (i == 0) {
      console.log("inside toggleItem i=", i);
      this.mark_data[i].mark_details[j].open = this.mark_data[i].mark_details[
        j
      ].open;
    }
    this.mark_data[i].mark_details[j].open = !this.mark_data[i].mark_details[j]
      .open;
  }
  /*-------- end toggle mark display---*/

  /*---------Loading Method-----------*/
  DataLoading() {
    this.dataloading = this.loadingCtrl.create({
      content: "Loading..."
    });

    this.dataloading.present();
  }
  /*---------end Loading Method-----------*/

  /*---------Save Marks as pdf --------------- */

  // generatePdf() {
  //   let loading = this.loadingCtrl.create({
  //     content: "Creating PDF File",
  //     spinner: "dots"
  //   });
  //   loading.present();
  //   const div = document.getElementById("Html2Pdf");
  //   var imgWidth = 210;
  //   var pageHeight = 295;
  //   var imgHeight = (div.clientHeight * imgWidth) / div.clientWidth;
  //   var heightLeft = imgHeight;
  //   // div.clientHeight
  //   // div.clientWidth
  //   // var options = {
  //   // pagesplit: true
  //   // };
  //   const options = {
  //     background: "white",
  //     height: div.clientHeight,
  //     width: div.clientWidth,
  //     pagesplit: true
  //   };
  //   console.log(div.clientHeight, "hight");
  //   console.log(div.clientWidth, "width");
  //   html2canvas(div, options).then(canvas => {
  //     //Initialize JSPDF
  //     var doc = new jsPDF("p", "mm", "a4");
  //     //Converting canvas to Image
  //     let imgData = canvas.toDataURL("image/PNG");
  //     //Add image Canvas to PDF
  //     // doc.addImage(imgData, 'PNG', 10,10, );
  //     // doc.addPage();
  //     var position = 0;
  //     doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  //     heightLeft -= pageHeight;
  //     console.log(heightLeft, "hieght left");
  //     while (heightLeft >= 0) {
  //       position = heightLeft - imgHeight;
  //       console.log(position, "postion");
  //       doc.addPage();
  //       doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  //       heightLeft -= pageHeight;
  //     }
  //     let pdfOutput = doc.output();
  //     // using ArrayBuffer will allow you to put image inside PDF
  //     let buffer = new ArrayBuffer(pdfOutput.length);
  //     let array = new Uint8Array(buffer);
  //     // let array = new Array(buffer);
  //     console.log(array, "pdfOutput");
  //     for (var i = 0; i < pdfOutput.length; i++) {
  //       array[i] = pdfOutput.charCodeAt(i);
  //     }

  //     //This is where the PDF file will stored , you can change it as you like
  //     // for more information please visit https://ionicframework.com/docs/native/file/
  //     const directory = this.file.externalApplicationStorageDirectory;
  //     //Name of pdf
  //     //Name of pdf
  //     const fileName = "ProgressReport.pdf";
  //     //Writing File to Device
  //     this.file
  //       .writeFile(directory, fileName, buffer, { replace: true })
  //       .then(success => {
  //         loading.dismiss();
  //         alert("File created Succesfully");
  //         this.fileOpener
  //           .open(success.nativeURL, "application/pdf")
  //           .then(success => {
  //             console.log("File Opened Succesfully" + JSON.stringify(success));
  //           })
  //           .catch(error =>
  //             console.log("Cannot Open File " + JSON.stringify(error))
  //           );
  //       })
  //       .catch(error => alert("Cannot Create File "));
  //   });
  // }

  /*--------- end Save Marks as pdf --------------- */
}
