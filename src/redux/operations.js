import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchRequest,
  fetchSuccess,
  fetchError,
} from './actions';

const fetchContacts = () => dispatch => {
  dispatch(fetchRequest());

  axios
    .get('http://localhost:3000/contacts')
    .then(({ data }) => dispatch(fetchSuccess(data)))
    .catch(error => dispatch(fetchError(error)));
};

const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };
  dispatch(addContactRequest());
  axios
    .post('http://localhost:3000/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`http://localhost:3000/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, fetchContacts };
