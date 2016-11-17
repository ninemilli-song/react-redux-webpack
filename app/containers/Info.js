/**
 * Created by songxg on 16/6/30.
 * Info module container
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Info extends React.Component {
    render () {
        console.log('Info render', this.props);
        console.log('Info params id: ', this.props.params.id);
        return (
            <h1>Hello! Info!!!</h1>
        );
    }
}

export default connect(state => ({
    state: state.purchase
}), null)(Info);