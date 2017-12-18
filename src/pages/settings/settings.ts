import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Settings } from '../../providers/providers';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { TeacherModalPage } from '../pages';
import { AddModalPage } from '../pages';
import { Api } from '../../providers/api/api';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  // Our local settings object
  options: any;

  settingsReady = false;
  items: any;
  form: FormGroup;

  profileSettings = {
    page: 'profile',
    pageTitleKey: 'SETTINGS_PAGE_PROFILE'
  };

  page: string = 'main';
  pageTitleKey: string = 'SETTINGS_TITLE';
  pageTitle: string;

  subSettings: any = SettingsPage;

  constructor(public navCtrl: NavController,
    public settings: Settings,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public storage: Storage,
    public api: Api) {
      this.relations = [];
      this.storage.get('connectionInfos').then((infos) => {
        this.api.get(`users/${JSON.parse(infos).userId}/relations`).subscribe(relations => {
          if (relations.relationships.length() > 0) {
            relations.relationships.forEach(relation => {
              this.api.get(`users/${relation.recipient}/info`).subscribe(info => {
                this.relations.push({
                  firstname: info.firstname,
                  lastname: info.lastname,
                  email: info.email,
                  phone: info.phone,
                });
              });
            });
          }
        });
      });
  }

  ngOnChanges() {
    console.log('Ng All Changes');
  }

  openModal() {
   let modal = this.modalCtrl.create(TeacherModalPage);
   modal.present();
  }

 openModalAdd(characterNum) {
  let modal = this.modalCtrl.create(AddModalPage);
  modal.present();
  }

  doPromptPassword() {
     let prompt = this.alertCtrl.create({
       title: 'Modification du mot de passe',
       inputs: [
         {
           name: 'oldPassword',
           placeholder: 'Ancien mot de passe'
         },
         {
           name: 'newPassword',
           placeholder: 'Nouveau mot de passe'
         },
         {
           name: 'newPasswordConf',
           placeholder: 'Confirmation'
         },
       ],
       buttons: [
         {
           text: 'Cancel',
           handler: data => {
             console.log('Cancel clicked');
           }
         },
         {
           text: 'Save',
           handler: data => {
             console.log(data);
             console.log('Saved clicked');
           }
         }
       ]
     });
     prompt.present();
   }

   doPromptNotif() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');

    alert.addInput({
      type: 'toggle',
      label: 'Notification',
      value: 'Notification',
      checked: true
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay'
    });
  }
}
