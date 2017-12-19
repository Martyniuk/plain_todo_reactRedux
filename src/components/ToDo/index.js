// Core
import React, { Component } from 'react';
import PropTypes  from 'prop-types';

const style_strike = {
    textDecoration: 'line-through'
};
const style_default = {
    textDecoration: 'none'
};

export default class ToDo extends Component {
    static propTypes = {
        todo: PropTypes.object.isRequired
    };
    render () {
        const { todo } = this.props;
        const toDoToRender = todo.isDone
            ?  <span style = { style_strike }>{ todo.text }</span>
            :  <span style = { style_default }>{ todo.text }</span>;
        return (
            toDoToRender
        );
    }
}
