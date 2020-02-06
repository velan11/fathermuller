import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { FacHomePage } from "./fac-home";

@NgModule({
  declarations: [FacHomePage],
  imports: [IonicPageModule.forChild(FacHomePage)],
  exports: [FacHomePage]
})
export class FacHomePageModule {}
