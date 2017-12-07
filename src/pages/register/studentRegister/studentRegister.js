var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { matchValidator } from './../match-validator';
let StudentRegisterPage = class StudentRegisterPage {
    constructor(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.authForm = formBuilder.group({
            username: ['', Validators.compose([Validators.required])],
            password: ['', Validators.compose([Validators.required])],
            confirmation: ['', Validators.compose([Validators.required, matchValidator('password')])],
            grade: ['', Validators.compose([Validators.required])],
            objective: ['', Validators.compose([Validators.required])]
        });
    }
    onSubmit(value) {
        if (this.authForm.valid) {
            // TODO API Call and redirection
        }
    }
};
StudentRegisterPage = __decorate([
    Component({
        selector: 'page-studentRegister',
        templateUrl: 'studentRegister.html',
    })
], StudentRegisterPage);
export { StudentRegisterPage };
//# sourceMappingURL=studentRegister.js.map