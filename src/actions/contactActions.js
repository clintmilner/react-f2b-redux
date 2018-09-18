/**
 * User: clint
 * Date: 18/09/2018
 * Time: 21:08
 *
 * Rebasoft - Network Intelligence
 */

import {GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT} from './types';

export const getContacts = () => {
    return {
        type: GET_CONTACTS
    };
};

export const addContact = (contact) => {
    return {
        type: ADD_CONTACT,
        payload: contact
    };
};

export const deleteContact = (id) => {
    return {
        type: DELETE_CONTACT,
        payload: id
    };
};