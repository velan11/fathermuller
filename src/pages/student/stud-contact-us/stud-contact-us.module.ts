import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { StudContactUsPage } from "./stud-contact-us";

@NgModule({
  declarations: [StudContactUsPage],
  imports: [IonicPageModule.forChild(StudContactUsPage)],
  exports: [StudContactUsPage]
})
export class StudContactUsPageModule {}
