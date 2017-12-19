import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Api } from "../../providers/api/api";

@Injectable()
export class UserService {
  api: Api;
  user: any;

  constructor(private http: HttpClient) {
    this.user = null ;
  }

  setUser(user) {
    this.user = user;
    console.log("SET POINTS TO USER", this.user.userId);
  }

  getUser() {
    return this.user;
  }

  setPoints(points) {
    // TODO: post dans le back et setpoints locally
    // this.http.post(this.api.url+'/users/addPoints', {
    //   id: this.user.userId,
    //   points: points
    // });
    // this.user.points = this.user.points + points;
  }
}
