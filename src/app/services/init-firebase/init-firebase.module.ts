import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvService } from '../env.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';



@NgModule({
  declarations: [],
	providers : [EnvService],
  imports: [
    CommonModule
  ]
})
export class InitFirebaseModule { 
	constructor(private env : EnvService) {	
		console.log(this.env.firebaseConfig);
	}

	// exports = [
	// 	AngularFireModule.initializeApp( this.env.firebaseConfig),
	// 	AngularFireAuthModule,
	// 	AngularFirestoreModule,
	// ]
}
