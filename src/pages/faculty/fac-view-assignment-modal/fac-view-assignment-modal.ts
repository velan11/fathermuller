import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";

/**
 * Generated class for the FacViewAssignmentModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-fac-view-assignment-modal",
  templateUrl: "fac-view-assignment-modal.html"
})
export class FacViewAssignmentModalPage {
  assDesc: any;
  showReadList: any = false;
  showSentList: any = false;
  showDescList: any = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.assDesc = JSON.parse(localStorage.getItem("FacAssignmt"));
    console.log(this.assDesc.description);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad FacViewAssignmentModalPage");
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  toggleReadList() {
    console.log(this.showReadList);
    if (this.showReadList == true) {
      this.showReadList = false;
    } else if (this.showReadList == false) {
      this.showReadList = true;
    }
  }
  toggleSentList() {
    if (this.showSentList == true) {
      this.showSentList = false;
    } else if (this.showSentList == false) {
      this.showSentList = true;
    }
  }
  toggleDescList() {
    if (this.showDescList == true) {
      this.showDescList = false;
    } else if (this.showDescList == false) {
      this.showDescList = true;
    }
  }
}
