import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactsSuccess,
  fetchContactsError,
  fetchContactsLoading,
  addContactsLoading,
  addContactsSuccess,
  addContactsError,
  deleteContactsLoading,
  deleteContactsSuccess,
  deleteContactsError,
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
  [addContactsLoading]: store => {
    store.loading = true;
    store.error = null;
  },

  [addContactsSuccess]: (store, { payload }) => {
    store.items.unshift(payload);
    store.loading = false;
  },

  [addContactsError]: (store, { payload }) => {
    store.error = payload;
    store.loading = false;
  },

  [deleteContactsLoading]: store => {
    store.loading = true;
    store.error = null;
  },

  [deleteContactsSuccess]: (store, { payload }) => {
    console.log(payload);
    store.items = store.items.filter(el => el.id !== payload);
    store.loading = false;
  },

  [deleteContactsError]: (store, { payload }) => {
    store.error = payload;
    store.loading = false;
  },

  // [deleteCheckedContacts]: (_, { payload }) => payload,
});

export default items;
