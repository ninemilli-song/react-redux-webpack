/**
 * Created by songxg on 16/6/5.
 */
import { Clearfix, MenuItem } from 'react-bootstrap';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/leftMenu';
import '../css/leftMenu.less';
import { browserHistory } from 'react-router';
//import PubSub from 'pubsub-js';

class LeftMenu extends React.Component {
    render () {
        let { state, subMenu } = this.props;
        console.log('leftMenu render: ', this.props);

        return (
            <Clearfix>
                <ul className='dropdown-menu open left-menu'>
                    <MenuItem header>{state.page.text}</MenuItem>
                    {
                        state.menuList.map((item, index) => {
                            let active = false;
                            if (subMenu && subMenu == item.id) {
                                active = true;
                            }
                            return <MenuItem key={ index } eventKey={ item.id } active={ active } onSelect={ this.handlerSelect.bind(this) }>{ item.text }</MenuItem>
                        })
                    }
                </ul>
            </Clearfix>
        );
    }

    componentWillReceiveProps (nextProps) {
        const { page, subMenu } = nextProps;
        const oldPage = this.props.page;
        const oldSubMenu = this.props.subMenu;

        console.log('leftMenu componentWillReceiveProps: ' + nextProps.subMenu + ' --- ' + this.props.subMenu);

        if (page != oldPage) {
            this.setPage(page);
        }

        if (subMenu != oldSubMenu) {
            this.setSubMenu(subMenu);
        }
    }

    componentDidMount () {
        //PubSub.subscribe('MENU_CHANGED', this.refreshLeftMenu.bind(this));
        const { page, subMenu } = this.props;
        this.setPage(page);
        this.setSubMenu(subMenu);
    }

    componentWillUnmount () {
        //PubSub.unsubscribe('MENU_CHANGED');
    }

    setPage (headMenu) {
        const { actions } = this.props;
        actions[headMenu] && actions[headMenu]();
    }

    setSubMenu (subMenu) {
        const { actions } = this.props;
        actions.setSubMenu(subMenu);
    }

    handlerSelect (subMenu, event) {
        const { page, state } = this.props;
        browserHistory.push(`/${page}/${subMenu}`);
    }
}

export default connect(state => ({
    state: state.leftMenu
}), dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
}))(LeftMenu);