import { combineReducers } from 'redux';
import notes from './notes'
import inputs from './inputs'
import formDisplay from './formDisplay'

export default combineReducers({
    inputs,
    formDisplay,
    notes
})