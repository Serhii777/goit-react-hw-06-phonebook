import {
  CHANGE_FILTER,
  GET_VISIBLE_CONTACTS,
  ADD_CONTACT,
  IS_NEW_CONTACT_UNIQUE,
  REMOVE_CONTACT,
  RESET_NEW_CONTACT_UNIQUE,
} from "./contactTypes";

const changeFilter = (filter) => {
  return {
    type: CHANGE_FILTER,
    payload: {
      filter,
    },
  };
};

const getVisibleContacts = (contacts, filter, name) => {
  return {
    type: GET_VISIBLE_CONTACTS,
    payload: {
      contacts,
      filter,
      name,
    },
  };
};

const addContact = (data) => {
  return {
    type: ADD_CONTACT,
    payload: {
      // data,
    },
  };
};

const isNewContactUnique = (name) => {
  return {
    type: IS_NEW_CONTACT_UNIQUE,
    payload: {
      name,
    },
  };
};

const removeContact = (id) => {
  return {
    type: REMOVE_CONTACT,
    payload: {
      id,
    },
  };
};

const resetNewContactUnique = (newContactUnique) => {
  return {
    type: RESET_NEW_CONTACT_UNIQUE,
    payload: {
      newContactUnique,
    },
  };
};

export default {
  changeFilter,
  getVisibleContacts,
  addContact,
  isNewContactUnique,
  removeContact,
  resetNewContactUnique,
};

// changeFilter = (filter) => {
//   this.setState({ filter });
// };

// getVisibleContacts = () => {
//   const { contacts, filter } = this.state;

//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

// addContact = (data) => {
//   let newContact = {
//     id: uuidv4(),
//     name: data.name,
//     number: data.number,
//   };

//   const isNewContactUnique = () => {
//     const { contacts } = this.state;
//     return contacts.find(({ name }) => name === newContact.name);
//   };

//   let newContactUnique = isNewContactUnique();

//   this.setState((prevState) => {
//     return !newContactUnique
//       ? { contacts: [...prevState.contacts, newContact] }
//       : { newContactUnique: newContactUnique };
//   });
// };

// removeTask = (contactId) => {
//   this.setState((prevState) => {
//     return {
//       contacts: prevState.contacts.filter(({ id }) => id !== contactId),
//     };
//   });
// };

// resetNewContactUnique = () =>
//   setTimeout(this.setState({ newContactUnique: false }), 2000);
