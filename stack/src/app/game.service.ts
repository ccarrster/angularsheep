import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  games = [];
  constructor() { }

  addGame(){
  	this.games.push("Game Name");
  }

  getGames(){
  	return this.games;
  }
}
