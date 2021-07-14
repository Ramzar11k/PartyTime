import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.scss']
})
export class GameTileComponent implements OnInit {

  @Input() data: any;

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
  }

  setGame(): void {
    this.gameService.gameName = this.data.backName;
    this.router.navigate(["/lobby/1"]);
  }
}
