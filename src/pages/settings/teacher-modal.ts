import { Component } from '@angular/core';
import { IonicPage, Platform, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

import { Settings } from '../../providers/providers';
import { Api } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-teacher-modal',
  templateUrl: 'teacher-modal.html'
})
export class TeacherModalPage {
    teachers:any;
    requests: any;
    connectionInfos:any;
    loading:any;

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController,
        public api: Api,
        public storage: Storage,
        public loadingCtrl: LoadingController,
        private http: HttpClient
    ){
        this.requests = [];

        this.getConnectionInfos().then(() =>{
          this.getRequests();
        });
        this.loading = this.loadingCtrl.create({
            content: "Récupération des professeurs..."
        });
        this.loading.present();


      this.initializeTeachers();
    }


    getRequests() {
      let res = {};
      try {
        this.http.get(`${this.api.url}/users/${this.connectionInfos.userId}/requests`).subscribe((requests) => {
          if (Array.isArray(requests)) {
            if (requests.length > 0) {
              requests.forEach(request => {
                this.api.get(`users/${request.relationship.recipient}/info`).map(info => {
                  this.requests.push({
                      firstname: info['firstname'],
                      lastname: info['lastname'],
                      email: info['email'],
                      phone: info['phone'],
                      recipient: request.relationship.recipient,
                  });
                });
              });
            }
          }

        });
      } catch (err) {
        console.log(err);
        console.log(JSON.stringify(res));
      }
    }

    initializeTeachers() {
      this.api.get('users/teachers').subscribe(teachers => {
        this.teachers = teachers;
      })
    }

    async getConnectionInfos() {
        const connectionInfos = await this.storage.get('connectionInfos');
        this.loading.dismiss();
        this.connectionInfos = JSON.parse(connectionInfos);
    }

    getTeachers(ev) {
      // Reset items back to all of the items
      this.api.get('users/teachers').subscribe(teachers => {
        this.teachers = teachers;
        // set val to the value of the ev target
        var val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.teachers = this.teachers.filter((teacher) => {
            return (teacher.firstname.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }

      })
    }

    sendRequest(recipient) {
      this.api.post('users/sendRequest', {
        idRecipient: recipient,
      }).subscribe(res => {
        console.log(res);
      })
    }

    acceptRequest(recipient) {
      console.log(recipient);
      this.storage.get('connectionInfos').then((infos) => {
        this.api.post('users/acceptRequest', {
          idRequester: recipient,
          idRecipient: JSON.parse(infos).userId,
        }).subscribe(res => {
          console.log(res);
        })
      })
    }

    refuseRequest(recipient) {
      this.storage.get('connectionInfos').then((infos) => {
        this.api.post('users/refuseRequest', {
          idRequester: recipient,
          idRecipient: JSON.parse(infos).userId,
        }).subscribe(res => {
          console.log(res);
        })
      })
    }

    dismiss() {
   this.viewCtrl.dismiss();
}

ngOnChanges() {
  console.log('Ng All Changes');
}

}
