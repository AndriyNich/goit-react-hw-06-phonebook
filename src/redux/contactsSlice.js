import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactInitialState = [
  { id: '1', name: 'ashdakd', number: '232323' },
  { id: '2', name: 'asdkfalsdj', number: '83017' },
  { id: '3', name: 'ldflsa', number: '0292932' },
  { id: '4', name: 'sfjh p;oi', number: '232323' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
