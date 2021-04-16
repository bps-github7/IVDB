import { StreamsService } from './../../services/streams.service';
import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content/content';

@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.css']
})
export class StreamingComponent implements OnInit {

  streams$ : Content [];

  constructor(private streamService: StreamsService) { 
    this.streamService.getAll$().subscribe(response => this.streams$ = response);
  }

  ngOnInit(): void {
  }

}
