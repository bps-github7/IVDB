import { AuthGuardService } from './../../modules/shared/guards/auth-guard.service';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './../../modules/shared/material/material.module';
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { UsersEffects } from 'src/app/store/effects/users.effects';
import { UsersReducer } from 'src/app/store/reducers/users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NotAuthGuardService } from 'src/app/modules/shared/guards/not-auth-guard.service';

const routes : Route [] = [
	{path : '', children : [
			{path : '', redirectTo : 'login' },
			{
				path : 'create-account', component : CreateAccountComponent
			},
			{path : 'login', component : LoginComponent},

		], 
		// prevent authenticated users from accessing sign on and create account page
		canActivate : [NotAuthGuardService]
	},
	
]

@NgModule({
	declarations: [
    LoginComponent,
    CreateAccountComponent
  ],
	imports: [
		MaterialModule,
		StoreModule.forFeature('users', UsersReducer),
		EffectsModule.forFeature([UsersEffects]),
		CommonModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes)
	]
})
export class AuthModule {

}