import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { StudentInfosPage } from "./student-infos";

@NgModule({
  declarations: [
    StudentInfosPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentInfosPage)
  ],
  exports: [
    StudentInfosPage
  ]
})
export class StudentInfosPageModule { }
