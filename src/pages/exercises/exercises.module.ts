import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgProgressModule } from '@ngx-progressbar/core';

import { ProgressBarComponentModule } from "../../components/progress-bar/progress-bar.module";
import { ExercisesPage } from './exercises';

@NgModule({
  declarations: [
    ExercisesPage,
  ],
  imports: [
    IonicPageModule.forChild(ExercisesPage),
    NgProgressModule,
    ProgressBarComponentModule
  ],
  exports: [
    ExercisesPage
  ]
})
export class ExercisesPageModule { }
