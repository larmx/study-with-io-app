import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-exercises',
  templateUrl: 'exercises.html'
})
export class ExercisesPage {
  exercises: Item[];
  progress: number;
  points: number;
  //TODO: connect to the user's goal
  goal: number;

  constructor(public navCtrl: NavController,
              public items: Items,
              public modalCtrl: ModalController,
              public storage: Storage,
              public view: ViewController) {
    this.exercises = ExercisesPage.getTime(this.items.query());
    //TODO: connect points to the route api
    this.points = 14;
    this.progress = 4;
    this.goal = 6;
    console.log(this.navCtrl.indexOf(this.view));
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

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }


  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(exercise: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: exercise
    });
  }

  getNumber(num){
    return new Array(num);
  }



}
