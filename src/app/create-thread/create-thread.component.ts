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
        private route : ActivatedRoute) {

            
        this.id = this.route.snapshot.paramMap.get('id');
        
        if (this.id)
            //testing- removed the unnesc first assignment?
            this.threadService.get$(this.id).subscribe(g => this.thread = g);
    }

  ngOnInit(): void {
  }

  save(thread) {
        // if(this.id) this.gameService.update(this.id, game);
        // else this.gameService.create(game);
        // this.router.navigate(['/admin/game']);
    
    this.threadService.create(thread);
  }

  delete() {
      console.log("does nothing atm");
  }  



}
