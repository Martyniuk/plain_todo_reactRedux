//Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { List, Map } from 'immutable';
//Components
import TodoList from '../components/TodoList';

const dummyTodos = List([
    { id: 0, isDone: true,  text: 'make components' },
    { id: 1, isDone: false, text: 'design actions' },
    { id: 2, isDone: false, text: 'implement reducer' },
    { id: 3, isDone: false, text: 'connect components' }
]);

export default class App extends Component {
    render () {
        return (
            <div>
                <TodoList />
            </div>
        );
    }
}
