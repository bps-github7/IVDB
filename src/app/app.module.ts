
// ng common stuff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routing, root component and our shared + core modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { CoreModule } from './modules/core/core.module';

// ngrx
import { reducers } from 'src/app/store/reducers';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
// import { PostEffects } from './effects/post.effects';

// forms + form components
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

// angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular fire
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireDatabase } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { ContentEffects } from 'src/app/store/effects/content.effects';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
		// angular base stuff + our modules
		BrowserModule,
    AppRoutingModule,
		SharedModule,
		CoreModule,

		//firebase
		AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
		//just for testing for now
		// AngularFireDatabase,

		//for forms
		FormsModule,
		ReactiveFormsModule,
    CustomFormsModule,
 
		// angular material
		// ngMaterialModule?
		BrowserAnimationsModule,

		// ngrx 
		StoreModule.forRoot(reducers),
		StoreDevtoolsModule.instrument({maxAge: 25}),
		EffectsModule.forRoot([])
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
