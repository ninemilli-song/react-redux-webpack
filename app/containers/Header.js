/**
 * Created by songxg on 16/4/30.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/header';
import { Nav, NavItem } from 'react-bootstrap';

class Header extends React.Component {
    render () {
        return (
            <Nav bsStyle='pills' activeKey={ 3 } onSelect={ this.handlerSelect.bind(this) } >
                <NavItem eventKey={ 1 } href='/home'>NavItem 1 content</NavItem>
                <NavItem eventKey={ 2 } href='/home'>NavItem 2 content</NavItem>
                <NavItem eventKey={ 3 } href='/home'>NavItem 3 content</NavItem>
            </Nav>
        );
    }

    handlerSelect () {

    }
}

export default connect(state => ({
    state: state.header
}), dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
}))(Header);