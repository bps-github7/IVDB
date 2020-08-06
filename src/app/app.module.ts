//imports and decorators
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//declarations/ bootstraps
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { ZippyComponent } from './zippy/zippy.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ProfileComponent } from './profile/profile.component';
import { ForumComponent } from './forum/forum.component';
import { GamesComponent } from './games/games.component';
import { StreamingComponent } from './streaming/streaming.component';
import { ReccomendationsComponent } from './reccomendations/reccomendations.component';
import { WatchlistsComponent } from './watchlists/watchlists.component';
import { RateComponent } from './rate/rate.component';
import { SearchComponent } from './search/search.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    FavoriteComponent,
    PanelComponent,
    ZippyComponent,
    HomeComponent,
    SignInComponent,
    CreateAccountComponent,
    ProfileComponent,
    ForumComponent,
    GamesComponent,
    StreamingComponent,
    ReccomendationsComponent,
    WatchlistsComponent,
    RateComponent,
    SearchComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
        {
            path: '', component: HomeComponent
        },
        {
            path: 'sign_in/profile/:username', component: ProfileComponent
        },
        {
            path: 'sign_in/createAccount/forgotPassword', component: ForgotPasswordComponent
        },
        {
            path: 'sign_in/createAccount', component: CreateAccountComponent
        },
        {
            path: 'sign_in', component: SignInComponent
        },
        {
            path: 'forum', component: ForumComponent
        },
        {
            path: 'games', component: GamesComponent
        },
        {
            path: 'streaming', component: StreamingComponent
        },
        {
            path: 'reccomendations', component: ReccomendationsComponent
        },
        {
            path: 'watchlists', component: WatchlistsComponent
        },
        {
            path: 'rate', component: RateComponent
        },
        {
            path: 'search', component: SearchComponent
        },
        //uncomment this aftr you create NotFoundComponent- PWM code is outdated, for older angular version, and does not work.
        // {
        //     path: '**', component: NotFoundComponent
        // }
    ])
  ],
  providers: [
      /*Some ideas:
        ~watchlists.service
        ~Reccomendations.service
        ~sign-in.authenticator.service
        ~forum.service
      */
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
