import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { StudSmsPage } from "./stud-sms";

@NgModule({
  declarations: [StudSmsPage],
  imports: [IonicPageModule.forChild(StudSmsPage)],
  exports: [StudSmsPage]
})
export class StudSmsPageModule {}
