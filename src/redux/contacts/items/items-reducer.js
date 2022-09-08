import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  deleteCheckedContacts,
} from 'redux/contacts/items/items-actions';

const initialStore = [
  {
    id: '1',
    name: 'Dan',
    number: '123412312351',
  },
  {
    id: '2',
    name: 'Prestige',
    number: '12312321312',
  },
];

const items = createReducer(initialStore, {
  [addContact]: (store, { payload }) => {
    const duplicateContact = store.find(
      contact => contact.number === payload.number
    );

    if (duplicateContact?.number === payload.number) {
      alert(`Number:${payload.number} is already in your contacts`);
      return store;
    }

    store.push(payload);
  },
  [deleteContact]: (store, { payload }) =>
    store.filter(el => el.id !== payload),
  [deleteCheckedContacts]: (_, { payload }) => payload,
});

export default items;
