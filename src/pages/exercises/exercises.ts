import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, ViewController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { Api } from "../../providers/api/api";
import {UserService} from "../../services/user/user";

@IonicPage()
@Component({
  selector: 'page-exercises',
  templateUrl: 'exercises.html',
  providers: [UserService]
})
export class ExercisesPage {
  exercises: any;
  progress: number;
  points: number;
  goal: number;
  user: any;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public storage: Storage,
              public view: ViewController,
              public loadingCtrl: LoadingController,
              public api: Api,
              public items: Items,
              private http: HttpClient,
              activeUser: UserService) {
    let loading = this.loadingCtrl.create({
      content: 'Récupération des exercices...'
    });
    loading.present();

    this.getUser().then((user) => {
      activeUser.setUser(user);
      // this.user = user;
      this.user = activeUser.getUser();
      console.log(this.user);

      this.exercises = ExercisesPage.getTime(this.items.query());
      loading.dismiss();
      // this.http.get(this.api.url+'/'+this.user.userId+'/exercises').subscribe(exercises => {
      //   this.exercises = ExercisesPage.getTime(exercises);
      //   loading.dismiss();
      // });

      this.points = this.user.points;
      this.progress = this.user.progress || 0;
      this.goal = this.user.goal || 0;
      console.log(this.navCtrl.indexOf(this.view));
    });
    // this.exercises = ExercisesPage.getTime(this.items.query());
  }

  async getUser() {
    const userStr = await this.storage.get('user');
    return JSON.parse(userStr);
  }

  static getTime(items) {
    let newExercises = items;
    for (let i = 0; i < items.length; i += 1) {
      let item = items[i];
      let newExercise = newExercises[i];
      newExercise.time = 0;
      for (let j = 0; j < item.questions.length; j += 1) {
        const question = item.questions[j];
        newExercise.time += Math.round(question.time / 60);
      }
    }
    return newExercises
  }


  openItem(exercise: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: exercise
    });
  }

  getNumber(num){
    return new Array(num);
  }



}
