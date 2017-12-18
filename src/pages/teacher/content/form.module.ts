import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { FormModalPage } from './form';

@NgModule({
  declarations: [
    FormModalPage,
  ],
  imports: [
    IonicPageModule.forChild(FormModalPage)
  ],
  exports: [
    FormModalPage
  ]
})
export class FormModalPageModule { }
