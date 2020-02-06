import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { FacViewAssignmentModalPage } from "./fac-view-assignment-modal";

@NgModule({
  declarations: [FacViewAssignmentModalPage],
  imports: [IonicPageModule.forChild(FacViewAssignmentModalPage)],
  exports: [FacViewAssignmentModalPage]
})
export class FacViewAssignmentModalPageModule {}
