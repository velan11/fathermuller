import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { File } from "@ionic-native/file";
import { PhotoViewer } from "@ionic-native/photo-viewer";

/**
 * Generated class for the FacNoticesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-fac-notices",
  templateUrl: "fac-notices.html"
})
export class FacNoticesPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private photoViewer: PhotoViewer,
    private file: File
  ) {}
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
    console.log("ionViewDidLoad FacNoticesPage");
  }

  back() {
    this.navCtrl.setRoot("FacHomePage");
  }
}
