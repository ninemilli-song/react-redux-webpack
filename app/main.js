/**
 * Created by songxg on 16/3/30.
 */

import React from 'react';
import ReactDOM from 'react-dom';
//import Purchase from './containers/Purchase';
//import Sell from './containers/Sell';
import App from './containers/App';
//import Storage from './containers/Storage';
//import Report from './containers/Report';
//import Info from './containers/Info';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
//import routers from './constants/routerHash';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={ browserHistory }>
            <Route path='/' component={ App } >
                <IndexRedirect to='/purchase' />
                <Route path="/purchase" getComponent={ (location, cb) => {
                    require.ensure([], (require) => {
                        /*
                        * I'm using ES6 modules with import and export but webpack uses ES5,
                        * commonJS modules, so the require requests answers with an object containing
                        * default and all the other properties I'm exporting from that module.
                        *
                        * So I have to change the require('./x') requests to require('./x').default to make it work
                        *
                        * http://stackoverflow.com/questions/35969935/undefined-this-props-children-when-getting-
                        * async-component-with-react-router-and
                        *
                        * */
                        cb(null, require('./containers/Purchase').default)
                    })
                } }>
                    <IndexRedirect to='/purchase/apply' />
                    <Route path="/purchase/:subMenu" />
                </Route>
                <Route path="/sell" getComponent={ (location, cb) => {
                    require.ensure([], (require) => {
                        cb(null, require('./containers/Sell').default)
                    })
                } }>
                    <IndexRedirect to='/sell/billing' />
                    <Route path="/sell/:subMenu" />
                </Route>
                <Route path="storage" getComponent={ (location, cb) => {
                    require.ensure([], (require) => {
                        cb(null, require('./containers/Storage').default)
                    })
                } }>
                    <IndexRedirect to='/storage/allocation' />
                    <Route path="/storage/:subMenu" />
                </Route>
                <Route path="report" getComponent={ (location, cb) => {
                    require.ensure([], (require) => {
                        cb(null, require('./containers/Report').default)
                    })
                } }>
                    <IndexRedirect to='/report/allocation' />
                    <Route path="/report/:subMenu" />
                </Route>
                <Route path="info" getComponent={ (location, cb) => {
                    require.ensure([], (require) => {
                        cb(null, require('./containers/Info').default)
                    })
                } }>
                    <IndexRedirect to='/info/customer' />
                    <Route path="/info/:subMenu" />
                </Route>
                <Route path="enterprise" getComponent={ (location, cb) => {
                    require.ensure([], (require) => {
                        cb(null, require('./containers/Enterprise').default)
                    })
                } }>
                </Route>
            </Route>
            <Route>
                /**
                 * user register and login
                 */
                <Route path="register" getComponent={ (location, cb) => {
                    require.ensure([], (require) => {
                        cb(null, require('./containers/Register').default)
                    })
                }}>
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('example')
);