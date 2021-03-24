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

// Custom / user modules
import { ForumModule } from './modules/forum/forum.module';
import { ContentModule } from './modules/content/content.module';
import { GamesModule } from  './modules/games/games.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProfileModule } from './modules/profile/profile.module';
import { AdminModule } from './modules/admin/admin.module';


import { AppComponent } from './app.component';
import { ServicesModule } from './common/services/services.module';
import { AppRoutingModule } from './app.routing';


import { environment } from 'src/environments/environment';
import { CompositeModule } from './modules/composite/composite.module';


@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    CompositeModule,
    AdminModule,
    AuthModule,
    ContentModule,
    ForumModule,
    GamesModule,
    ProfileModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    ServicesModule.forRoot(),
    AppRoutingModule
    // RouterModule.forRoot([], { relativeLinkResolution: 'legacy' })
  ],
    providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
