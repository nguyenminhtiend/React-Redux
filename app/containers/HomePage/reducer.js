import { fromJS } from 'immutable';
import { CHANGE_USERNAME, LOADED_QUOTATION } from './constants';

const initialState = fromJS({
  username: '',
  quotations: {}
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return state.set('username', action.name.replace(/@/gi, ''));
    case LOADED_QUOTATION:
      return state.set('quotations', action.quotations);
    default:
      return state;
  }
}

export default homeReducer;
