import axios from 'axios';

axios.defaults.baseURL = 'https://631a0f668e51a64d2bf4adfd.mockapi.io/api/Contacts';

export const getContacts = async () => {
  const { data } = await axios.get('/');
  return data;
};

export const postContacts = async contact => {
  const { data } = await axios.post('/', contact);
  return data;
};

export const deleteContactsApi = async id => {
  const { data } = await axios.delete(`/${id}`);
  return data;
};
