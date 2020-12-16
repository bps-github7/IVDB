import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../models/content/Game';

@Component({
  selector: 'game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

    @Input() game : Game;

  constructor() { }

  ngOnInit(): void {
  }

}
