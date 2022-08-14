import { EnvServiceProvider } from './../env.service.provider';
import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvService } from '../env.service';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth'


@NgModule({
  declarations: [],
  imports: [
    CommonModule
	],
	providers: [
		EnvServiceProvider
	]
})
export class InitFirebaseModule { 
	constructor(private env : EnvService) {
		console.log(this.env.firebaseConfig)
	}


	imports = [
		provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
		provideFirestore(() => getFirestore()),
		// totally unsure this is how you do that. 
		provideAuth(() => getAuth()),

	]

	// exports = [
	// 	AngularFireModule.initializeApp(this.env.firebaseConfig),
	// 	AngularFirestore,
	// 	AngularFireAuth
	// ]
}
