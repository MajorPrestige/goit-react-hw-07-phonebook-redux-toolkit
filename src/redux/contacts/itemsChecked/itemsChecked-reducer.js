import { createReducer } from '@reduxjs/toolkit';
import {
  toggleCheckedContact,
  clearCheckedContacts,
} from './itemsChecked-actions';

const itemsChecked = createReducer([], {
  [toggleCheckedContact]: (store, { payload }) => {
    if (store.includes(payload)) {
      return store.filter(el => el !== payload);
    }

    store.push(payload);
  },
  [clearCheckedContacts]: (_, { payload }) => payload,
});

export default itemsChecked;
