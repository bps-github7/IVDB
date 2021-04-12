//imports and decorators
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CustomFormsModule } from 'ng2-validation';
import { AngularFirestoreModule } from '@angular/fire/firestore';




//declarations/ bootstraps
import { AppComponent } from './app.component';


//environment 
import { environment } from 'src/environments/environment';



import { AppRoutingModule } from './app.routing';
import { ServicesModule } from './common/services/services.module';


@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    AppRoutingModule,
    ServicesModule.forRoot(),
    
  ],
    providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
