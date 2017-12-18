import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from "@ionic/storage";

import { User, Api } from '../../providers/providers';
import { MainPage, SignupPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  account: { email: string, password: string } = {
    email: '',
    password: ''
  };


  constructor(public navCtrl: NavController,
              public view: ViewController,
              public user: User,
              public toastCtrl: ToastController,
              public api: Api,
              private alertCtrl: AlertController,
              public storage: Storage) {

  }

  // Attempt to login in through our User service
  doLogin() {
    //this.api.post('login', this.account).subscribe((res) => {
      // console.log("SERVER ANSWERED");
      // console.log(res);
      // const connectionInfos = JSON.stringify({
      //   token: res.token,
      //   refreshToken: res.refreshToken,
      //   userId: res.userId
      // });
      // console.log(connectionInfos);
      // this.storage.set('connectionInfos', connectionInfos).then((res) =>
      // {
      //   const viewId = this.navCtrl.indexOf(this.view);
      //   console.log(viewId);
        this.navCtrl.push(MainPage);
        this.navCtrl.remove(0);
      // })
      //   .catch(
      //   (err) => {
      //     console.error(err);
      //   }
      // );
    //
    // }, (err) => {
    //   console.log("SERVER ERROR");
    //   console.log(err);
    //   this.presentAlert();
    // });
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Erreur de connection',
      subTitle: 'Votre Email ou votre mot de passe ne correspondent à aucun compte enregistré.',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  goToSignup() {
    this.navCtrl.push(SignupPage);
  }
}
