import { Component, OnInit } from '@angular/core';
import { ForumInfoService } from 'src/app/common/services/forum-info.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

    allCategories :  any [];

    constructor(private fourmInfoService : ForumInfoService) {
        this.fourmInfoService.getType$('category').subscribe(p=> this.allCategories = p);
    }


    ngOnInit(): void {
    }

}
