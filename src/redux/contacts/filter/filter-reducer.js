import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './filter-actions';

const filter = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
});

export default filter;
