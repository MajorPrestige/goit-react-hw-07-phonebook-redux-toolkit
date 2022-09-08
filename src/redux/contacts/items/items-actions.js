import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/items/add');
export const deleteContact = createAction('contacts/items/delete');
export const deleteCheckedContacts = createAction('contacts/items/delete-checked');

export const fetchContactsLoading = createAction('contacts/items/fetch/loading');
export const fetchContactsSuccess = createAction('contacts/items/fetch/success');
export const fetchContactsError = createAction('contacts/items/fetch/error');
