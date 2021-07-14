import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameName: string = "";

  constructor(private socket: Socket) { }

  joinGame() {
    this.socket.emit("joinGame", { id: 1255, gameName: this.gameName });
  }

  listen(eventName: string) {
    return new Observable(subscriber => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data);
      });
    });
  }
}
