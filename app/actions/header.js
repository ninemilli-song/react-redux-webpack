/**
 * Created by songxg on 16/5/3.
 */
import { HAHA_ITEM, HEADER_SWITCH_MENU } from '../constants/actionsTypes';

export function switchMenu (item) {
    return {
        type: HEADER_SWITCH_MENU,
        data: item
    }
}