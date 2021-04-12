import { Component, OnInit } from '@angular/core';
import { ForumsService } from 'src/app/common/services/forums.service';
import { Forum } from 'src/app/models/content/Forum';

@Component({
  selector: 'app-manage-forums',
  templateUrl: './manage-forums.component.html',
  styleUrls: ['./manage-forums.component.css']
})
export class ManageForumsComponent implements OnInit {

    allForums: Forum [];

    constructor(private forumsService : ForumsService) {
        this.forumsService.getAll$().subscribe(p => this.allForums = p);

     }

    ngOnInit(): void {
    }

}
