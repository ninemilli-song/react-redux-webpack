/**
 * Created by songxg on 16/7/23.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pager from '../components/Pager';
import IconButton from '../components/IconButton';
import { Row, Col } from 'antd/lib/layout';
import 'antd/lib/layout/style';
//import Table from '../components/Table';
import Button from 'antd/lib/button';
import 'antd/lib/button/style';
import './style/enterprise.less';
import Modal from 'antd/lib/modal';
import 'antd/lib/modal/style';
import * as Actions from '../actions/enterprise';

import Table from 'antd/lib/table';
import 'antd/lib/table/style';

import Form from 'antd/lib/form';
import 'antd/lib/form/style';

import Input from 'antd/lib/input';
import 'antd/lib/input/style';

import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style';

import '../css/enterprise.less';

const FormItem = Form.Item;

const columns = [{
    title: '名称',
    dataIndex: 'name',
    width: '40%'
}, {
    title: '上次登录',
    dataIndex: 'lastLogin',
    width: '20%'
}, {
    title: '权限',
    dataIndex: 'role',
    width: '15%',
    render: (text, record) => {
        console.log(record);
        return (<div className='role'>
                    <span>{ record.role.text }</span>
                </div>);
    }
}, {
    title: '订购',
    dataIndex: 'pay',
    className: 'pay',
    width: '15%',
    render: (text, record) => {
        return (<div className='pay'>
                    <div className='text-btn'>订购</div>
                    <div className='text-btn'>信息</div>
                </div>);
    }
}, {
    title: '操作',
    dataIndex: 'operate',
    className: 'operate',
    width: '10%',
    render: (text, record) => {
        return (
            <div className='operate'>
                <IconButton type="edit" className='icon-btn' title={ `编辑` } data={ `${record}` } />
                <IconButton type="delete" className='icon-btn' title={ `删除` } data={ `${record}` } />
            </div>
        );
    }
}];

class Enterprise extends React.Component {

    render () {
        const { prefixCls, state } = this.props;

        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };

        return (
            <Pager className={`${prefixCls}`}>
                <div className='page-title'>我的企业</div>
                <div className='page-content'>
                    <Row>
                        <Col span={ 18 }>
                            <Table
                                columns={ columns } dataSource={ state.data } />
                        </Col>
                        <Col span={ 6 }>
                            <div className='add-enterprise'>
                                <div className='add-enterprise-button'>
                                    <Button type='primary' onClick={ this._openAddDialog.bind(this) }>新建企业</Button>
                                    <Modal title='新建企业'
                                        onOk={ this._addEnterprise.bind(this) }
                                        onCancel={ this._cancelAddEnterprise.bind(this) }
                                        visible={ state.addDiaVisible } >
                                        <Form>
                                            <FormItem {...formItemLayout} label='企业名称'>
                                                <Input ref='enterpriseName' id='enterpriseName' placeholder='请输入企业名'></Input>
                                            </FormItem>
                                            <FormItem {...formItemLayout} label='企业本位币'>
                                                <Input ref='enterpriseCurrency' id='enterpriseCurrency' placeholder='请输入企业本位币'></Input>
                                            </FormItem>
                                            <FormItem {...formItemLayout} label='企业行业'>
                                                <Input ref='enterpriseIndustry' id='enterpriseIndustry' placeholder='请输入企业行业'></Input>
                                            </FormItem>
                                            <FormItem {...formItemLayout} label='企业记帐时间'>
                                                <DatePicker ref='enterpriseDate' />
                                            </FormItem>
                                        </Form>
                                    </Modal>
                                </div>
                                <div className='add-enterprise-text'>
                                    <span>您可以再创建8企业</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Pager>
        );
    }

    _openAddDialog () {
        const { actions } = this.props;
        actions.showAddDia(true);
    }

    _cancelAddEnterprise () {
        const { actions } = this.props;
        actions.showAddDia(false);
    }

    _addEnterprise () {
        console.log(this.refs);
        const { enterpriseName, enterpriseCurrency, enterpriseIndustry, enterpriseDate } = this.refs;
        let name = enterpriseName.value,
            currency = enterpriseCurrency.value,
            industry = enterpriseIndustry.value,
            date = enterpriseDate.value;
    }

}

Enterprise.defaultProps = {
    prefixCls: 'enterprise'
}

export default connect(state => ({
    state: state.enterprise
}), dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
}))(Enterprise);