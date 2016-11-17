/**
 * Created by songxg on 16/7/23.
 */
import './style/pager.less';
import React from 'react';

class Pager extends React.Component {

    render () {
        let { children, className } = this.props;

        return (
            <div className={`scm-pager ${className}`}>
                {children}
            </div>
        )
    }
}

export default Pager;