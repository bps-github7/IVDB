import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'admin-consoles',
  templateUrl: './admin-consoles.component.html',
  styleUrls: ['./admin-consoles.component.sass']
})
export class AdminConsolesComponent implements OnInit {


	@Input() platformName : string;
	
  constructor() { }

  ngOnInit(): void {
  }

}
