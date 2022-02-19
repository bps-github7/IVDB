import { UserSelectedService } from './../../services/behaivor-subjects/user-selected.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'content-root',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {
  
  user : any={}
  
	constructor(private userSelectedService : UserSelectedService) {
  }

  ngOnInit() {
    this.userSelectedService.selected$.subscribe(data => this.user = data)
  }
}