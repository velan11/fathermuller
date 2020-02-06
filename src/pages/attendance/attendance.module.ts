import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { AttendancePage } from "./attendance";
import { CalendarModule } from "ion2-calendar";

@NgModule({
  declarations: [AttendancePage],
  imports: [CalendarModule, IonicPageModule.forChild(AttendancePage)]
})
export class AttendancePageModule {}
