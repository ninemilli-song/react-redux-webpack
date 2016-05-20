/**
 * Created by songxg on 16/4/5.
 */
import { combineReducers } from 'redux'
import header from './header.js'
import hello2 from './hello2'

const rootReducer = combineReducers({
    header,
    hello2
});

export default rootReducer;
