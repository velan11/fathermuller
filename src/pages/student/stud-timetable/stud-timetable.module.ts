import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { StudTimetablePage } from "./stud-timetable";
import { CalendarModule } from "ion2-calendar";
import { MatCardModule } from "@angular/material/card";
import { NgCalendarModule } from "ionic2-calendar";
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
  declarations: [StudTimetablePage],
  imports: [
    IonicPageModule.forChild(StudTimetablePage),
    CalendarModule,
    NgCalendarModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [StudTimetablePage]
})
export class StudTimetablePageModule {}
