import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { FacChangePasswordPage } from "./fac-change-password";

@NgModule({
  declarations: [FacChangePasswordPage],
  imports: [IonicPageModule.forChild(FacChangePasswordPage)],
  exports: [FacChangePasswordPage]
})
export class FacChangePasswordPageModule {}
