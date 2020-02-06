import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacLgoutPage } from './fac-lgout';

@NgModule({
  declarations: [
    FacLgoutPage,
  ],
  imports: [
    IonicPageModule.forChild(FacLgoutPage),
  ],
  exports:[FacLgoutPage]
})
export class FacLgoutPageModule {}
