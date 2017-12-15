import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TeacherModalPage } from './teacher-modal';

@NgModule({
  declarations: [
    TeacherModalPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherModalPage)
  ],
  exports: [
    TeacherModalPage
  ]
})
export class TeacherModalPageModule { }
