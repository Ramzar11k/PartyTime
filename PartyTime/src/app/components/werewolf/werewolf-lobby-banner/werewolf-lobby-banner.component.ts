import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-werewolf-lobby-banner',
  templateUrl: './werewolf-lobby-banner.component.html',
  styleUrls: ['./werewolf-lobby-banner.component.scss']
})
export class WerewolfLobbyBannerComponent implements OnInit {
  
  @Input() data: any;

  constructor(private gameService: GameService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  joinLobby(): void {
    this.gameService.joinGame("warewolfGames", this.data.id);
    this.router.navigate([`lobby/${this.data.id}`], {relativeTo: this.route});
  }

}
