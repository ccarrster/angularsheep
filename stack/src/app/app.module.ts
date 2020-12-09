import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { GameDetailsComponent } from './game-details/game-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    	{ path: '', component: GameComponent},
    	{ path: 'game', component: GameDetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
