import { createAction } from '@reduxjs/toolkit';

export const toggleCheckedContact = createAction(
  'contacts/itemsChecked/toggle'
);
export const clearCheckedContacts = createAction('contacts/itemsChecked/clear');

// export const toDelete = payload => {
//   return {
//     type: CONTACTS_TO_DELETE,
//     payload,
//   };
// };

// export const clearChecked = payload => {
//   return {
//     type: CLEAR_CHECKED_CONTACTS,
//     payload,
//   };
// };
