var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { TeacherRegisterPage } from './teacherRegister/teacherRegister';
import { StudentRegisterPage } from './studentRegister/studentRegister';
let RegisterPage = class RegisterPage {
    constructor(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.authForm = formBuilder.group({
            role: ['', Validators.compose([Validators.required])],
        });
        // console.log(this.authForm.controls.role.get());
        console.log(this.authForm.controls.role);
    }
    onSubmit(value) {
        if (this.authForm.valid) {
            console.log(value);
            // TODO API Call and redirection
            if (value.role == 'teacher') {
                this.navCtrl.push(TeacherRegisterPage);
            }
            if (value.role == 'student') {
                this.navCtrl.push(StudentRegisterPage);
            }
        }
    }
};
RegisterPage = __decorate([
    Component({
        selector: 'page-register',
        templateUrl: 'register.html',
    })
], RegisterPage);
export { RegisterPage };
//# sourceMappingURL=register.js.map