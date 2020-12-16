import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

    @Input() content : any=[];

    constructor() { }

    ngOnInit(): void {
    }

}
