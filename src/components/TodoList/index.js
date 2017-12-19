//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Instruments
import { bindActionCreators } from 'redux';
import { object, func } from 'prop-types';
import actions from '../../actions';
import { uid } from '../../helpers';
//Components
import ToDo from '../ToDo';

class TodoList extends Component {
    static propTypes = {
        todos:      object,
        addTodo:    func.isRequired,
        toggleTodo: func.isRequired
    };
    constructor () {
        super();

        this.handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit (event) {
        const input = event.target;
        const text = input.value;
        const isEntryKey = (event.which === 13);
        console.log(`is entry key --> ${event.which}`);
        const isLongEnough = text.length > 0;

        if (isEntryKey && isLongEnough) {
            input.value = '';
            this.props.addTodo(text);
        }
    };
    render () {
        const { todos, toggleTodo } = this.props;
        const generatedKey = uid();
        const toggleClick = id => event => toggleTodo(id);
        const todoList = todos.toJS().map(i => {
            return (
                <li
                    className = 'todo_item'
                    key = { generatedKey }
                    onClick = { toggleClick(i.id) }>
                    <ToDo todo = { i } />
                </li>
            );
        });

        return (
            <div className = 'todo'>
                <input
                    className = 'todo_entry'
                    placeholder = 'Add todo'
                    onKeyDown = { this.handleSubmit }
                    type = "text" />
                <ul className = 'todo_list'>
                    { todoList }
                </ul>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
   todos: state
});
const mapDispatchToProps = (dispatch) => ({
    addTodo: bindActionCreators(actions.add_todo, dispatch),
    toggleTodo: bindActionCreators(actions.toggle_todo, dispatch)
});
/*const mapDispatchToProps = (dispatch) => {
    return {
        addTodo:    (text) => dispatch(actions.add_todo(text)),
        toggleTodo: (id) => dispatch(actions.toggle_todo(id))
    }
};*/
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
