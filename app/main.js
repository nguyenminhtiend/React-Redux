import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {TodoAppContainer} from './components/TodoApp'
import reducer from './reducers/todoReducer';

const store = createStore(reducer);

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './styles/style.css';

render(
    <Provider store={store}>
        <TodoAppContainer />
    </Provider>
    , document.getElementById('main')
);