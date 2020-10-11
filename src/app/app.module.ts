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
import { ViewGameComponent } from './view-game/view-game.component';
import { ViewRatingsComponent } from './view-ratings/view-ratings.component';
import { ViewConsoleComponent } from './view-console/view-console.component';
import { ProfileService } from './common/services/profile.service';
import { ReactiveDefaultFormControlComponent } from './form-controls/reactive-default-form-control/reactive-default-form-control.component';
import { ReactiveSelectFormControlComponent } from './form-controls/reactive-select-form-control/reactive-select-form-control.component';
import { ReactiveTextareaFormControlComponent } from './form-controls/reactive-textarea-form-control/reactive-textarea-form-control.component';
import { CredentialFormControlComponent } from './form-controls/credential-form-control/credential-form-control.component';
import { DisableControlDirective } from './common/directives/disable-control.directive';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


//environment
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    EditProfileComponent,
    ViewProfileComponent,
    DropdownComponent,
    FavoriteComponent,
    PanelComponent,
    ZippyComponent,
    HomeComponent,
    SignInComponent,
    CreateAccountComponent,
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
    ViewGameComponent,
    ViewRatingsComponent,
    ViewConsoleComponent,
    ReactiveDefaultFormControlComponent,
    ReactiveSelectFormControlComponent,
    ReactiveTextareaFormControlComponent,
    CredentialFormControlComponent,
    DisableControlDirective
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
    
        //trying something new here
        { path: 'console/:company/:name', component: ViewConsoleComponent },
        

        
        { path: 'sign_in/createAccount/forgotPassword', component: ForgotPasswordComponent },
        { path: 'sign_in/createAccount', component: CreateAccountComponent},
        { path: 'sign_in', component: SignInComponent },
        { path: 'search', component: SearchComponent },
        // These paths are uid based- but maybe u want to amke them username based upon deployment!
        { path: 'sign_in/create_profile/:uid', component: EditProfileComponent, canActivate: [AuthGuard]},
        { path: 'sign_in/create_profile/:uid/update', component: EditProfileComponent, canActivate: [AuthGuard, UserAuthGuard] },
        { path: 'profile/:uid', component: ViewProfileComponent, canActivate: [AuthGuard] },

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
        ProfileService,
        UserService,
        AdminAuthGuard,
        GameInfoService,
        GameService,
        UserAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
