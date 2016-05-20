/**
 * Created by songxg on 16/4/13.
 */

import { HAHA_ITEM } from '../constants/actionsTypes';

export function haha(text) {
    return {
        type: HAHA_ITEM,
        text
    }
}