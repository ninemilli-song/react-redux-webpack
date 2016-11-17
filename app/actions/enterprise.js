/**
 * Created by songxg on 16/8/14.
 */
import { ENTERPRISE_SHOW_ADDDIA } from '../constants/actionsTypes';

export function showAddDia (show) {
    show = show === true ? show : false;
    return {
        type: ENTERPRISE_SHOW_ADDDIA,
        data: {
            addDiaVisible: show
        }
    }
}