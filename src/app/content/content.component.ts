import { Component } from '@angular/core';

@Component({
    selector: 'content-root',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
  })
  
  
  export class ContentComponent {
    title = 'content-module';
    show : boolean = false;      
    constructor() {  }
}
  