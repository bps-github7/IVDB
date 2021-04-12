import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'content-dashboard',
  templateUrl: './content-dashboard.component.html',
  styleUrls: ['./content-dashboard.component.css']
})
export class ContentDashboardComponent implements OnInit {

    user_id: any;
    username : string;

    constructor(private route : ActivatedRoute) {
        this.user_id = route.snapshot.paramMap.get('id');
        this.username = route.snapshot.paramMap.get('username');
    }

  ngOnInit(): void {
  }

}
