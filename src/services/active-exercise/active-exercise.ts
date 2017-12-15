import { Injectable } from '@angular/core';

@Injectable()
export class ExerciseService {

  activeExercise: any;

  constructor() {
    this.activeExercise = null;
  }

  setExercise(exercise) {
    this.activeExercise = exercise;
  }

  getActiveExercise() {
    return this.activeExercise;
  }
}
