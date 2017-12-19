// Core
import React from 'react';
import { render } from 'react-dom';
//Instruments
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

render(
    <Provider store = { store }>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
