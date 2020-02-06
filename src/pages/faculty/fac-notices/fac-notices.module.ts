import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacNoticesPage } from './fac-notices';

@NgModule({
  declarations: [
    FacNoticesPage,
  ],
  imports: [
    IonicPageModule.forChild(FacNoticesPage),
  ],
})
export class FacNoticesPageModule {}
