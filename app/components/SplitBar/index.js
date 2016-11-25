/**
 * Created with JetBrains WebStorm.
 * Author: songxg
 * Date: 16/11/25
 * Time: 下午5:14
 */
import './style/index.less';
import React from 'react';

class SplitBar extends React.Component {

    render () {
        let { className, type, prefixCls } = this.props;

        let typeCls = ``;
        if (type == `block`) {
            typeCls = `block`;
        }

        return (
            <div className={`${prefixCls} ${className} ${prefixCls}-${typeCls}`}>
            </div>
        )
    }
}

SplitBar.defaultProps = {
    prefixCls: 'SplitBar',
    className: '',
    height: 0,
    type: 'block', // block line dashline and so on ...
}

export default SplitBar;