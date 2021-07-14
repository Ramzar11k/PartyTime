import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  games = [{
      name: "One Night Warewolf",
      backName: "warewolfGames"
    },
    {
      name: "Mafia",
      backName: "mafiaGames"
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
