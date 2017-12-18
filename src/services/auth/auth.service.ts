import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(public storage: Storage) {
    this.storage = storage;
    this.storage.get('connectionInfos').then( (connectionInfos) => {
      this
    });
  }

  // setExercise(exercise) {
  //   this.activeExercise = exercise;
  // }
  //
  // getActiveExercise() {
  //   return this.activeExercise;
  // }
}
