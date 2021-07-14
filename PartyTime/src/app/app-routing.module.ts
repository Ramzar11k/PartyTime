import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WerewolfPageComponent } from './pages/warewolf-page/warewolf-page.component';
import { WerewolfLobbyComponent } from './pages/werewolf-page/werewolf-lobby/werewolf-lobby.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "werewolf", component: WerewolfPageComponent },
  {path: "werewolf/lobby/:id", component: WerewolfLobbyComponent},
  {path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
