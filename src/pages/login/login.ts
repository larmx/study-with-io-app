import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from "@ionic/storage";

import { User, Api } from '../../providers/providers';
import { MainPage, SignupPage } from '../pages';
import { AuthService } from "../../services/auth/auth.service";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthService]
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
    this.navCtrl.push(MainPage);
    // this.api.post('users/login', this.account).subscribe(res => {
    //   console.log("SERVER ANSWERED");
    //   console.log(res);
    //   const connectionInfos = JSON.stringify({
    //     token: res['token'],
    //     refreshToken: res['refreshToken'],
    //     userId: res['userId']
    //   });
    //   console.log(connectionInfos);
    //   const user = JSON.stringify({
    //     userId: res['userId'],
    //     role: res['role'],
    //     goal: res['goal'],
    //     points: res['points'],
    //     progress: res['progress'],
    //   });
    //   console.log("USER", user);
    //   this.storage.set('user', user);
    //   this.storage.set('connectionInfos', connectionInfos).then((res) =>
    //   {
    //     const viewId = this.navCtrl.indexOf(this.view);
    //     console.log(viewId);
    //     this.navCtrl.push(MainPage);
    //     this.navCtrl.remove(0);
    //   })
    //       .catch(
    //       (err) => {
    //         console.error(err);
    //       }
    //     );
    // }, (err) => {
    //     console.log("SERVER ERROR");
    //     console.log(err);
    //     this.presentAlert();
    // });

    // let connectionInfos;
    // try {
    //   this.authService.loginRequest(this.account).subscribe((res) => {
    //     console.log(res);
    //     this.storage.set('connectionInfos', connectionInfos).then((res) => {
    //       const viewId = this.navCtrl.indexOf(this.view);
    //       console.log(viewId);
    //       this.navCtrl.push(MainPage);
    //       // this.navCtrl.remove(0);
    //     })
    //       .catch((err) => {
    //           console.error(err);
    //         }
    //       );
    //   });
    //   // console.log(connectionInfos);
    // } catch (err) {
    //   console.log("SERVER ERROR");
    //   console.log(err);
    //   this.presentAlert();
    // }
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
