/**
 * User: clint
 * Date: 18/09/2018
 * Time: 20:34
 *
 * Milner.io
 */

import {GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, GET_CONTACT, UPDATE_CONTACT} from '../../actions/types';

const initialState = {
    contacts: [],
    contact: {}
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_CONTACTS: {
            return {
                ...state,
                contacts: action.payload
            }
        }
        case GET_CONTACT: {
            return {
                ...state,
                contact: action.payload
            }
        }
        case ADD_CONTACT: {
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        }
        case UPDATE_CONTACT: {
            return {
                ...state,
                contacts: state.contacts.map( (contact) => {
                    return (contact.id === action.payload.id) ? action.payload : contact;
                })
            }
        }
        case DELETE_CONTACT: {
            return {
                ...state,
                contacts: state.contacts.filter((contact) => {
                    return contact.id !== action.payload;
                })
            }
        }
        default: return state;
    }
}