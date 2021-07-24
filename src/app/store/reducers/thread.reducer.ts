import * as actions from '../actions/thread.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Thread } from 'src/app/models/contrib/thread.model';

// need to export thread model from here, for this example. hopefully we can find a workaround


export const threadAdapter = createEntityAdapter<Thread>();
export interface State extends EntityState<Thread> { }

const defaultThread = {
	ids: [],
	entities : {}
}

export const initialState: State = threadAdapter.getInitialState(defaultThread);

export const ThreadReducer = createReducer(
  initialState,

	//2. had to make action 'contents' here, action does not work.
	// contents was the identifier of variable passed to readContentSuccess
  //3. also, had to make this an object for entityAdapter to know what to do with it (even though it already was made an object)
	on(actions.readThreadsSuccess, (state, {threads}) => {
		return threadAdapter.addMany(threads, state)
		
	}),

  on(actions.createThread, (state, action) => {
		return threadAdapter.addOne(action, state);
  }),

  on(actions.deleteThread, (state, action) => {
    return threadAdapter.removeOne(action.id, state);
  }),

	//4. updateOne method expects {id, changes : <change object emitted by firestore doc reference when updated>} 
  on(actions.updateThread, (state, action) => { 
		return threadAdapter.updateOne({id : action.id, changes : action.data}, state);

  })
	
);


// create the default selectors
export const getThreadState = createFeatureSelector<State>('thread');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = threadAdapter.getSelectors(getThreadState);