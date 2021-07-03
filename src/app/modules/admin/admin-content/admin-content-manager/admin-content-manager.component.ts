import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-content-manager',
  templateUrl: './admin-content-manager.component.html',
  styleUrls: ['./admin-content-manager.component.sass']
})
export class AdminContentManagerComponent implements OnInit {


	/* 
	admin-content-manager: a dumb component which takes a slice 
	of store data (content) and supports crud operations.
	*/

  constructor() { }

  ngOnInit(): void {
  }

}
