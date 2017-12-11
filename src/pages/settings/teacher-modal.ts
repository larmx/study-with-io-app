import { Component } from '@angular/core';
import { IonicPage, Platform, NavController, NavParams, ViewController } from 'ionic-angular';

import { Settings } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-teacher-modal',
  templateUrl: 'teacher-modal.html'
})
export class TeacherModalPage {
    items:any;
    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
    ){
        this.initializeItems();
    }

    initializeItems() {
      this.items = [
        'Amsterdam',
        'Bogota',
        'Buenos Aires',
        'Cairo',
        'Dhaka',
        'Edinburgh',
        'Geneva',
        'Genoa',
        'Glasglow',
        'Hanoi',
        'Hong Kong',
        'Islamabad',
        'Istanbul',
        'Jakarta',
        'Kiel',
        'Kyoto',
        'Le Havre',
        'Lebanon',
        'Lhasa',
        'Lima',
        'London',
        'Los Angeles',
        'Madrid',
        'Manila',
        'New York',
        'Olympia',
        'Oslo',
        'Panama City',
        'Peking',
        'Philadelphia',
        'San Francisco',
        'Seoul',
        'Taipeh',
        'Tel Aviv',
        'Tokio',
        'Uelzen',
        'Washington'
      ];
    }

    getItems(ev) {
      // Reset items back to all of the items
      this.initializeItems();

      // set val to the value of the ev target
      var val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }

    dismiss() {
   this.viewCtrl.dismiss();
}

ngOnChanges() {
  console.log('Ng All Changes');
}

}
