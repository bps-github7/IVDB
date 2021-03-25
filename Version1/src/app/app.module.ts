import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
// probably arent gonna need this 
import { CustomFormsModule } from 'ng2-validation';



//firestore
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
// importante!
import { environment } from 'src/environments/environment';



// Custom / user modules
import { ForumModule } from './modules/forum/forum.module';
import { ContentModule } from './modules/content/content.module';
import { GamesModule } from  './modules/games/games.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProfileModule } from './modules/profile/profile.module';
import { AdminModule } from './modules/admin/admin.module';
import { CompositeModule } from './modules/composite/composite.module';
import { ContributionsModule } from './modules/contributions/contributions.module';

//app module level components & modules
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

// make this appServiceModule for naming convention sake
import { ServicesModule } from './common/services/services.module';



@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    CustomFormsModule,
    ServicesModule.forRoot(),
    
    //this one imports a bunch of common ones- forms, reactive forms, common module, plus common custom components
    CompositeModule,
    AdminModule,
    AuthModule,
    // ContentModule,
    // ContributionsModule,
    // ForumModule,
    // GamesModule,
    // ProfileModule,
    AppRoutingModule
  ],
    providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
