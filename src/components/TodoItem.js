import React from 'react';
export default class TodoItem extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.removeTodo = this.removeTodo.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
    }

    removeTodo() {
        this.props.removeTodo(this.props.data.id);
    }

    changeStatus(){
        this.props.changeStatus(this.props.data.id);
    }

    render() {
        return (<li className="list-group-item">
            <span className="pull-xs-left"><button type="button" onClick={this.changeStatus} className={'btn btn-sm ' + (this.props.data.completed ? 'btn-success-outline' : 'btn-secondary-outline')}><i className={"fa " + (this.props.data.completed ? 'fa-check-circle' : 'fa-check-circle-o')} aria-hidden="true"></i></button></span>
            <span className={'todo-item-text ' + (this.props.data.completed ? 'todo-item-completed' : '')}>{this.props.data.text}</span>
            <span className="pull-xs-right fa fa-times" onClick={this.removeTodo} aria-hidden="true"></span>
        </li>);
    }
}