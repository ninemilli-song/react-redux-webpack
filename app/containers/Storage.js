/**
 * Created by songxg on 16/6/30.
 * Storage module container
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Storage extends React.Component {
    render () {
        console.log('storage render', this.props);
        console.log('storage params id: ', this.props.params.id);
        return (
            <h1>Hello! storage!!!</h1>
        );
    }
}

export default connect(state => ({
    state: state.purchase
}), null)(Storage);