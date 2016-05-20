/**
 * Created by songxg on 16/5/3.
 */
import { HAHA_ITEM } from '../constants/actionsTypes';

export function console(text) {
    return {
        type: HAHA_ITEM,
        text
    }
}