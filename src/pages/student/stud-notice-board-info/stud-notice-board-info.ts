import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the StudNoticeBoardInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-stud-notice-board-info",
  templateUrl: "stud-notice-board-info.html"
})
export class StudNoticeBoardInfoPage {
  noticeBoardInfoTitle: any;
  noticeBoardInfo: any;
  description: any;
  description_info: any;

  showControls: boolean = true;
  scale: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getPageTitle();
  }
  back() {
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad NoticeBoardInfoPage");
  }

  getPageTitle() {
    this.noticeBoardInfoTitle = localStorage.getItem("PageTitle");
    console.log("noticeBoardInfoTitle: ", this.noticeBoardInfoTitle);

    this.noticeBoardInfo = JSON.parse(localStorage.getItem("NoticeDetails"));
    console.log("Info NoticeBoard: ", this.noticeBoardInfo);

    console.log("Description: ", this.noticeBoardInfo.description);
    this.description = this.noticeBoardInfo.description;
  }

  afterZoomIn(event) {
    console.log("After ZoomIn Event: ", event);
  }

  afterZoomOut(event) {
    console.log("After ZoomOut Event: ", event);
  }
}
