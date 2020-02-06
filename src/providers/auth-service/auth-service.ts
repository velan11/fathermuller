// import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

//local server

// let apilogUrl = "http://192.168.1.40:8888/api/v1/student/auth/";
// let apiurl = "http://192.168.1.40:8888/api/v1/student/";

let apilogUrl = "https://devstageapi.pacifyca.com/v1/auth/";
let apiurl = "https://devstageapi.pacifyca.com/v1/";
///sdaf
let api_key = "95yV0U155lrb77e9rgXl8u2pNuf27989";

//Live Server

// let apilogUrl = "https://api.pacifyca.com/v1/auth/";
// let apiurl = "https://api.pacifyca.com/v1/";

// let api_key = "WWmaoJGAAa54p984tAp2KekoXZ5FdthI";

//--------------------------------------
let clientKey = "MJES"; //ALOYSIUS

@Injectable()
export class AuthServiceProvider {
  // constructor(public http: HttpClient) {
  //   console.log('Hello AuthServiceProvider Provider');
  // }
  public user_id: any;
  public client_id: any;
  public student_id: any;

  private handleError(err) {
    let errMessage: string;
    if (err instanceof Response) {
      let body = err.json() || "";
      let error = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ""} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }
    return Observable.throw(errMessage);
  }

  constructor(public http: Http) {
    console.log("Hello AuthService Provider");
    this.Idsload();
    this.user_id = JSON.parse(localStorage.getItem("user_id"));
    this.client_id = JSON.parse(localStorage.getItem("client_id"));
    this.student_id = JSON.parse(localStorage.getItem("student_id"));
  }
  Idsload() {
    this.user_id = JSON.parse(localStorage.getItem("user_id"));
    this.client_id = JSON.parse(localStorage.getItem("client_id"));
    this.student_id = JSON.parse(localStorage.getItem("student_id"));
    console.log("user_id:", this.user_id);
    console.log("client_id:", this.client_id);
    console.log("student_id:", this.student_id);
  }

  postlogData(credentials, type): Observable<any> {
    // return new Promise((resolve, reject) => {
    let headers = new Headers();
    // headers.append('Access-Control-Allow-Headers', 'Content-Type');
    // headers.append('Access-Control-Allow-Methods', 'GET');
    // headers.append('Access-Control-Allow-Origin', '*');
    headers.append("API-KEY", api_key);

    // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append("Content-Type", "application/json");

    return this.http.post(apilogUrl + type, JSON.stringify(credentials), {
      headers: headers
    });
  }

  // ----for parent login method used for to reset password---
  public postloginData(urlExtn, apiVal): Observable<any> {
    let api_urlToken = apiurl + apiVal;
    let headers = new Headers();

    console.log("api url:", apiVal);
    console.log("erlExtn: ", urlExtn);

    let token = JSON.parse(localStorage.getItem("token"));
    let token_type = JSON.parse(localStorage.getItem("token_type"));

    token = token_type + " " + token;
    console.log("tokenVal: ", token);

    headers.append("API-KEY", api_key);
    headers.append("Authorization", token);
    headers.append("Cache-Control", "no-cache");
    headers.append("Content-Type", "application/json");
    headers.append(
      "Content-Type",
      "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
    );

    return this.http.post(api_urlToken, urlExtn, {
      headers: headers
    });
  }

  //-------method to send the device token---------

  public postData(urlExtn, device_token): Observable<any> {
    let api_urlToken = apiurl + urlExtn;
    let headers = new Headers();

    console.log("fcm token:", device_token);

    let token = JSON.parse(localStorage.getItem("token"));
    let token_type = JSON.parse(localStorage.getItem("token_type"));

    token = token_type + " " + token;

    headers.append("API-KEY", api_key);
    headers.append("Authorization", token);
    headers.append("Cache-Control", "no-cache");
    headers.append("Content-Type", "application/json");
    headers.append(
      "Content-Type",
      "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
    );

    return this.http.post(api_urlToken, JSON.stringify(device_token), {
      headers: headers
    });
  }

  getData(type): Observable<any> {
    console.log("type ", type);
    // console.log("key Value",keyval);
    let headers = new Headers();

    let token = JSON.parse(localStorage.getItem("token"));
    let token_type = JSON.parse(localStorage.getItem("token_type"));

    token = token_type + " " + token;

    console.log("authService: token_type: ", token_type);
    console.log("authService: token: ", token);

    headers.append("API-KEY", api_key);
    headers.append("Content-Type", "application/json");
    headers.append("Cache-Control", "no-cache");
    headers.append(
      "Content-Type",
      "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
    );
    headers.append("Authorization", token);
    // headers.append("client_unique_key", "ALOYSIUS"); //live
    headers.append("client_unique_key", clientKey);

    headers.append("client_id", this.client_id);

    console.log("getData: ", headers);
    let apiUrlAdd = apiurl + type; // return this.http.get(apiUrl+ 'getState');

    //       return new Promise(resolve => {
    //          this.http.get(apiurl + type , { headers:headers})
    //          .subscribe(data => {
    //            resolve(data.json());
    //          });
    //        });

    return this.http.get(apiUrlAdd, { headers: headers });
  }

  getVedios(): Observable<any> {
    this.Idsload();
    let headers = new Headers();
    let token = JSON.parse(localStorage.getItem("token"));
    let token_type = JSON.parse(localStorage.getItem("token_type"));

    token = token_type + " " + token;
    headers.append("API-KEY", api_key);
    headers.append("Content-Type", "application/json");
    headers.append("Cache-Control", "no-cache");
    headers.append(
      "Content-Type",
      "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
    );
    headers.append("Authorization", token);
    headers.append("client_id", this.client_id);

    return this.http.get(
      apiurl +
        "parent/" +
        this.user_id +
        "/client/" +
        this.client_id +
        "/student/" +
        this.student_id +
        "/videos-list",
      { headers: headers }
    );
  }

  getStudentData(urlExtension): Observable<any> {
    this.Idsload();
    console.log("user_id:", this.user_id);
    console.log("client_id:", this.client_id);
    console.log("student_id:", this.student_id);
    let api_url_extn =
      apiurl +
      "parent/" +
      this.user_id +
      "/client/" +
      this.client_id +
      "/student/" +
      this.student_id +
      "/" +
      urlExtension;

    let headers = new Headers();
    let token = JSON.parse(localStorage.getItem("token"));
    let token_type = JSON.parse(localStorage.getItem("token_type"));

    token = token_type + " " + token;
    headers.append("API-KEY", api_key);
    headers.append("Content-Type", "application/json");
    headers.append("Cache-Control", "no-cache");
    headers.append(
      "Content-Type",
      "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
    );
    headers.append("Authorization", token);
    headers.append("client_id", this.client_id);

    return this.http.get(api_url_extn, { headers: headers });
  }
  getMessageData(urlExtension): Observable<any> {
    this.Idsload();
    let api_url_extn = apiurl + "parent/" + this.user_id + urlExtension;

    let headers = new Headers();
    let token = JSON.parse(localStorage.getItem("token"));
    let token_type = JSON.parse(localStorage.getItem("token_type"));

    token = token_type + " " + token;
    headers.append("API-KEY", api_key);
    headers.append("Content-Type", "application/json");
    headers.append("Cache-Control", "no-cache");
    headers.append(
      "Content-Type",
      "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
    );
    headers.append("Authorization", token);
    headers.append("client_id", this.client_id);

    return this.http.get(api_url_extn, { headers: headers });
  }
  getMessageDelete(MsgId): Observable<any> {
    this.Idsload();
    let api_url_extn =
      apiurl +
      "parent/" +
      this.user_id +
      "/client/" +
      this.client_id +
      "/messages/" +
      MsgId +
      "/archive";

    let headers = new Headers();
    let token = JSON.parse(localStorage.getItem("token"));
    let token_type = JSON.parse(localStorage.getItem("token_type"));

    token = token_type + " " + token;
    headers.append("API-KEY", api_key);
    headers.append("Content-Type", "application/json");
    headers.append("Cache-Control", "no-cache");
    headers.append(
      "Content-Type",
      "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
    );
    headers.append("Authorization", token);

    return this.http.delete(api_url_extn, { headers: headers });
  }
}
