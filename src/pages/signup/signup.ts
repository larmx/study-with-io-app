import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User, Api } from '../../providers/providers';
import { MainPage } from "../pages";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { firstname: string, lastname: string, email: string, password: string, role: string } = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: ''
  };


  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public api: Api) {
    }

  doSignup() {
    this.api.post('users/register', this.account).subscribe((res) => {
      console.log("SERVER ANSWERED");
      this.navCtrl.push(MainPage);
      this.navCtrl.remove(1);
    }, (err) => {
      console.log("SERVER ERROR");
      console.log(err);
    });
    // Attempt to login in through our User service
    // this.user.signup(this.account).subscribe((resp) => {
    //   this.navCtrl.push(MainPage);
    // }, (err) => {
    //
    //   this.navCtrl.push(MainPage);
    //
    //   // Unable to sign up
    //   let toast = this.toastCtrl.create({
    //     message: this.signupErrorString,
    //     duration: 3000,
    //     position: 'top'
    //   });
    //   toast.present();
    // });
  }

  goToLogin(){
      this.navCtrl.pop();
  }
}
