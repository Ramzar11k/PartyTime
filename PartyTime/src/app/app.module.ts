import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { GameTileComponent } from './components/game-tile/game-tile.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { WerewolfPageComponent } from './pages/warewolf-page/warewolf-page.component';
import { WerewolfLobbyBannerComponent } from './components/werewolf/werewolf-lobby-banner/werewolf-lobby-banner.component';
import { WerewolfLobbyComponent } from './pages/werewolf-page/werewolf-lobby/werewolf-lobby.component';

const config: SocketIoConfig = { url: 'http://192.168.0.113:8080', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GameTileComponent,
    WerewolfPageComponent,
    WerewolfLobbyBannerComponent,
    WerewolfLobbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
