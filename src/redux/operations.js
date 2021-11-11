import {
  fetchAllContacts,
  fetchAddContacts,
  fetchDeleteContacts,
} from '../services/contactsAPI';
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

  fetchAllContacts()
    .then(({ data }) => dispatch(fetchSuccess(data)))
    .catch(error => dispatch(fetchError(error)));
};

const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };
  dispatch(addContactRequest());
  fetchAddContacts(contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  fetchDeleteContacts(id)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, fetchContacts };
