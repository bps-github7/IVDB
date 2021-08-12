import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { EnvServiceProvider } from './../env.service.provider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvService } from '../env.service';
import { AngularFireModule } from '@angular/fire';



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
		AngularFireModule.initializeApp(this.env.firebaseConfig),
		AngularFirestore,
		AngularFireAuth
	]

	// exports = [
	// 	AngularFireModule.initializeApp(this.env.firebaseConfig),
	// 	AngularFirestore,
	// 	AngularFireAuth
	// ]
}
