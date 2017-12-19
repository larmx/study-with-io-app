import { Component } from '@angular/core';
import {  ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Settings } from '../../../providers/providers';
import { Item } from '../../../models/item';
import { Items } from '../../../providers/providers';

import { FormModalPage } from '../../pages';
import { Api } from '../../../providers/api/api';

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
      public api: Api,
      public modalCtrl: ModalController) {
          this.items = [
              {
                  firstname: 'Carla',
                  lastname: 'Vital',
                  phone: '+33 6 45 67 35 78'
              },
              {
                  firstname: 'Pierre',
                  lastname: 'Timsit',
                  phone: '+33 6 45 67 35 78'
              }
          ]
          this.initializeItems();
          this.requests = [];
    }

    initializeItems() {
      this.students = [
          this.api.get('users/students').subscribe(items => {
            this.students = items;
          })
      ];
    }

    getItems(ev) {
      // Reset items back to all of the items
      this.api.get('users/students').subscribe(students => {
        this.students = students;
        // set val to the value of the ev target
        var val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.students = this.students.filter((item) => {
            return (item.firstname.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }
      })
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
