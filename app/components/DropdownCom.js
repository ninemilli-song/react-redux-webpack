/**
 * Created by songxg on 16/7/4.
 *
 * usage:
 *      const lists = [
 *          {type: 'normal', label: 'a'},
 *          {type: 'normal', label: 'b'},
 *          {type: 'divider'},
 *          {type: 'normal', label: 'c'}
 *      ];
 *      <DropdownCom alignment='right' datas={ lists } title={`李维民`} selectedCb={ this.userListSelected.bind(this)  } />
 */
import React from 'react';
import {Dropdown, MenuItem } from 'react-bootstrap';
import '../css/dropdownCom.less';

class DropdownCom extends React.Component {

    render () {
        let { datas, alignment, title } = this.props;

        return (
            <Dropdown id='dropdown-custom-menu'>
                <a herf='#' bsRole='toggle' >{ title }</a>
                <Dropdown.Menu className={`dropdown-alignment-${alignment} dropdown-container`}>
                    {
                        datas.map( (item, index) => {
                            let i;
                            if (item.type == 'normal') {
                                i = <MenuItem eventKey={ index } key={`DropdownCom_${index}`} onSelect={ this.onSelect.bind(this) }>{ item.label }</MenuItem>
                            }
                            else if (item.type == 'divider') {
                                i = <MenuItem divider key={`DropdownCom_${index}`} />
                            }
                            return i;
                        } )
                    }
                </Dropdown.Menu>
            </Dropdown>
        )
    }

    onSelect (eventKey, event) {
        const { selectedCb, datas } = this.props;
        if (selectedCb) {
            selectedCb(datas[eventKey]);
        }
    }
}

DropdownCom.propTypes = {
    alignment: React.PropTypes.string
}

Dropdown.defaultProps = {
    aligment: 'left'
}

export default DropdownCom;