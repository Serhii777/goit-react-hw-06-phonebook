import { createStore, combineReducers } from "redux";



const reducer = (state = {}, action) => state;
// const rootReducer = combineReducers({ timerValue: timerReducer });

const initialState = {};

const store = createStore(
  reducer,
  // rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//     name: "",
//     number: "",
//     newContactUnique: false,
//   };