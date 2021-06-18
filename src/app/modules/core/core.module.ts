import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AuthService } from './auth.service';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    DropdownComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  providers: [
    // AuthService,
  ],
  exports: [
      RouterModule,
      HomeComponent,
      DropdownComponent,
      NotFoundComponent,
			NavbarComponent
  ]
})
/*Credit for these lines: Menhdi Benmoja 
@ https://medium.com/@benmohamehdi/angular-best-practices-coremodule-vs-sharedmodule-25f6721aa2ef*/
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. You should only import Core modules in the AppModule only.');
    }
  }
}