/**
 * Created by songxg on 16/7/17.
 */

/**
 * Summary:
 *  validate password
 *  the password must contain character(upper and lower), number and special code.constructor.
 *  0 - pwd length illegal
 *  1 - password have not digital number.
 *  2 - password have not upper case.
 *  3 - password have not lower case.
 *  4 - password have not special character.
 *  5 - password validate success
 * @param pwd
 * @returns {number}
 */
export function validatePassword(pwd) {
    let modes = 5;
    //正则表达式验证符合要求的
    //大于6位，包含字母、数字和特殊字符
    if (pwd.length < 6 || pwd.length > 12) return 0;
    if (!(/\d/.test(pwd))) return 1; //数字
    if (!(/[a-z]/.test(pwd))) return 3; //小写
    if (!(/[A-Z]/.test(pwd))) return 2; //大写
    if (!(/\W/.test(pwd))) return 4; //特殊字符

    return modes;
}

/**
 * Summary:
 *  validate phone
 * @param phone
 * @returns {boolean}
 */
export function validatePhone(phone) {
    var reg = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i;
    if (!reg.test(phone)) {
        return false;
    }
    return true;
}

/**
 * Summary:
 *  validate userName
 * @param userName
 * @returns {boolean}
 */
export function validateUserName(text) {
    text = text.trim();
    if (!text) {
        return false;
    }
    else {
        return true;
    }
}