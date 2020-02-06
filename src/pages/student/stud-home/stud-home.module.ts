import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { StudHomePage } from "./stud-home";

@NgModule({
  declarations: [StudHomePage],
  imports: [IonicPageModule.forChild(StudHomePage)],
  exports: [StudHomePage]
})
export class StudHomePageModule {}
