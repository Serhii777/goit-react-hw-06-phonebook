import {
  CHANGE_FILTER,
  GET_VISIBLE_CONTACTS,
  ADD_CONTACT,
  IS_NEW_CONTACT_UNIQUE,
  REMOVE_CONTACT,
  RESET_NEW_CONTACT_UNIQUE,
} from "./contactTypes";

const initialState = {
  contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
  name: "",
  number: "",
  newContactUnique: false,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return { ...state, filter: action.payload };

    case GET_VISIBLE_CONTACTS:
      return { ...state, contacts: action.payload };

    case ADD_CONTACT:
      return { ...state, filter: action.payload };

    case IS_NEW_CONTACT_UNIQUE:
      return { ...state, name: action.payload };

    case REMOVE_CONTACT:
      return { ...state, contacts: action.payload };

    case RESET_NEW_CONTACT_UNIQUE:
      return { ...state, newContactUnique: action.payload };

    default:
      return state;
  }
};

export default contactReducer;

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
