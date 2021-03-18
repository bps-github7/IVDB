import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThreadService } from '../../../common/services/thread.service';

@Component({
  selector: 'view-threads',
  templateUrl: './view-threads.component.html',
  styleUrls: ['./view-threads.component.css']
})
export class ViewThreadsComponent implements OnInit {

    allThreads;

    constructor(private threadService: ThreadService, private router: Router, private route : ActivatedRoute) {
        this.threadService.getAll$().subscribe(p => this.allThreads = p);
    }

    ngOnInit(): void {
    }

}
