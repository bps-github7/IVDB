import { UsersEffects } from 'src/app/store/effects/users.effects';
// import { EnvServiceProvider } from './services/env.service.provider';
// import { EnvService } from './services/env.service';
import { ConsoleSelectedService } from './services/behaivor-subjects/console-selected.service';
import { GameInfoSelectedService } from './services/behaivor-subjects/game-info-selected.service';
// ng common stuff
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

// routing, root component and our shared + core modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
// import { CoreModule } from './modules/core/core.module';

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


// our custom service for getting server timestamps
import { FirebaseService } from './services/firebase.service';
import { RouterSerializer } from './store/router-serializer';
import { environment } from 'src/environments/environment';

// InitFirebaseModule does not seem to be working, initializing here instead.
import { InitFirebaseModule } from './services/init-firebase/init-firebase.module';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth'


// components in the app level- home page, navigation menu, not found error
import { HomeComponent } from './components/home/home.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CoreModule } from './modules/core/core.module';
import { AuthService } from './modules/core/auth.service';
import { AuthModule } from './components/auth/auth.module';
import { GlobalErrorHandler } from './components/global-error-handler.class';
import { NewUserDialogComponent } from './components/new-user-dialog/new-user-dialog.component';




@NgModule({
  declarations: [
		HomeComponent,
		DropdownComponent,
		NavbarComponent,
		NotFoundComponent,
		AppComponent,
  NewUserDialogComponent,
  ],
  imports: [
		// angular base stuff + our modules
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		AuthModule,
		CoreModule,

		//firebase
		// InitFirebaseModule,

		provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
		provideFirestore(() => getFirestore()),
		// totally unsure this is how you do that. 
		provideAuth(() => getAuth()),

		//for forms
		FormsModule,
		ReactiveFormsModule,
    CustomFormsModule,
 
		// angular material
		BrowserAnimationsModule,

		// ngrx 
		StoreModule.forRoot(reducers, { metaReducers }),
		StoreDevtoolsModule.instrument({maxAge: 25}),
		EffectsModule.forRoot([]),
		StoreRouterConnectingModule.forRoot({
			serializer: RouterSerializer
		})
	],
  providers: [
		AuthService,
		FirebaseService,
		GameInfoSelectedService,
		ConsoleSelectedService,
		{ provide: ErrorHandler, useClass: GlobalErrorHandler },

		// TODO: added this to try and get data passed to new-user-dialog working. but it still doesnt. so this may be useless code. CLEANUP!
		// { provide: DIALOG_DATA, useValue: {} }
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
