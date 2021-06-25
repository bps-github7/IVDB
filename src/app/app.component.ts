import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './models/post.model';

interface AppState {
	message: string;
	post : Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
	title="IVDB"
  
	constructor(private store: Store<AppState>) {
	}

}
