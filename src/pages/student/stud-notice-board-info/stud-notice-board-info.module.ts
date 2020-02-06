import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { StudNoticeBoardInfoPage } from "./stud-notice-board-info";
import { ZoomAreaModule } from "ionic2-zoom-area";

@NgModule({
  declarations: [StudNoticeBoardInfoPage],
  imports: [IonicPageModule.forChild(StudNoticeBoardInfoPage), ZoomAreaModule],
  exports: [StudNoticeBoardInfoPage]
})
export class StudNoticeBoardInfoPageModule {}
