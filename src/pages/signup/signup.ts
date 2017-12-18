import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User, Api } from '../../providers/providers';
import { MainPage } from "../pages";
import { StudentInfosPage } from "../student-infos/student-infos";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  account: { firstname: string,
              lastname: string,
              email: string,
              password: string,
              role: string,
              goal: number,
              grade: number} = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: '',
    goal: null,
    grade: null
  };


  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public api: Api) {

    }

  doSignup() {
    // console.log(this.account);
    // if (this.account.role === 'teacher') {
      this.api.post('users/register', this.account).subscribe((res) => {
        console.log("SERVER ANSWERED");
        this.navCtrl.push(MainPage);
        // TODO: gerer ce remove
        this.navCtrl.remove(0);
      }, (err) => {
        console.log("SERVER ERROR");
        console.log(err);
      });
    // } else {
    //   this.goToStudentInfos();
    // }


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

  goToStudentInfos() {
    this.navCtrl.push('StudentInfosPage', {
      account: this.account
    });
  }
}
