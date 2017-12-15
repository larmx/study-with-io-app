import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { ExerciseService} from "../../services/active-exercise/active-exercise";
import { Items } from '../../providers/providers';
import { Item } from '../../models/item';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;

  constructor(public navCtrl: NavController,
              navParams: NavParams,
              items: Items,
              exerciseService: ExerciseService) {
    this.item = navParams.get('item') || items.defaultItem;
    exerciseService.setExercise(this.item);
  }

  beginExercise() {
    this.navCtrl.push('QuestionPage', {
      question: this.item.questions[0],
      id: 0
    });
  }

}
