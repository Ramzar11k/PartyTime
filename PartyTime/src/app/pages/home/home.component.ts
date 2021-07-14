import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { games } from 'src/app/data/games.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gameList = games;

  inLobbyList: boolean = false;

  lobbies = [];
  
  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
  }
}
