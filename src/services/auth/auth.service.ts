import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Api } from "../../providers/api/api";
import {MainPage} from "../../pages/pages";

@Injectable()
export class AuthService {

  constructor(public storage: Storage,
              public api: Api) {
  }

  connectOnLaunch() {
    // TODO: Connecter à la route pour avoir un nouveau token
    this.storage.get('connectionInfos').then( (connectionInfos) => {
      const data = JSON.parse(connectionInfos);
      // this.api.post('login', )
    });
  }

  loginRequest(account) {
    return this.api.post('login', account).map((res) => {
      console.log("SERVER ANSWERED");
      console.log(res);
      const connectionInfos = JSON.stringify({
        token: res['token'],
        refreshToken: res['refreshToken'],
        userId: res['userId']
      });
      console.log(connectionInfos);
      return connectionInfos;
    });
  }
}
