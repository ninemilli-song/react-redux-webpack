/**
 * Created by songxg on 16/4/5.
 */
import { combineReducers } from 'redux'
import app from './app'
import header from './header'
import leftMenu from './leftMenu'
import purchase from './purchase'
import register from './register'
import enterprise from './enterprise'

const rootReducer = combineReducers({
    app,
    header,
    leftMenu,
    purchase,
    register,
    enterprise
});

export default rootReducer;
