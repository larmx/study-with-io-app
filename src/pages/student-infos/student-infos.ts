import { Component } from '@angular/core';
import { NavParams, IonicPage, NavController, ToastController } from 'ionic-angular';

import { User, Api } from '../../providers/providers';
import { MainPage } from "../pages";

@IonicPage()
@Component({
  selector: 'page-student-infos',
  templateUrl: 'student-infos.html'
})
export class StudentInfosPage {

  account;

  constructor(public navCtrl: NavController,
              public user: User,
              public navParams: NavParams,
              public api: Api) {
    this.account = this.navParams.get('account');
  }

  doSignup() {
    this.api.post('register', this.account).subscribe((res) => {
      console.log("SERVER ANSWERED");
      this.navCtrl.push(MainPage);
      this.navCtrl.remove(1);
    }, (err) => {
      console.log("SERVER ERROR");
      console.log(err);
    });
  }
}
