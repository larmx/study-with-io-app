import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';

import { TeacherRegisterPage } from './teacherRegister/teacherRegister';
import { StudentRegisterPage } from './studentRegister/studentRegister';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	authForm: FormGroup;

	constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
  	this.navCtrl = navCtrl;
    this.authForm = formBuilder.group({
    	role: ['', Validators.compose([Validators.required])],
    });
    // console.log(this.authForm.controls.role.get());
    console.log(this.authForm.controls.role);
  }

  onSubmit(value: any): void { 
    if(this.authForm.valid) {
    	console.log(value);
      // TODO API Call and redirection
      if(value.role=='teacher') {
      	this.navCtrl.push(TeacherRegisterPage);
      }
      if(value.role=='student') {
      	this.navCtrl.push(StudentRegisterPage);
      }
    }
  }
}
