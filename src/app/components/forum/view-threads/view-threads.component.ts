import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThreadService } from '../../../common/services/thread.service';

@Component({
  selector: 'app-view-threads',
  templateUrl: './view-threads.component.html',
  styleUrls: ['./view-threads.component.css']
})
export class ViewThreadsComponent implements OnInit {

    //placeholders for actual option values...
    option_1;
    option_2;
    option_3;
    id = null;
    thread;
    username;

    constructor(private threadService: ThreadService, private router: Router, private route : ActivatedRoute) {
        this.username = localStorage.getItem('username');
        
        this.id = this.route.snapshot.paramMap.get('id');
        
        if (this.id)
            //testing- removed the unnesc first assignment?
            this.threadService.get$(this.id).subscribe(g => this.thread = g);
        this.threadService.get_threads_by_topic('option 1').subscribe(resp => this.option_1 = resp);
        this.threadService.get_threads_by_topic('option 2').subscribe(resp => this.option_2 = resp);
        this.threadService.get_threads_by_topic('option 3').subscribe(resp => this.option_3 = resp);

        
    }

    ngOnInit(): void {
    }

}
