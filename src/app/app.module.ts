//imports and decorators
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';


//services AKA providers
import { AuthService } from './common/services/auth.service';
// import { fakeBackendProvider } from './mosh_common/helpers/fake-backend';

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
import { PostsComponent } from './posts/posts.component';
import { CreateThreadComponent } from './create-thread/create-thread.component';
import { CommentComponent } from './comment/comment.component';
import { NotFoundComponent } from './not-found/not-found.component';


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
    ForgotPasswordComponent,
    PostsComponent,
    CreateThreadComponent,
    CommentComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
        //worried that your naming/case scheme is incosistent in these route paths.
        {
            path: 'forum/create-thread', component: CreateThreadComponent
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
        {
            path: '**', component: NotFoundComponent
        }
    ])
  ],
  providers: [
      AuthService,

      //for creating a mock backend

    //none of these work. check docs
    //   fakeBackendProvider
    //   MockBackend,
    //   BaseRequestOptions

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
