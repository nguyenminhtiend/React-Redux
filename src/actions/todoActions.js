import * as actionTypes from './actionTypes';

export function addTodo(text) {
    return {
        type: actionTypes.ADD_TODO,
        text: text
    };
}

export function removeTodo(id) {
    return {
        type: actionTypes.REMOVE_TODO,
        id: id
    };
}

export function changeStatus(id) {
    return {
        type: actionTypes.COMPLETE_TODO,
        id: id
    };
}