import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ContentEffects, ContentReducer } from "src/app/store";

@NgModule({
  declarations: [

	],
	imports: [
		EffectsModule.forFeature([ContentEffects]),
		StoreModule.forFeature('content', ContentReducer)
		// StoreModule.forFeature('feedback', FeedbackReducer)	
	]

})
export class ContentStoreModule { }