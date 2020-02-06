import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { FacViewAssignmentPage } from "./fac-view-assignment";
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [FacViewAssignmentPage],
  imports: [IonicPageModule.forChild(FacViewAssignmentPage), DataTablesModule],
  exports: [FacViewAssignmentPage]
})
export class FacViewAssignmentPageModule {}
