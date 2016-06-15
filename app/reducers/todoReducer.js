import * as actionTypes from '../actions/actionTypes';

var defaultState = {
    items: [
        {id: 1, text: 'abc'}
    ]
};


export default function todoReducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            var newState = Object.assign({}, state);
            newState.items = [...state.items, Object.assign({}, {text: action.text})];
            return newState;
        default:
            return state;
    }
}