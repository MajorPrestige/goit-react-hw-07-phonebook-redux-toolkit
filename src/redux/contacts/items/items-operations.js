import { getContacts } from 'api/api';
import { fetchContactsSuccess, fetchContactsLoading, fetchContactsError } from './items-actions';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsLoading());
  getContacts()
    .then(data => {
      dispatch(fetchContactsSuccess(data));
    })
    .catch(error => {
      dispatch(fetchContactsError(error.message));
    });
};
