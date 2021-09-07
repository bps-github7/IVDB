import { MaterialModule } from './../../modules/shared/material/material.module';
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

const routes : Route [] = [
	{path : '', children : [
			{path : '', redirectTo : 'login' },
			{path : 'login', component : LoginComponent},
		]
	},
	{
		path : 'create-account', component : CreateAccountComponent
	}
]

@NgModule({
	declarations: [
    LoginComponent,
    CreateAccountComponent
  ],
	imports: [
		MaterialModule,
		CommonModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes)
	]
})
export class AuthModule {

}