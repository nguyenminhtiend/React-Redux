import { combineReducers } from 'redux-immutable';
import globalReducer from 'containers/App/reducer';

export default function createReducer(injectedReducers) {
  return combineReducers({
    global: globalReducer,
    ...injectedReducers
  });
}
