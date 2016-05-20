/**
 * Created by songxg on 16/4/16.
 */
import { HAHA_ITEM2 } from '../constants/actionsTypes.js'

function hello2 (state = 'CHA_Hello2', action) {
    switch (action.type) {
        case HAHA_ITEM2:
            return action.text
        default :
            return state
    }
};

export default hello2;