import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumDashboardComponent } from './forum/forum-dashboard/forum-dashboard.component';



@NgModule({
  declarations: [ForumDashboardComponent],
  imports: [
    CommonModule
  ]
})

//there was another website (look in history)
// that showed how you can export the components from routing module
export class AdminModule { }
