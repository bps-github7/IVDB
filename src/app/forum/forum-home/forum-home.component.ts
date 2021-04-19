import { Component, OnInit } from '@angular/core';
import { ForumInfoService } from 'src/app/services/forum-info.service';

@Component({
  selector: 'app-forum-home',
  templateUrl: './forum-home.component.html',
  styleUrls: ['./forum-home.component.css']
})
export class ForumHomeComponent implements OnInit {


  allCategories :  any [];

  constructor(private fourmInfoService : ForumInfoService) {
      this.fourmInfoService.getType$('category').subscribe(p=> this.allCategories = p);
  }

ngOnInit(): void {
}

}
