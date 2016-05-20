/**
 * Created by songxg on 16/4/13.
 */
import { HAHA_ITEM } from '../constants/actionsTypes.js'

function hello (state = 'Hello Header', action) {
    switch (action.type) {
        case HAHA_ITEM:
            return action.text
        default :
            return state
    }
};

export default hello;