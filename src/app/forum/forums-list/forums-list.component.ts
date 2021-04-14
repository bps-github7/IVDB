import { Component, Input, OnInit } from '@angular/core';
import { ForumsService } from 'src/app/services/forums.service';

@Component({
  selector: 'forums-list',
  templateUrl: './forums-list.component.html',
  styleUrls: ['./forums-list.component.css']
})
export class ForumsListComponent implements OnInit {

    @Input() category;
    forums

    constructor(private forumsService : ForumsService) {
        
     }

    ngOnInit(): void {
        this.forumsService.getCategory$(this.category)
        .subscribe(p=> this.forums = p);
    }

}
