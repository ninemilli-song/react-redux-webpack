/**
 * Created by songxg on 16/6/8.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import Pager from '../components/Pager';

class Purchase extends React.Component {
    render () {
        console.log('purchase render', this.props);
        console.log('purchase params id: ', this.props.params.id);
        return (
            <Pager>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
                Hello! Purchase!!!<br/>
            </Pager>
        );
    }
}

export default connect(state => ({
    purchase: state.purchase
}), dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
}))(Purchase);