import { Component, OnInit } from '@angular/core';
import { ForumInfoService } from 'src/app/common/services/forum-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    allCategories :  any [];

    constructor(private fourmInfoService : ForumInfoService) {
        this.fourmInfoService.getType$('category').subscribe(p=> this.allCategories = p);
    }

  ngOnInit(): void {
  }

}
