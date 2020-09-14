//imports and decorators
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CustomFormsModule } from 'ng2-validation';
// import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//services AKA providers
import { AuthService } from './common/services/auth.service';
import { AuthGuard } from './common/services/auth-guard.service';
import { AdminAuthGuard } from './common/services/admin-auth-guard.service';
import { GameInfoService } from './common/services/gameinfo.service';
import { GameService } from './common/services/game.service';
import { UserAuthGuard } from './common/services/user-auth-guard.service';
import { UserService } from './common/services/user.service';



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
import { GameComponent } from './admin/game/game.component';
import { GameFormComponent } from './admin/game-form/game-form.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ViewGameComponent } from './view-game/view-game.component';
import { ViewRatingsComponent } from './view-ratings/view-ratings.component';

//environment
import { environment } from 'src/environments/environment';


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
    NotFoundComponent,
    GameComponent,
    GameFormComponent,
    CreateProfileComponent,
    ViewGameComponent,
    ViewRatingsComponent
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
    RouterModule.forRoot([
        //routes asscesible to annoymous users
        { path: '', component: HomeComponent },
        
        { path: 'sign_in/createAccount/forgotPassword', component: ForgotPasswordComponent },
        { path: 'sign_in/createAccount', component: CreateAccountComponent},
        { path: 'sign_in', component: SignInComponent },
        { path: 'search', component: SearchComponent },
        { path: 'sign_in/create_profile', component: CreateProfileComponent, canActivate: [AuthGuard]},
        { path: 'sign_in/create_profile/:username/update', component: CreateProfileComponent, canActivate: [AuthGuard, UserAuthGuard] },
        { path: 'sign_in/profile/:username', component: ProfileComponent, canActivate: [AuthGuard] },

        //you'll see more on these pages if youre signed in, but can view as anonymous user.
        { path: 'forum', component: ForumComponent },
        { path: 'games', component: GamesComponent },
        { path: 'games/:id', component: ViewGameComponent },
        { path: 'streaming', component: StreamingComponent },
        { path: 'reccomendations', component: ReccomendationsComponent },
        { path: 'watchlists', component: WatchlistsComponent },

        //routes for logged in users
        // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
        { path: 'forum/create-thread', component: CreateThreadComponent, canActivate: [AuthGuard] },
        { path: 'rate', component: ViewRatingsComponent,  canActivate: [AuthGuard]  },

        // admin-only routes: probably dont need admin/home TBT
        { path: 'admin/game/new', component: GameFormComponent, canActivate: [AuthGuard, AdminAuthGuard]},
        { path: 'admin/game/:id', component: GameFormComponent, canActivate: [AuthGuard, AdminAuthGuard]},
        { path: 'admin/game', component: GameComponent,  canActivate: [AuthGuard, AdminAuthGuard]},


        //wildcard for fallthrough cases.
        { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
      AuthService,
      AuthGuard,
//      UserService,
      AdminAuthGuard,
      GameInfoService,
      GameService,
      UserAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
