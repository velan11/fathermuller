import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { StudCircularNoticesPage } from "./stud-circular-notices";

@NgModule({
  declarations: [StudCircularNoticesPage],
  imports: [IonicPageModule.forChild(StudCircularNoticesPage)],
  exports: [StudCircularNoticesPage]
})
export class StudCircularNoticesPageModule {}
