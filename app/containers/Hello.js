/**
 * Created by songxg on 16/3/31.
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

class Hello extends React.Component {
    render () {
        return (
            <div onClick={this.clickHandler.bind(this)}>
                Hello! {this.props.name}! !{this.props.hello}
                {
                    this.props.children
                }
            </div>
        );
    }

    clickHandler () {
        const actions = this.props.actions;
        actions.haha('click haha!!!!!');
    }
}

export default connect(state => ({
    hello: state.hello
}), dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
}))(Hello);

//export default Hello;