/**
 * Created by songxg on 16/6/30.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

class Sell extends React.Component {
    render () {
        console.log('sell render', this.props);
        console.log('sell params id: ', this.props.params.id);
        return (
            <h1>Hello! Sell!!!</h1>
        );
    }
}

export default connect(state => ({
    state: state.purchase
}), null)(Sell);