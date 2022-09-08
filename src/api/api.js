import axios from 'axios';

axios.defaults.baseURL = 'https://631a0f668e51a64d2bf4adfd.mockapi.io/api/Contacts';

export const getContacts = async () => {
  const { data } = await axios.get('/');
  return data;
};
