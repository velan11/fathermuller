import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { StudProgressReportPage } from "./stud-progress-report";

@NgModule({
  declarations: [StudProgressReportPage],
  imports: [IonicPageModule.forChild(StudProgressReportPage)],
  exports: [StudProgressReportPage]
})
export class StudProgressReportPageModule {}
