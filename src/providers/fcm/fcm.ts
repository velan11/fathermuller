import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Firebase } from "@ionic-native/firebase";
import { Platform } from "ionic-angular";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

/*
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FcmProvider {
  data: any;
  responseData: any;
  // device_token: any;
  device_token = { user_token: "" };

  constructor(
    public http: HttpClient,
    public firebaseNative: Firebase,
    private platform: Platform,
    public authService: AuthServiceProvider
  ) {
    console.log("Hello FcmProvider Provider");
  }
  async getToken() {
    let token;

    if (this.platform.is("android")) {
      token = await this.firebaseNative.getToken();
      this.device_token.user_token = token;

      console.log(token);
      // alert(token);
      // alert("token: " + this.device_token.user_token);

      let device_info = "user-token";

      this.authService.postData(device_info, this.device_token).subscribe(
        data => {
          console.log(data);
          this.data = JSON.parse(data._body);
          this.responseData = this.data;
          console.log(this.responseData.data);
          if (this.responseData) {
            console.log("Data: ", this.responseData.data);

            this.device_token = this.responseData.data;
            console.log(this.device_token);
          } else {
            // alert("Invalid User");

            console.log("Invalid User");
          }
        },
        (err: any) => {
          if (err.status === 0) {
            alert("Network Connection Error. Please try Again.");
          }
        }
      );
    }

    if (this.platform.is("ios")) {
      token = await this.firebaseNative.getToken();
      await this.firebaseNative.grantPermission();

      this.device_token.user_token = token;

      console.log(token);
      // alert(token);
      // alert("token: " + this.device_token.user_token);

      let device_info = "user-token";

      this.authService.postData(device_info, this.device_token).subscribe(
        data => {
          console.log(data);
          this.data = JSON.parse(data._body);
          this.responseData = this.data;
          console.log(this.responseData.data);
          if (this.responseData) {
            console.log("Data: ", this.responseData.data);

            this.device_token = this.responseData.data;
            console.log(this.device_token);
          } else {
            // alert("Invalid User");

            console.log("Invalid User");
          }
        },
        (err: any) => {
          if (err.status === 0) {
            alert("Network Connection Error. Please try Again.");
          }
        }
      );
    }

    // return this.saveTokenToFirestore(token);
  }

  listenToNotifications() {
    return this.firebaseNative.onNotificationOpen();
  }
}
