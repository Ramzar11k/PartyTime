import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { roles } from 'src/app/data/warewolf.data';
import { AccountService } from 'src/app/services/account.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-warewolf-page',
  templateUrl: './warewolf-page.component.html',
  styleUrls: ['./warewolf-page.component.scss']
})
export class WerewolfPageComponent implements OnInit {

  roleList = roles;

  lobbies = [];

  constructor(private gameService: GameService, 
    private router: Router, 
    private route: ActivatedRoute,
    private accountService: AccountService) { }

  ngOnInit(): void {

    this.gameService.joinLobby("warewolfGames");
    
    this.gameService.getGameLobbies("warewolfGames").subscribe(data => {
      this.lobbies = data.games;
    });

    this.gameService.listen("createGame").subscribe((data: any) => {   
      this.router.navigate([`lobby/${data.id}`], {relativeTo: this.route});
    });

    this.gameService.listen("joinGame").subscribe((data: any) => {
      this.lobbies = data.lobbies;
    });
  }

  createNewLobby(): void {
    this.gameService.createGame("warewolfGames", this.accountService.user.username);
  }

  setName(name: string): void {
    this.accountService.tempSetUser(name);
  }
}
