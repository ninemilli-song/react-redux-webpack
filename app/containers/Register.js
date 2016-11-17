/**
 * Created by songxg on 16/7/10.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Form, FormGroup, FormControl, Button, ControlLabel, Checkbox } from 'react-bootstrap';
import * as Actions from '../actions/register';

class Register extends React.Component {
    render () {
        console.log('Register render', this.props);
        console.log('Register params id: ', this.props.params.id);
        const { state } = this.props;
        return (
            <div>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail" validationState={ state.mobile.vState ? 'success' : 'error'}>
                        <Col componentClass={ControlLabel} sm={2}>
                            mobile
                        </Col>
                        <Col sm={10}>
                            <FormControl type="mobile" placeholder="Mobile" ref="mobile" onChange={ this.handleMobileInput.bind(this) } />
                            <ControlLabel>{ state.mobile.vState ? '' : state.mobile.errMsg }</ControlLabel>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword" validationState={ state.password.vState ? 'success' : 'error'}>
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" ref="password" onChange={ this.handlePwdInput.bind(this) } />
                            <ControlLabel>{ state.password.vState ? '' : state.password.errMsg }</ControlLabel>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox>Remember me</Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="button" onClick={ this.signIn.bind(this) }>
                                Sign in
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }

    signIn () {
        const { actions, state } = this.props;
        console.log('register', this.refs);

        if (state.mobile.vState && state.password.vState) {
            //actions.signIn();
        }
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

export default connect(state => ({
    state: state.register
}), dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
}))(Register);