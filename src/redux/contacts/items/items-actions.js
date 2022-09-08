import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/items/add');
export const deleteContact = createAction('contacts/items/delete');
export const deleteCheckedContacts = createAction(
  'contacts/items/delete-checked'
);
