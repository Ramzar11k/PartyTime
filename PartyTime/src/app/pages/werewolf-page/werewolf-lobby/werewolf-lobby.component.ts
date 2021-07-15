import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-werewolf-lobby',
  templateUrl: './werewolf-lobby.component.html',
  styleUrls: ['./werewolf-lobby.component.scss']
})
export class WerewolfLobbyComponent implements OnInit {

  players: any[] = [];
  roles: any[] = ["Werewolf", "Minion", "Mason", "Seer", "Robber", "Troublemaker"];

  constructor(private gameService: GameService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.gameService.getLobbyPlayers("warewolfGames", this.route.snapshot.params["id"]).subscribe((data: any) => {
      this.players = data.players;
    });

    this.gameService.listen("joinGame").subscribe((data: any) => {
      this.players = data.players;
    });

    this.gameService.listen("startGame").subscribe((data: any) => {
      this.router.navigate(["/werewolf/game/" + this.route.snapshot.params["id"]]);
    });
  }

  startGame() {
    this.gameService.startGame("warewolfGames", this.route.snapshot.params["id"], this.roles)
  }
}
