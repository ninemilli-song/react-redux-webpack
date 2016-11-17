/**
 * Created by songxg on 16/6/5.
 */
import { PURCHASE_MENU, SELL_MENU, STORAGE_MENU, REPORT_MENU, INFO_MENU, SET_SUB_MENU } from '../constants/actionsTypes'

const initState = {
    page: '',
    menuList: [],
    subMenu: ''
}

function leftMenu (state = initState, action) {
    switch (action.type) {
        case PURCHASE_MENU:
        case SELL_MENU:
        case STORAGE_MENU:
        case REPORT_MENU:
        case INFO_MENU:
            return Object.assign({}, state, {
                'page': action.data.page,
                'menuList': action.data.menuList
            });
        case SET_SUB_MENU:
            return Object.assign({}, state, {
                'subMenu': action.data
            });
        default:
            return state;
    }
};

export default leftMenu;