import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { StudResetPasswordPage } from "./stud-reset-password";

@NgModule({
  declarations: [StudResetPasswordPage],
  imports: [IonicPageModule.forChild(StudResetPasswordPage)],
  exports: [StudResetPasswordPage]
})
export class StudResetPasswordPageModule {}
