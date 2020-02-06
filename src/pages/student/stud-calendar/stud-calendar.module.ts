import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { StudCalendarPage } from "./stud-calendar";
import { CalendarModule } from "ion2-calendar";
import { MatCardModule } from "@angular/material/card";
import { NgCalendarModule } from "ionic2-calendar";
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
  declarations: [StudCalendarPage],
  imports: [
    IonicPageModule.forChild(StudCalendarPage),
    CalendarModule,
    NgCalendarModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [StudCalendarPage]
})
export class StudCalendarPageModule {}
