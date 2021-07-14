import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { roles } from 'src/app/data/warewolf.data';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-warewolf-page',
  templateUrl: './warewolf-page.component.html',
  styleUrls: ['./warewolf-page.component.scss']
})
export class WerewolfPageComponent implements OnInit {

  roleList = roles;

  lobbies = [];

  constructor(private gameService: GameService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.gameService.getGameLobbies("warewolfGames").subscribe(data => {
      this.lobbies = data.games;
    });

    this.gameService.listen("gameCreated").subscribe((data: any) => {
      console.log(data);
      this.router.navigate([`lobby/${data.id}`], {relativeTo: this.route});
    });
  }

  createNewLobby(): void {
    this.gameService.createGame("warewolfGames", "Billy bob the fucker knob");
    // this.gameService.joinGame("warewolfGames", this.data.id);
    // this.router.navigate([`lobby/${this.data.id}`], {relativeTo: this.route});
  }
}
