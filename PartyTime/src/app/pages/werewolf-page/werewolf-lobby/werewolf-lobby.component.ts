import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-werewolf-lobby',
  templateUrl: './werewolf-lobby.component.html',
  styleUrls: ['./werewolf-lobby.component.scss']
})
export class WerewolfLobbyComponent implements OnInit {

  players: any[] = [];

  constructor(private gameService: GameService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.gameService.getLobbyPlayers("warewolfGames", this.route.snapshot.params["id"]).subscribe((data: any) => {
      this.players = data.players;
    });

    this.gameService.listen("joinedGame").subscribe((data: any) => {
      this.players = data.players;
    });
  }
}
