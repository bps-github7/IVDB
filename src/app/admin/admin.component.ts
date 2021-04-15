import { Component } from '@angular/core';

@Component({
    selector: 'admin-root',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent {
    show : boolean = false;
    title = 'admin-module';
      
    constructor() {  }
}
  