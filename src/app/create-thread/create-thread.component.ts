import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ThreadService } from '../common/services/thread.service';

@Component({
  selector: 'app-create-thread',
  templateUrl: './create-thread.component.html',
  styleUrls: ['./create-thread.component.css']
})
export class CreateThreadComponent implements OnInit {

    thread;
    id;

    constructor(private threadService : ThreadService,
        private router : Router,
        private route : ActivatedRoute) {    }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("id here ! " +  this.id);
    
    if (this.id)
        //testing- removed the unnesc first assignment?
        this.threadService.get$(this.id).subscribe(g => this.thread = g);

  }

    save(thread) {
        if(this.id) this.threadService.update(this.id, thread);
        else this.threadService.create(thread);
        this.router.navigate(['/forum/view-threads'])
    }

    delete(id) {
        this.threadService.delete(id);
    }  



}
