import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { FacAssignmentStudListPage } from "./fac-assignment-stud-list";
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [FacAssignmentStudListPage],
  imports: [
    IonicPageModule.forChild(FacAssignmentStudListPage),
    DataTablesModule
  ],
  exports: [FacAssignmentStudListPage]
})
export class FacAssignmentStudListPageModule {}
