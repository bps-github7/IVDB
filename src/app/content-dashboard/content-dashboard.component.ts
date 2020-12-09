import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-dashboard',
  templateUrl: './content-dashboard.component.html',
  styleUrls: ['./content-dashboard.component.css']
})
export class ContentDashboardComponent implements OnInit {

    user_id: any;

    constructor() {
        this.user_id = localStorage.getItem("user_id")
    }

  ngOnInit(): void {
  }

}
