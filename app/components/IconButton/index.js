/**
 * Created with JetBrains WebStorm.
 * Author: songxg
 * Date: 16/9/4
 * Time: 下午4:22
 */
import React from 'react';
import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style';

function noop () {}

class IconButton extends React.Component {

    render () {
        let { prefixCls, className, type, title } = this.props;

        return (
            <div className={`${prefixCls} ${className}`} onClick={ this._onClick.bind(this) } title={ `${title}` }>
                <Icon type={ `${type}` } />
            </div>
        )
    }

    _onClick () {
        const { data, onClick } = this.props;
        onClick(data);
    }
}

IconButton.defaultProps = {
    prefixCls: 'iconButton',
    type: 'edit',
    data: {},
    onClick: noop,
    title: ''
}

export default IconButton;