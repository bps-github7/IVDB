import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'

// reducers
import { UsersEffects } from 'src/app/store/effects/users.effects';

// effects
import { UsersReducer } from 'src/app/store/reducers/users.reducer';




@NgModule({
  declarations: [],
  imports: [
		StoreModule.forFeature('users', UsersReducer),
		EffectsModule.forFeature([UsersEffects])
	],
	exports: [ ]
})
export class SharedStoreModule { }
