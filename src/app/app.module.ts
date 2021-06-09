//imports and declaratives
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { CustomFormsModule } from 'ng2-validation';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//declarations/ bootstraps
import { AppComponent } from './app.component';


//environment 
import { environment } from 'src/environments/environment';
import { ServicesModule } from './services/services.module';
import { DialogComponent } from './shared/components/dialog/dialog.component';



@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServicesModule.forRoot(),
  ],
  entryComponents : [
    DialogComponent
  ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
