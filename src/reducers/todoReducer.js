import * as actionTypes from '../actions/actionTypes';

var defaultState = {
    items: [
        {id: new Date().getTime(), text: 'abc', completed: true}
    ]
};


export default function todoReducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            var newState = Object.assign({}, state, {
                items: [...state.items, Object.assign({}, {id: new Date().getTime(), text: action.text, completed: false})]
            });
            return newState;
        case actionTypes.REMOVE_TODO:
            var newState = Object.assign({}, state);
            newState.items = state.items.filter(todo => todo.id !== action.id);
            return newState;
        case actionTypes.COMPLETE_TODO:
            var item = state.items.filter(todo => todo.id === action.id)[0];
            item.completed = !item.completed;
            var newState = Object.assign({}, state);
            newState.items = state.items.map(todo => todo.id === action.id ? item : todo);
            return newState;
        default:
            return state;
    }
}