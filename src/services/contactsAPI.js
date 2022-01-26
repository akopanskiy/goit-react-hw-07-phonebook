import axios from 'axios';

const URL = 'https://phonebook-kopa.herokuapp.com/api/';

export const fetchAllContacts = () => {
  return axios.get(`${URL}contacts`);
};

export const fetchAddContacts = contact => {
  return axios.post(`${URL}contacts`, contact);
};
export const fetchDeleteContacts = id => {
  return axios.delete(`${URL}contacts/${id}`);
};
