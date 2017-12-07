import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { matchValidator } from './../match-validator';

@Component({
  selector: 'page-studentRegister',
  templateUrl: 'studentRegister.html',
})
export class StudentRegisterPage {

	authForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
  	this.navCtrl = navCtrl;
    this.authForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      confirmation: ['', Validators.compose([Validators.required, matchValidator('password')])],
      grade: ['', Validators.compose([Validators.required])],
      objective:['', Validators.compose([Validators.required])]
    });
  }

  onSubmit(value: any): void { 
    if(this.authForm.valid) {
      // TODO API Call and redirection
    }
  }
}
