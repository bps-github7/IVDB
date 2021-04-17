import { Component, Input, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content/content';

@Component({
  selector: 'content-dropdown',
  templateUrl: './content-dropdown.component.html',
  styleUrls: ['./content-dropdown.component.css']
})
export class ContentDropdownComponent implements OnInit {

/* Start with this basic jawn for displaying all types of content.
really just a bootstrap/material card, with dropdown capabilities.

When we have image storage and images form control working in edit-content-dialogs,
we will use a grid of cards instead of this. 

This is just a intermediary step and can be deleted once we get to that point.
*/

  @Input() content : Content

  constructor() {

   }

  ngOnInit(): void {
  }

}
