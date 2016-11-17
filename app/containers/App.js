/**
 * Created by songxg on 16/4/30.
 * page frame include header, leftBar and mainContent
 */

import '../css/app.less';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import Header from './Header';
import $ from 'jquery';
import windowResizer from '../utils/windowResizer.js'

class App extends React.Component {
    render () {
        const pageName = this.props.location.pathname.split('/')[1];

        console.log('App render params: ', this.props);
        console.log('App render children: ', this.props.children);

        const { state, children, params } = this.props;

        return (
            <div className="scm-body">
                <div className="JXC-head" ref='header'>
                    <Header ref='header' page={ pageName } subMenu={ params.subMenu } onPageChanged={this.setPage.bind(this)} />
                </div>

                <div className="JXC-container clearfix" ref='container'>
                    <div className="JXC-center JXC-column" ref='contentPanel'>
                        {
                            children
                        }
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount () {
        console.log('App componentDidMount');
        this.pageSizer();
        this.bindEvents();

        //set page
        //const pageName = this.props.location.pathname.split('/')[1];
        //this.setPage(pageName);
    }

    componentDidUpdate () {
        console.log('App componentDidUpdate');

        this.pageSizer();
    }

    bindEvents () {
        $(window).bind('resize', this.pageSizer.bind(this));
    }

    pageSizer () {
        const { header, footer, contentPanel } = this.refs;
        //页面头部高度
        const hh = $(header).height();
        console.log('header height: ', hh);
        //页面脚部高度
        const fh = $(footer).height();
        console.log('footer height: ', fh);
        //屏幕整体高度
        const wh = $(window).height();
        console.log('window height: ', wh);
        //当前内容区域的高度
        $(contentPanel).attr('style', 'height: auto');
        const cch = $(contentPanel).height();

        console.log('contentPanel: ', cch);

        //当前内容高度大于充满屏幕时的内容高度时，以前内容高度为准
        let ch = wh - 110;
        ch = cch > ch ? cch : ch;

        //设置内容高度
        //$(contentPanel).height(ch);
    }

    setPage (page) {
        //const { actions } = this.props;
        //actions.setPage(page);
    }
}

export default connect(state => ({
    state: state.app
}), dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
}))(App);