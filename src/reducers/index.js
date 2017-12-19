// Core
import { List, Map } from 'immutable';
//Instruments
import types from '../actions/types';

const initialState = List([]);

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.ADD_TODO:
            return state.push(Map(action.payload)); // concat
        case types.TOGGLE_TODO:
            return state.map( t => {
                if (t.get('id') === action.payload) {
                    return t.update('isDone', isDone => !isDone);
                } else {
                    return t;
                }
            });
        default:
            return state;
    }
};

