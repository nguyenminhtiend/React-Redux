import React from 'react';
export default class TodoAdd extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        if(event.charCode == 13){
           this.props.addTodo(event.target.value);
            event.target.value = '';
            event.preventDefault();
        }
    }
    render() {
        return (
            <form>
                <input type="text" onKeyPress={this.onSubmit} />
            </form>
        );
    }
}