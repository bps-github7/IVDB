import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit { 


    loading: boolean = true;
    
    ngOnInit() : void {
    }

    

  constructor() {

   }



}
