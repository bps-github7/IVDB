// the dreaded boilerplate...
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// helper modules for content - set up routes, ngrx store and reusable componentry
import { ContentRoutingModule } from './content-routing.module';
import { ContentStoreModule } from './content.index';
import { SharedModule } from '../shared/shared.module';

// components declared in content module
import { ContentComponent } from './content.component';
import { ContentBrowserComponent } from './content-browser/content-browser.component';
import { ContentViewComponent } from './content-view/content-view.component';


@NgModule({
  declarations: [
		ContentComponent,
		ContentBrowserComponent,
		ContentViewComponent
	],
  imports: [
    CommonModule,
		SharedModule,
		ContentStoreModule,
		ContentRoutingModule
  ]
})
export class ContentModule { }