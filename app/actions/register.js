/**
 * Created by songxg on 16/7/10.
 */
import { REGISTER_EMAIL, REGISTER_PASSWORD, REGISTER_PHONE, REGISTER_USERNAME } from '../constants/actionsTypes'
import { validatePassword, validatePhone, validateText } from '../utils/form'

let validateData = {
    status: 'ok',
    message: ''
}


/**
 * validate form date
 * @param type
 * @param value
 */
function validateForm(type, value) {
    const emailReg = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
    const pwdReg = /^(w){6,20}$/;
    switch(type) {
        case 'userName':
            if (!validateUserName(value)) {
                return Object.assign({}, validateData, {
                    status: 'error',
                    message: 'the input userName\'s format is incorrect'
                });
            }
            return Object.assign({}, validateData);
        case 'phone':
            if (!validatePhone(value)) {
                return Object.assign({}, validateData, {
                    status: 'error',
                    message: 'the input phone\'s format is incorrect'
                });
            }
            return Object.assign({}, validateData);
        case 'email':
            if (!emailReg.exec(value)) return Object.assign({}, validateData, {
                status: 'error',
                message: 'the input email\'s format is incorrect'
            });
            return Object.assign({}, validateData);
        case 'pwd':
            const vd = validatePassword( value );
            console.log('register action vd: ', vd);
            if (vd == 5) {
                return Object.assign({}, validateData);
            }
            else {
                let errmsg = '';
                switch (vd) {
                    case 0:
                        errmsg = 'pwd length must between 6 an 12';
                        break;
                    case 1 :
                        errmsg =  'password have not digital number';
                        break;
                    case 2 :
                        errmsg =  'password have not upper case';
                        break;
                    case 3 :
                        errmsg =  'password have not lower case';
                        break;
                    case 4 :
                        errmsg =  'password have not special character';
                        break;
                }

                return Object.assign({}, validateData, {
                    status: 'error',
                    message: errmsg
                });
            }
        default :
            return validateData;
    }
}

export function validateUserName (value) {
    const vd = validateForm('userName', value);
    if (vd.status == 'ok') {
        return {
            type: REGISTER_USERNAME,
            data: {
                value: value,
                vState: true,
                errMsg: ''
            }
        }
    }
    else {
        return {
            type: REGISTER_USERNAME,
            data: {
                value: value,
                vState: false,
                errMsg: vd.message
            }
        }
    }
}

export function validateMobile(value) {
    const vd = validateForm('phone', value);
    if (vd.status == 'ok') {
        return {
            type: REGISTER_PHONE,
            data: {
                value: value,
                vState: true,
                errMsg: ''
            }
        }
    }
    else {
        return {
            type: REGISTER_PHONE,
            data: {
                value: value,
                vState: false,
                errMsg: vd.message
            }
        }
    }
}

export function validateEmail(value) {
    const vd = validateForm('email', value);
    if (vd.status == 'ok') {
        return {
            type: REGISTER_EMAIL,
            data: {
                value: value,
                vState: true,
                errMsg: ''
            }
        }
    }
    else {
        return {
            type: REGISTER_EMAIL,
            data: {
                value: value,
                vState: false,
                errMsg: vd.message
            }
        }
    }
}

export function validatePwd (value) {
    const vd = validateForm('pwd', value);
    console.log('validateForm ', vd);
    if (vd.status == 'ok') {
        return {
            type: REGISTER_PASSWORD,
            data: {
                value: value,
                vState: true,
                errMsg: ''
            }
        }
    }
    else {
        return {
            type: REGISTER_PASSWORD,
            data: {
                value: value,
                vState: false,
                errMsg: vd.message
            }
        }
    }
}
