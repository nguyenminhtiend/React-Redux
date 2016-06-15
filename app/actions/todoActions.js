import * as actionTypes from './actionTypes';

export function addToDo(text) {
    return {
        type: actionTypes.ADD_TODO,
        text: text
    };
}