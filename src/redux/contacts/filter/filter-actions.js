import { createAction } from '@reduxjs/toolkit';

export const setFilter = createAction('contacts/filter/set');

// import { FILTER_CONTACTS } from 'redux/types';

// export const filterContacts = payload => {
//   return {
//     type: FILTER_CONTACTS,
//     payload,
//   };
// };
