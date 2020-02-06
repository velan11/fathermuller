import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { StudAssignmentInfoPage } from "./stud-assignment-info";
import { ZoomAreaModule } from "ionic2-zoom-area";

@NgModule({
  declarations: [StudAssignmentInfoPage],
  imports: [IonicPageModule.forChild(StudAssignmentInfoPage), ZoomAreaModule],
  exports: [StudAssignmentInfoPage]
})
export class StudAssignmentInfoPageModule {}
