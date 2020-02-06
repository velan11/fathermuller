import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

//live server
// let apilogUrl = "https://onlineapp.staloysius.edu.in/mjes/facultyappapi/auth/";
// let apiurl = "https://onlineapp.staloysius.edu.in/mjes/facultyappapi/";

let api_key = "95yV0U155lrb77e9rgXl8u2pNuf27900";

// demo server

let apilogUrl = "https://dev.pacifyca.com/mjes/facultyappapi/auth/";
let apiurl = "https://dev.pacifyca.com/mjes/facultyappapi/";

@Injectable()
export class FacAuthServiceProvider {
  constructor(public http: Http) {
    console.log("Hello AuthFacServiceProvider Provider");
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

  getlogData(type, keyval): Observable<any> {
    console.log("type ", type);
    console.log("key Value", keyval);
    let headers = new Headers();
    headers.append("API-KEY", api_key); // return this.http.get(apiUrl+ 'getState');

    return this.http.get(apilogUrl + type + keyval, { headers: headers });
  }

  postData(credentials, type): Observable<any> {
    let headers = new Headers();
    // headers.append('Access-Control-Allow-Headers', 'Content-Type');
    // headers.append('Access-Control-Allow-Methods', 'GET');
    // headers.append('Access-Control-Allow-Origin', '*');
    headers.append("API-KEY", api_key);

    headers.append("Content-Type", "application/json");

    return this.http.post(apiurl + type, JSON.stringify(credentials), {
      headers: headers
    });
  }

  getData(type): Observable<any> {
    console.log("type ", type);
    // console.log("key Value",keyval);
    let headers = new Headers();
    headers.append("API-KEY", api_key);
    headers.append("Content-Type", "application/json"); // return this.http.get(apiUrl+ 'getState');

    return this.http.get(apiurl + type, { headers: headers });
  }
}
