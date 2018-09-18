/**
 * User: clint
 * Date: 18/09/2018
 * Time: 20:29
 *
 * Milner.io
 */

import { combineReducers } from 'redux';
import contactReducer from './contactReducer';
import justAnotherReducer from './justAnotherReducer';

export default combineReducers({
    contact: contactReducer,
    just: justAnotherReducer
});