import { NewUserDialogComponent } from './components/new-user-dialog/new-user-dialog.component';
import { DialogComponent } from 'src/app/modules/shared/components/dialog/dialog.component';
import { UserSelectedService } from './services/behaivor-subjects/user-selected.service';
import { selectUserById } from './store/selectors/users.selector';
import { AuthService } from 'src/app/modules/core/auth.service';
import { Component, OnInit } from '@angular/core';
import * as fromUsers from 'src/app/store/reducers/users.reducer';
import * as usersActions from 'src/app/store/actions/users.actions';
import { select, Store } from '@ngrx/store';
import { User } from './models/user/user.model';
import { firstValueFrom, Observable } from 'rxjs';
// import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	title="IVDB"
  // firebaseUser: firebase.User;
  user$ : Observable<User>

  constructor(
		private UserSelectedService : UserSelectedService,
		public auth : AuthService,
		private usersStore : Store<fromUsers.State>,
		 ) { }

	async ngOnInit() {
		// this.firebaseUser = await firstValueFrom(this.auth.getUser$())
		
		// /* ideally we'd be using the getUSerEntity$ method 
		// from auth service and not inject user store once again */
		// this.user$ = this.usersStore.pipe(select(selectUserById(this.firebaseUser.uid)))
		
		// // next big thing: can we get user object once in app component and make it universally
		// // available through behaivor subjects?
		// // TODO: double back!!!
		// this.UserSelectedService.select(this.user$);



		//if user has signed in for the first time, create a dialog for initial preference/ data collection
		/* ... */
	}

	// openDialog() {
	// 	/**
	// 	 * should only get called when user signs in for the first time
	// 	  */
	// 	// const config = new MatDialogConfig();
	// 	// // config.disableClose = true;
	// 	// // config.autoFocus = true;
	// 	// // config.height = '1600px';
	// 	// // config.width = `1200px`;

	// 	// config.data = {
	// 	// 	googleUser : true
	// 	// };



	// 	// // this.dialog.open(NewUserDialogComponent)
	// 	// // TODO: doing this breaks the form for some reason
	// 	// this.dialog.open(NewUserDialogComponent, config)
	// 	// .afterClosed()
	// 	// .subscribe(response => {
	// 	// 	console.log(response)
	// 	// 	if (response.newDisplayName) {
	// 	// 		this.usersStore.dispatch( usersActions.updateUser({ id: this.firebaseUser.uid, data : {displayName : response.newDisplayName} }) )
	// 	// 	}
	// 	// })

	// }



}
