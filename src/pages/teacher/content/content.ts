import { Component } from '@angular/core';
import {  ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Settings } from '../../../providers/providers';
import { Item } from '../../../models/item';
import { Items } from '../../../providers/providers';

import { FormModalPage } from '../../pages';

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
    options: any;
    items: any;
    requests: any;
    students: any;

    constructor(public navCtrl: NavController,
      public settings: Settings,
      public formBuilder: FormBuilder,
      public navParams: NavParams,
      public modalCtrl: ModalController) {
          this.items = [
              {
                  name: 'Carla Timsit',
                  phone: '+33 6 45 67 35 78'
              },
              {
                  name: 'Julia Robert',
                  phone: '+33 6 45 67 35 78'
              }
          ]
          this.initializeItems();
          this.requests = [
              {
                  name: 'Carla Timsit',
                  phone: '+33 6 45 67 35 78'
              },
              {
                  name: 'Julia Robert',
                  phone: '+33 6 45 67 35 78'
              }
          ]
    }

    initializeItems() {
      this.students = [
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

    ngOnChanges() {
      console.log('Ng All Changes');
    }

    // public openModal(template: TemplateRef<any>) {
    //     this.modalRef = this.modalService.show(FormModalPage);
    //   }
    openModal(characterNum) {
     let modal = this.modalCtrl.create(FormModalPage);
     modal.present();
   }
}
