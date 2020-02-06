import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { StudVideosPage } from "./stud-videos";
import { SafepipePipe } from "../../../pipes/safepipe/safepipe";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

@NgModule({
  declarations: [StudVideosPage, SafepipePipe],
  imports: [IonicPageModule.forChild(StudVideosPage)],
  providers: [InAppBrowser],
  exports: [StudVideosPage]
})
export class StudVideosPageModule {}
