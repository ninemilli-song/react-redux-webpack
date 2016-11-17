/**
 * Created by songxg on 16/7/10.
 */
import { REGISTER_EMAIL, REGISTER_PASSWORD, REGISTER_PHONE } from '../constants/actionsTypes'

const initState = {
    mobile : {
        value: '',
        vState: true,
        errMsg: '',
        placehoder: ''
    },
    email : {
        value: '',
        vState: true,
        errMsg: '',
        placehoder: ''
    },
    password: {
        value: '',
        vState: true,
        errMsg: '',
        placeholder: ''
    }
}

function register (state = initState, action) {
    switch (action.type) {
        case REGISTER_PHONE:
            return Object.assign({}, state, {
                mobile: action.data
            });
        case REGISTER_EMAIL:
            return Object.assign({}, state, {
                email: action.data
            });
        case REGISTER_PASSWORD:
            return Object.assign({}, state, {
                password: action.data
            });
        default:
            return state;
    }
}

export default register;