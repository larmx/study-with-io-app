import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-badges',
  templateUrl: 'badges.html'
})
export class BadgesPage {

  currentItems: any = [];

  points: number;

  constructor(public alerCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public items: Items) {
    this.points = 14;
  }
  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Nouveau Badge ! ',
      message: 'Tu as créé ton compte, bravo!',
      buttons: ['Ok']
    });
    alert.present()
  }

}
