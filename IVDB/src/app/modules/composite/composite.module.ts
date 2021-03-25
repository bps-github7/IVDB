import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeComponent, NotFoundComponent],
  imports: [
      RouterModule,
    CommonModule
  ]
})
export class CompositeModule { }
