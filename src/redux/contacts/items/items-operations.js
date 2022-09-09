import { getContacts, postContacts, deleteContactsApi } from 'api/api';
import {
  fetchContactsSuccess,
  fetchContactsLoading,
  fetchContactsError,
  addContactsLoading,
  addContactsSuccess,
  addContactsError,
  deleteContactsLoading,
  deleteContactsSuccess,
  deleteContactsError,
} from './items-actions';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsLoading());
  getContacts()
    .then(data => {
      dispatch(fetchContactsSuccess(data));
    })
    .catch(err => {
      dispatch(fetchContactsError(err.message));
    });
};

export const addContacts = contact => (dispatch, getState) => {
  const {
    contacts: {
      items: { items },
    },
  } = getState();

  const duplicateContact = items.find(item => item.number === contact.number);

  if (duplicateContact?.number === contact.number) {
    alert(`Number:${contact.number} is already in your contacts`);
    return;
  }

  dispatch(addContactsLoading());
  postContacts(contact)
    .then(data => {
      dispatch(addContactsSuccess(data));
    })
    .catch(err => dispatch(addContactsError(err.message)));
};

export const deleteContacts = id => dispatch => {
  dispatch(deleteContactsLoading());
  deleteContactsApi(id)
    .then(_ => dispatch(deleteContactsSuccess(id)))
    .catch(err => dispatch(deleteContactsError(err.message)));
};
