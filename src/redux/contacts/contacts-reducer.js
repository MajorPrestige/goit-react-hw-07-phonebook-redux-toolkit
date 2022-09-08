import { combineReducers } from '@reduxjs/toolkit';

import items from './items/items-reducer';
import filter from './filter/filter-reducer';
import itemsChecked from './itemsChecked/itemsChecked-reducer';

const contactsReducer = combineReducers({
  items,
  itemsChecked,
  filter,
});

export default contactsReducer;
