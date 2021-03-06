import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
	games;
  constructor(
  	private gameService: GameService
  ) { }

  ngOnInit(): void {
  	this.games = this.gameService.getGames();
  }

  addGame(){
  	this.gameService.addGame();
  }

}
