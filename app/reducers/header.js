/**
 * Created by songxg on 16/4/13.
 */
import { HAHA_ITEM, HEADER_SWITCH_MENU } from '../constants/actionsTypes.js'

const initState = {
    menuKey: '',
    subKey: ''
};

function hello (state = initState, action) {
    switch (action.type) {
        case HAHA_ITEM:
            return action.text;
        case HEADER_SWITCH_MENU:
            return Object.assign({}, state, {
                menuKey: action.data.page,
                subKey: action.data.subPage
            });
        default :
            return state;
    }
};

export default hello;