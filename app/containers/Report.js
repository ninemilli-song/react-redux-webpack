/**
 * Created by songxg on 16/6/30.
 * Report module container
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Report extends React.Component {
    render () {
        console.log('Report render', this.props);
        console.log('Report params id: ', this.props.params.id);
        return (
            <h1>Hello! Report!!!</h1>
        );
    }
}

export default connect(state => ({
    state: state.purchase
}), null)(Report);