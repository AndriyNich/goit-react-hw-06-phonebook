import { combineReducers } from 'redux';

const contactInitialState = [
  { id: '1', name: 'ashdakd', number: '232323' },
  { id: '2', name: 'asdkfalsdj', number: '83017' },
  { id: '3', name: 'ldflsa', number: '0292932' },
  { id: '4', name: 'sfjh p;oi', number: '232323' },
];

const filterInitialState = '';

const contactsReducer = (state = contactInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];
    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
