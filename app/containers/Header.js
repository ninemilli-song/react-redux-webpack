/**
 * Created by songxg on 16/4/30.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/header';
import '../css/header.less';
//import PubSub from 'pubsub-js';
//import DropdownCom from '../components/DropdownCom';
import menuType from '../constants/menuTypes';
import subMenus from '../constants/subMenuList';
import { browserHistory } from 'react-router';
//import { Menu, Dropdown, Icon } from 'antd';
import Menu from 'antd/lib/menu';
import 'antd/lib/menu/style';
import Dropdown from 'antd/lib/dropdown';
import 'antd/lib/dropdown/style';
import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style';

class Header extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render () {
        let { menuKey, subKey } = this.props.state;
        menuKey = menuKey != '' ? menuKey : this.props.page;
        subKey = subKey != '' ? subKey : this.props.subMenu;

        return (
            <div>
                <div className='nav-banner clearfix'>
                    <a className='logo'></a>
                    <div className='nav-bar'>
                        <ul className='pull-left list-inline' onClick={ this.clickHandler.bind(this) }>
                            {
                                menuType.map(function (item, index) {
                                    let className = menuKey == item.id ? 'nav-menu nav-menu-selected' : 'nav-menu';
                                    return <li className={ className } data-nav-key={ item.id } key={ index } >{ item.text }</li>
                                })
                            }
                        </ul>
                        <ul className='user-contact pull-right list-inline'>
                            <li className='item'>
                            </li>
                            <li className='item'>
                                <Dropdown overlay={this.props.myMenu} trigger={['click']}>
                                    <a className="ant-dropdown-link" href="#">
                                        我的 <Icon type="down" />
                                    </a>
                                </Dropdown>
                            </li>
                            <li className='item'>
                                <a>客户服务</a>
                            </li>
                            <li className='item' onClick={ this.goRegister.bind(this) }>
                                <a>注册&#8901;登录</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='nav-sub-menu'>
                    <ul className='list-inline' onClick={ this.subMenuClick.bind(this) }>
                        {
                            subMenus[menuKey].map(function (item, index) {
                                let className = subKey == item.id ? 'nav-submenu nav-submenu-selected' : 'nav-submenu';
                                return <li className={ className } data-nav-key={ item.id } key={ index } >{ item.text }</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }

    componentWillReceiveProps (nextProps) {
        console.log('header componentWillReceiveProps: ' + nextProps.page + ' --- ' + this.props.page);
        const { page, subMenu } = nextProps;
        const oldPage = this.props.page;
        const oldSubMenu = this.props.subMenu;

        if (page != oldPage || subMenu != oldSubMenu) {
            this.setPage(page, subMenu);
        }
    }

    componentDidMount () {
        const { page, subMenu } = this.props;
        console.log('header componetnDidMount: ', page + ' , ' + subMenu);
        this.setPage(page, subMenu);
    }

    handlerSelect (selectedKey) {
        //const actions = this.props.actions;
        //actions.switchMenu(selectedKey);

        //PubSub.publish('MENU_CHANGED', selectedKey);

        browserHistory.push(`/${selectedKey}`);
    }

    /**
     * 主菜单点击事件
     * @param e
     */
    clickHandler (e) {
        console.log('clickHandler: ', e.target.getAttribute('data-nav-key'));
        const selectedKey = e.target.getAttribute('data-nav-key');

        if (selectedKey) {
            browserHistory.push(`/${selectedKey}`);
        }
    }

    /**
     * go to register or sign in page
     */
    goRegister () {
        window.open(window.location.protocol + '//' + window.location.host + '/register');
    }

    /**
     * 子菜单点击事件
     * @param e
     */
    subMenuClick (e) {
        let { menuKey } = this.props.state;
        const selectedKey = e.target.getAttribute('data-nav-key');

        browserHistory.push(`/${menuKey}/${selectedKey}`);
    }

    setPage (page, subPage) {
        const { actions, onPageChanged } = this.props;
        actions.switchMenu({
            page,
            subPage
        });
        onPageChanged(page);
    }
}

Header.defaultProps = {
    myMenu: (
        <Menu>
            <Menu.Item key="0">
                <a href="/enterprise">企业</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="javascript: void(0)">成员</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">第三个</Menu.Item>
        </Menu>)
};

export default connect(state => ({
    state: state.header
}), dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
}))(Header);