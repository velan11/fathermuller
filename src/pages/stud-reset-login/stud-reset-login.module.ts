import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { StudResetLoginPage } from "./stud-reset-login";

@NgModule({
  declarations: [StudResetLoginPage],
  imports: [IonicPageModule.forChild(StudResetLoginPage)],
  exports: [StudResetLoginPage]
})
export class StudResetLoginPageModule {}
