import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromContrib from 'src/app/store/reducers/contributions.reducer';
import { readContributions, updateContribution } from 'src/app/store';
import { Contribution } from 'src/app/models';
import { Observable } from 'rxjs';
import { selectAllUserContribsByDisplayName } from 'src/app/store/selectors/contribution.selector';

@Component({
  selector: 'app-contributions-dashboard',
  templateUrl: './contributions-dashboard.component.html',
  styleUrls: ['./contributions-dashboard.component.sass']
})
export class ContributionsDashboardComponent implements OnInit {

	/* class docstring: */

	contribs$: Observable<any>;
	displayedColumns = ["family","link","edit","delete"]


  constructor(private contribStore : Store<fromContrib.State>) { }
	
	
	/* 
		some serious thoughts for future:
			1) can we initialize current user at root of feature module and make it available to all child components?
			2) can we initialize feature / store slices once at feature root and avoid doing so in all child components?
				-ie. selectAll and readUsers once at user.component, making this data available here, avoid all the redundant code. 	
	*/

  ngOnInit(): void {
		this.contribs$ = this.contribStore.select(fromContrib.selectAll);
		this.contribStore.dispatch( readContributions() )


		this.contribs$ = this.contribStore.pipe(select(selectAllUserContribsByDisplayName("Rehash Skonedalone")))
	}

	updateContrib(id : string, contrib : any) {
		console.log("doing that update thaaaang");
	}

	deleteContrib(id : string) {
		console.log("doing that delete thaaaaang")
	}

}
