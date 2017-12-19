// Core
import { applyMiddleware, createStore, compose } from 'redux';
//Instruments
import { createLogger } from 'redux-logger';
import reducers from '../reducers';


const dev = process.env.NODE_ENV === 'development';
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const middleware = [];
const composeEnchansers = devtools && dev ? devtools : compose;

const logger = createLogger({
    duration:  true,
    collapsed: true,
    diff:      true,
    colors: {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#ff0005'
    }
});

if (dev) {
    middleware.push(logger);
}

export default createStore(reducers, composeEnchansers(applyMiddleware(...middleware)));