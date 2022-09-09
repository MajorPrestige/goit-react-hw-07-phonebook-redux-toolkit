import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/items/add');
export const deleteContact = createAction('contacts/items/delete');
export const deleteCheckedContacts = createAction('contacts/items/delete-checked');

export const fetchContactsLoading = createAction('contacts/items/fetch/loading');
export const fetchContactsSuccess = createAction('contacts/items/fetch/success');
export const fetchContactsError = createAction('contacts/items/fetch/error');

export const addContactsLoading = createAction('contacts/items/add/loading');
export const addContactsSuccess = createAction('contacts/items/add/success');
export const addContactsError = createAction('contacts/items/add/error');

export const deleteContactsLoading = createAction('contacts/items/delete/loading');
export const deleteContactsSuccess = createAction('contacts/items/delete/success');
export const deleteContactsError = createAction('contacts/items/delete/error');
