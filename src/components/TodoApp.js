import React from 'react';
import {addTodo, removeTodo, changeStatus} from '../actions/todoActions'
import {connect} from 'react-redux';
import TodoAdd from './TodoAdd';
import TodoItem from './TodoItem';
import Header from './common/Header'
import Footer from './common/Footer'

class TodoApp extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.todoRow = this.todoRow.bind(this);
    }

    todoRow(item, index) {
        return (<TodoItem data={item} key={index} changeStatus={this.props.changeStatus} removeTodo={this.props.removeTodo} />);
    }
    removeTodo(id){
        this.props.removeTodo(id);
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-offset-3 col-lg-6">
                    <TodoAdd addTodo={this.props.addTodo}/>
                    <ul className="list-group">{this.props.items.map(this.todoRow)}</ul>
                </div>
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
        addTodo: text => dispatch(addTodo(text)),
        removeTodo: id => dispatch(removeTodo(id)),
        changeStatus: id => dispatch(changeStatus(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);