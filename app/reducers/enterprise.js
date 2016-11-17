/**
 * Created by songxg on 16/8/14.
 */
import { ENTERPRISE_SHOW_ADDDIA } from '../constants/actionsTypes.js';

const initState = {
    addDiaVisible: false,
    data: [{
        name: 'I am a test enterprise!',
        lastLogin: '20160903',
        role: {
            id: 1,
            text: '管理员'
        },
    }]
};

export default function (state = initState, action) {
    switch (action.type) {
        case ENTERPRISE_SHOW_ADDDIA:
            return Object.assign({}, state, action.data);
        default :
            return state;
    }
}