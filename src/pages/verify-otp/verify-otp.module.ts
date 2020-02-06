import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { VerifyOtpPage } from "./verify-otp";

@NgModule({
  declarations: [VerifyOtpPage],
  imports: [IonicPageModule.forChild(VerifyOtpPage)],
  exports: [VerifyOtpPage]
})
export class VerifyOtpPageModule {}
