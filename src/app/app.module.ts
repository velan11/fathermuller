import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import {
  IonicApp,
  IonicErrorHandler,
  IonicModule,
  IonicPageModule
} from "ionic-angular";

import { File } from "@ionic-native/file";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject
} from "@ionic-native/file-transfer";

import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { HttpModule, Http } from "@angular/http";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";

import { NgbModalModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";

import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/do";
import "rxjs/add/operator/retry";
import "rxjs/add/operator/concat";

//pages added
import { MyApp } from "./app.component";
import { AuthServiceProvider } from "../providers/auth-service/auth-service";
import { FacAuthServiceProvider } from "../providers/fac-auth-service/fac-auth-service";
import { FcmProvider } from "../providers/fcm/fcm";
import { NetworkProvider } from "../providers/network/network";
import { Firebase } from "@ionic-native/firebase";
import { Network } from "@ionic-native/network";
import { NativeStorage } from "@ionic-native/native-storage/ngx";

// import { DataTablesModule } from "angular-datatables";
import { AppVersion } from "@ionic-native/app-version";

import { FroalaEditorModule, FroalaViewModule } from "angular-froala-wysiwyg";
import { PhotoViewer } from "@ionic-native/photo-viewer";

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModalModule,
    HttpModule,
    NgbModule.forRoot(),
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    File,
    // FileTransfer,
    // FileTransferObject,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthServiceProvider,
    FacAuthServiceProvider,
    FcmProvider,
    PhotoViewer,
    NetworkProvider,
    Firebase,
    Network,
    NativeStorage,
    AppVersion
  ]
})
export class AppModule {}
