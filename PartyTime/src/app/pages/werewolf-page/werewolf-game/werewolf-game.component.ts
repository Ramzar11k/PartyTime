import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-werewolf-game',
  templateUrl: './werewolf-game.component.html',
  styleUrls: ['./werewolf-game.component.scss']
})
export class WerewolfGameComponent implements OnInit {

  role: any;

  constructor(private gameService: GameService,
    private accountService: AccountService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.gameService.listen("getRole").subscribe((data: any) => {
      console.log(data);
      this.role = data.role;
    });
    
    this.gameService.getRole("warewolfGames", this.route.snapshot.params["id"]);
  }

}
