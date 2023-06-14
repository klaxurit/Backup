import { createStore, combineReducers } from 'redux';
import displayFormatReducer from './reducers/displayFormat';

const rootReducer = combineReducers({
  displayFormat: displayFormatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer);