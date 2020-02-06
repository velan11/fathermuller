import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvesPage } from './eves';

@NgModule({
  declarations: [
    EvesPage,
  ],
  imports: [
    IonicPageModule.forChild(EvesPage),
  ],
})
export class EvesPageModule {}
