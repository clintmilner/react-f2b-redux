/**
 * User: clint
 * Date: 18/09/2018
 * Time: 21:08
 *
 * Rebasoft - Network Intelligence
 */
import axios from 'axios';
import {GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT} from './types';

export const getContacts = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
        type: GET_CONTACTS,
        payload: res.data
    });
};

export const deleteContact = (id) => async dispatch => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
        type: DELETE_CONTACT,
        payload: id
    });
};

export const addContact = (contact) => async dispatch => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', contact);
    dispatch({
        type: ADD_CONTACT,
        payload: res.data
    });
};