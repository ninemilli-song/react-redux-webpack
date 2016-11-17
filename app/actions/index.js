/**
 * Created by songxg on 16/4/13.
 */

import { SET_PAGE_NAME } from '../constants/actionsTypes';
import menuList from '../constants/menuList'

export function setPage (pageName = menuList[0]) {
    return {
        type: SET_PAGE_NAME,
        pageName
    }
}