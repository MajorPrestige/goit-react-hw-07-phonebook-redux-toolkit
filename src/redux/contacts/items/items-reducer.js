import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  deleteCheckedContacts,
  fetchContactsSuccess,
  fetchContactsError,
  fetchContactsLoading,
} from 'redux/contacts/items/items-actions';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const items = createReducer(initialState, {
  [fetchContactsLoading]: store => {
    store.loading = true;
    store.error = null;
  },

  [fetchContactsSuccess]: (store, { payload }) => {
    store.items = payload;
    store.loading = false;
  },

  [fetchContactsError]: (store, { payload }) => {
    store.error = payload;
    store.loading = false;
  },

  [addContact]: (store, { payload }) => {
    const duplicateContact = store.find(contact => contact.number === payload.number);

    if (duplicateContact?.number === payload.number) {
      alert(`Number:${payload.number} is already in your contacts`);
      return store;
    }

    store.push(payload);
  },

  [deleteContact]: (store, { payload }) => store.filter(el => el.id !== payload),

  [deleteCheckedContacts]: (_, { payload }) => payload,
});

export default items;
