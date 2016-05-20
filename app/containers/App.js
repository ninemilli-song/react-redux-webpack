/**
 * Created by songxg on 16/4/30.
 * page frame include header, leftBar and mainContent
 */

import '../css/app.less';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import Header from './Header.js';

class App extends React.Component {
    render () {
        return (
            <div>
                <div className="JXC-head">
                    <Header />
                </div>

                <div className="JXC-container">
                    <div className="JXC-center JXC-column">
                        {
                            this.props.children
                        }
                    </div>

                    <div className="JXC-left JXC-column">
                        left
                    </div>
                </div>

                <div className="JXC-footer">
                    <h1>footer</h1>
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    hello: state.hello
}), dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
}))(App);