import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PartyTime';

  isMobile: any;

  constructor() {
    this.isMobile  = window.innerWidth < 768;
  }
}
