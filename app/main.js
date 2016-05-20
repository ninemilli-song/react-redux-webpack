/**
 * Created by songxg on 16/3/30.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './containers/Hello';
import Home from './containers/Home';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={ hashHistory }>
            <Route path='/' component={ App } >
                <IndexRoute component={ Home } />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('example')
);