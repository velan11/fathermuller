import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { AboutStudentPage } from "./about-student";

@NgModule({
  declarations: [AboutStudentPage],
  imports: [IonicPageModule.forChild(AboutStudentPage)],
  exports: [AboutStudentPage]
})
export class AboutStudentPageModule {}
