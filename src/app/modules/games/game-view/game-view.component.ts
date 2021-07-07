import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.sass']
})
export class GameViewComponent implements OnInit {

	id : string;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
		this.id = this.route.snapshot.paramMap.get("id")
	}

}
