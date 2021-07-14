import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  players = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.listen("joinedGame").subscribe((res: any) => {
      this.players = res.players;
      console.log(this.players);
    });

    this.gameService.joinGame();
  }

}
