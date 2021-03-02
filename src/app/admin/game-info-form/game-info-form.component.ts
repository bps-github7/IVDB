import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-info-form',
  templateUrl: './game-info-form.component.html',
  styleUrls: ['./game-info-form.component.css']
})
export class GameInfoFormComponent implements OnInit {

    gameInfo;

  constructor() { }

  ngOnInit(): void {
  }

  save(gameInfo) {
      console.log(gameInfo);
  }

  delete() {
      // will need to take an argument
      console.log("delete");
  }

}
