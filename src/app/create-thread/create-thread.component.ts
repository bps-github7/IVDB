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

    save(thread, uid=null) {
        if (uid) {
            this.threadService.save(thread, uid);
        } else {
            //could have this method return the uid and then cache it somehow
            this.threadService.add(thread);
        }
        
        this.router.navigate(['/forum/view-threads']);
    }

    delete(id) {
        if (confirm("Are you sure you want to delete this thread? (cannot be undone)")){
            this.threadService.delete(id);
            this.router.navigate(['/forum/view-threads']);}
        else return 0;
    }  



}
