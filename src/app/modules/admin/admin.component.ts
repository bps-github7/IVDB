import { Component } from '@angular/core';

@Component({
  selector: 'admin-root',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent {
	showDashboard: boolean = false;


	constructor() {
	}
}