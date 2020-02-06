import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';


/**
 * Generated class for the FacProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fac-profile',
  templateUrl: 'fac-profile.html',
})
export class FacProfilePage {
  faculty_login_key1: any;
  user_name: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getUsername();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacProfilePage');
  }

  back() {
    this.navCtrl.pop();
  }

  getUsername() {
    this.faculty_login_key1 = JSON.parse(localStorage.getItem("facultyData"));
    this.user_name = this.faculty_login_key1.user_name;
    console.log("username", this.user_name);
  }

}
