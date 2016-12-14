/**
 * Created by songxg on 16/7/10.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Pager from '../components/Pager';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/register';

import { Row, Col } from 'antd/lib/layout';
import 'antd/lib/layout/style';

import Input from 'antd/lib/input';
import 'antd/lib/input/style';

import Checkbox from 'antd/lib/checkbox';
import 'antd/lib/checkbox/style';

import Button from 'antd/lib/button';
import 'antd/lib/button/style';

import './style/register.less';

import SplitBar from '../components/SplitBar';

class Register extends React.Component {
    render () {
        console.log('Register render', this.props);
        console.log('Register params id: ', this.props.params.id);
        const { state, prefixCls } = this.props;
        return (
            <Pager className={ `${prefixCls}` }>
                <div className='page-title'>登录/注册</div>
                <div className='page-content'>
                    <Row gutter={ 16 }>
                        <Col span={ 3 }>
                            <div className={ `text-right ${prefixCls}-label` }>
                                username
                            </div>
                        </Col>
                        <Col span={ 10 }>
                            <Input type="text" placeholder="输入您想要设置的用户名" ref="userName" onChange={ this.handleUserNameInput.bind(this) } />
                        </Col>
                    </Row>
                    <SplitBar />
                    <Row gutter={ 16 }>
                        <Col span={ 3 }>
                            <div className={ `text-right ${prefixCls}-label` }>
                                mobile
                            </div>
                        </Col>
                        <Col span={ 10 }>
                            <Input type="mobile" placeholder="Mobile" ref="mobile" onChange={ this.handleMobileInput.bind(this) } />
                        </Col>
                    </Row>
                    <SplitBar />
                    <Row gutter={ 16 }>
                        <Col span={ 3 }>
                            <div className={ `text-right ${prefixCls}-label` }>
                                Password
                            </div>
                        </Col>
                        <Col span={ 10 }>
                            <Input type="password" placeholder="Password" ref="password" onChange={ this.handlePwdInput.bind(this) } />
                        </Col>
                    </Row>
                    <SplitBar />
                    <Row gutter={ 16 }>
                        <Col span={ 3 }></Col>
                        <Col span={ 10 }>
                            <Checkbox>Remember me</Checkbox>
                        </Col>
                    </Row>
                    <SplitBar />
                    <Row gutter={ 16 }>
                        <Col span={ 3 }></Col>
                        <Col span={ 10 }>
                            <Button onClick={ this.signIn.bind(this) }>
                                Sign in
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Pager>
        );
    }

    signIn () {
        const { actions, state } = this.props;
        console.log('register', this.refs);

        if (state.mobile.vState && state.password.vState) {
            //actions.signIn();
        }
    }

    handleUserNameInput () {
        const userName = ReactDOM.findDOMNode(this.refs.userName).value;
        this.props.actions.validateUserName(userName);
    }

    handleMobileInput () {
        const mobile = ReactDOM.findDOMNode(this.refs.mobile).value;
        this.props.actions.validateMobile(mobile);
    }

    handlePwdInput () {
        const password = ReactDOM.findDOMNode(this.refs.password).value;
        this.props.actions.validatePwd(password);
    }
}

Register.defaultProps = {
    prefixCls: 'register'
}

export default connect(state => ({
    state: state.register
}), dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
}))(Register);