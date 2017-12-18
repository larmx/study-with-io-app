import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Config, Nav, Platform } from 'ionic-angular';
import { Storage } from "@ionic/storage";

import {FirstRunPage, MainPage} from '../pages/pages';
import { Settings } from '../providers/providers';
import { Api } from "../providers/api/api";

@Component({
  template: `<ion-nav #content [root]="rootPage"></ion-nav>`,
})
export class MyApp {
  // rootPage;
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;


  constructor(platform: Platform,
              settings: Settings,
              // private config: Config,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              public storage: Storage,
              public api: Api) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    // TODO: remettre le connectOnLaunch une fois les screens terminés
    // this.connectOnLaunch();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  async connectOnLaunch() {
    let connectionInfosStr;
    try {
      connectionInfosStr = await this.storage.get('connectionInfos');
      if(connectionInfosStr) {
        const connectionInfos = JSON.parse(connectionInfosStr);
        if (connectionInfos.token && connectionInfos.refreshToken && connectionInfos.userId) {
          const header = 'Authorization: Bearer '+ connectionInfos.token;
          this.api.post('onOpen', connectionInfos, { headers: header}).subscribe(res => {
              const user = JSON.stringify({
                userId: res['userId'],
                role: res['role'],
                goal: res['goal'],
                points: res['points'],
                progress: res['progress'],
              });
              console.log("USER", user);
              this.storage.set('user', user);
              this.rootPage = MainPage;
            }
          );
        }
      }
      else
        this.rootPage = FirstRunPage;
    } catch (err) {

    }
  }
}
