import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacProfilePage } from './fac-profile';

@NgModule({
  declarations: [
    FacProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(FacProfilePage),
  ],
})
export class FacProfilePageModule {}
