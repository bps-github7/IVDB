import { AuthService } from 'src/app/modules/core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(public auth : AuthService) { }

  ngOnInit(): void {
  }


	logout() {
		this.auth.logout();
	}

}
