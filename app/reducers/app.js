/**
 * Created by songxg on 16/6/26.
 */
import { SET_PAGE_NAME } from '../constants/actionsTypes'

const initState = {
    'page': 'home'
}

function app (state = initState, action) {
    switch (action.type) {
        case SET_PAGE_NAME:
            return Object.assign({}, state, {
                'page': action.pageName
            });
        default :
            return state
    }
};

export default app;