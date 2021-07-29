import { UserEffects } from './store/effects/user.effects';
import { ConsoleSelectedService } from './services/behaivor-subjects/console-selected.service';
import { GameInfoSelectedService } from './services/behaivor-subjects/game-info-selected.service';
// ng common stuff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routing, root component and our shared + core modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { CoreModule } from './modules/core/core.module';

// ngrx
import { reducers, metaReducers } from 'src/app/store/reducers';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';



// forms + form components
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// this lil shit is always causing dependency issues v
import { CustomFormsModule } from 'ng2-validation';

// angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular fire
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';


// our custom service for getting server timestamps
import { FirebaseService } from './services/firebase.service';
import { environment } from 'src/environments/environment';
import { RouterSerializer } from './store/router-serializer';


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
		AngularFireAuthModule,
    AngularFirestoreModule,

		//for forms
		FormsModule,
		ReactiveFormsModule,
    CustomFormsModule,
 
		// angular material
		BrowserAnimationsModule,

		// ngrx 
		StoreModule.forRoot(reducers, { metaReducers }),
		StoreDevtoolsModule.instrument({maxAge: 25}),
		EffectsModule.forRoot([UserEffects]),
		StoreRouterConnectingModule.forRoot({
			serializer: RouterSerializer
		})
	],
  providers: [
		FirebaseService,
		GameInfoSelectedService,
		ConsoleSelectedService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
