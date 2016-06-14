import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello'

class App extends React.Component {
    render() {
        return (<div>
            <Hello />
        </div>)
    }
}

ReactDOM.render(<App/>, document.getElementById('main'));
