import types from './types';
import { uid } from '../helpers';

export default Object.freeze({
    add_todo: (text) => ({
        type:    types.ADD_TODO,
        payload: {
            id:     uid(),
            isDone: false,
            text:   text
        }
    }),
    toggle_todo: (id) => ({
        type:    types.TOGGLE_TODO,
        payload: id
    })
});
