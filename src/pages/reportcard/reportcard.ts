import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PhotoViewer } from "@ionic-native/photo-viewer";
import { File } from "@ionic-native/file";

/**
 * Generated class for the ReportcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-reportcard",
  templateUrl: "reportcard.html"
})
export class ReportcardPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private photoViewer: PhotoViewer,
    private file: File
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ReportcardPage");
  }
  back() {
    this.navCtrl.pop();
  }
  viewPhoto() {
    let imageName = "amithaaa.jpeg";
    const ROOT_DIRECTORY = "file:///sdcard//";
    const downloadFolderName = "tempDownloadFolder";

    //Create a folder in memory location
    this.file
      .createDir(ROOT_DIRECTORY, downloadFolderName, true)
      .then(entries => {
        //Copy our asset/img/freaky_jolly_logo.jpg to folder we created
        this.file
          .copyFile(
            this.file.applicationDirectory + "www/assets/imgs/",
            imageName,
            ROOT_DIRECTORY + downloadFolderName + "//",
            imageName
          )
          .then(entries => {
            this.photoViewer.show(
              ROOT_DIRECTORY + downloadFolderName + "/" + imageName,
              "Do you want to Share ",
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
}
