import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient, private socket: Socket) { }

  getGameLobbies(gameName: string): Observable<any> {
    return this.http.get("http://192.168.0.113:8080/games", { params: {gameName} });
  }

  getLobbyPlayers(gameName: string, gameId: string) {
    return this.http.get("http://192.168.0.113:8080/lobbyPlayers", { params: {gameName, gameId} })
  } 

  createGame(gameName: string, player: string) {
    this.socket.emit("createGame", { gameName, player });
  }

  joinGame(gameName: string, gameId: any) {
    this.socket.emit("joinGame", { id: gameId, gameName: gameName });
  }

  listen(eventName: string) {
    return new Observable(subscriber => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data);
      });
    });
  }
}
