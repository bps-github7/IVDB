import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models';
// import { AuthService } from '../../core/auth.service';
// import { User } from 'src/app/models/user/user';
// 


interface Link {
	url : string;
	text : string
}

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.sass']
})
export class DropdownComponent implements OnInit {
	/**
	 * dumb component for creating a single node (top button and hidden dropdown links)
	 * for a nested dropdown employed in the site nav bar
	 * 
	 * 
	 * @param {string | Link} - module : top level link for a module-
	 * provides url and text for button at navbar top that,
	 * when clicked, exposes the hidden dropdown menu. In
	 * our case, this will be the root of feature module 
	 * (ie Games, Content, User, Admin, Forum)
	 * 	
	 * @param {Link} [] - children : array of sublinks which
	 * populate the menu of an unhidden dropdown. In our
	 * case it will be the most often used links in a feature
	 * module's component tree (ie user/profile, user/preferences...)
	 * 
	 */

	@Input() module : string | Link;
	@Input() children : string | Link [];

	hidden : boolean = true;

	constructor() { }

	ngOnInit() { }
}
