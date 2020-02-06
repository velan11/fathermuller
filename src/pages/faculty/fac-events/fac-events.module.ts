import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacEventsPage } from './fac-events';

@NgModule({
  declarations: [
    FacEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(FacEventsPage),
  ],
})
export class FacEventsPageModule {}
