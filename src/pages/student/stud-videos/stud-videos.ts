import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { AuthServiceProvider } from "../../../providers/auth-service/auth-service";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl
} from "@angular/platform-browser";

/**
 * Generated class for the StudVideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-stud-videos",
  templateUrl: "stud-videos.html"
})
export class StudVideosPage {
  data: any;
  vedioUrl: any;
  vedioUrl1: any;
  iframeURL: any;
  rethik: any;
  trustedDashboardUrl: SafeUrl;
  vedioUrlArray: any;
  vinay: any;
  NoInternet: any;
  noData: any;
  noDataValue: any;
  constructor(
    public iab: InAppBrowser,
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: AuthServiceProvider,
    private sanitizer: DomSanitizer,
    public loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    this.getVediosInfo();
    console.log("ionViewDidLoad VideosPage");
  }
  openUrl() {
    window.open("https://www.youtube.com/embed/kEU9q1LOcI0", "_system");
  }

  getVediosInfo() {
    let loading = this.loadingCtrl.create({
      content: "Loading Please Wait..."
    });

    loading.present();

    this.service.getVedios().subscribe(
      data => {
        loading.dismiss();
        console.log(data);
        this.data = JSON.parse(data._body);
        if (this.data.data.length == 0) {
          this.noData = true;
          this.noDataValue = "No Items to display ";
        } else {
          this.iframeURL = this.data.data;
          console.log(this.iframeURL);

          this.vedioUrlArray = this.data.data[0].videoList;
          console.log(this.vedioUrlArray);
        }
      },
      err => {
        loading.dismiss();
        console.log(err);
        this.NoInternet = true;
      }
    );
  }
  back() {
    this.navCtrl.pop();
  }
}
