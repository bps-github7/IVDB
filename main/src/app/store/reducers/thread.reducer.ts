import * as actions from '../actions/thread.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Thread } from 'src/app/models/contrib/thread.model';



export const threadAdapter = createEntityAdapter<Thread>();
export interface State extends EntityState<Thread> { }

const defaultThread = {
	ids: [],
	entities : {}
}

export const initialState: State = threadAdapter.getInitialState(defaultThread);

export const ThreadReducer = createReducer(
  initialState,

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