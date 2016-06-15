import React from 'react';
import {addToDo} from '../actions/todoActions'
import {connect} from 'react-redux';
import TodoAdd from './TodoAdd';

class TodoApp extends React.Component {
    todoRow(todo, index) {
        return <li key={index}>{todo.text}</li>;
    }

    render() {
        return (
            <div>
                <TodoAdd addTodo={this.props.addTodo} />
                <ul>{this.props.items.map(this.todoRow)}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: text => dispatch(addToDo(text)),
    };
}

export const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp);