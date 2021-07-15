import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  user = {
    username: ""
  };

  constructor(private http: HttpClient, private socket: Socket) { }

  tempSetUser(name: string) {
    this.user.username = name;
  }
}
