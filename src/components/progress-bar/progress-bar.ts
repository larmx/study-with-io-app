import { Component, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {

  // @Input() progress: any;
  // @Input() goal: any;

  goal: any;
  progress: number;
  width: any;

  constructor() {
    this.progress = 4;
    this.goal = 6;
    this.width = Math.round((this.progress / this.goal) * 100);
    console.log(this.width);
    console.log(this.progress);
    console.log(this.goal);
  }

  getPerCent(){

  }
}
