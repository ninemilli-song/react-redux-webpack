/**
 * Created by songxg on 16/4/30.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

class Home extends React.Component {
    render () {
        return (
            <h1>Hello! Home!!!</h1>
        );
    }
}

export default connect(state => ({
    hello: state.hello
}), dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
}))(Home);