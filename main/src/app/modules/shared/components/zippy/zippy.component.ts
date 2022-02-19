import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.sass']
})
export class ZippyComponent implements OnInit  {
  @Input('title') title: string;
	@Input('open') open = false;

	ngOnInit() {

		if (this.open) {
			console.log("create event: zippy level")
			this.isExpanded = true;
		}		
	}

	isExpanded: boolean;


  toggle() { 
    this.isExpanded = !this.isExpanded;
  }

}
