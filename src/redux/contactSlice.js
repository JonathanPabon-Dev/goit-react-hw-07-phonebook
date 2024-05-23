import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
    addContact: (state, action) => {
      state.contacts.push(action.payload);
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    deleteContact: (state, action) => {
      const id = action.payload.id;
      state.contacts = state.contacts.filter(contact => contact.id !== id);
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setContacts, addContact, deleteContact, setFilter } =
  contactSlice.actions;
export default contactSlice.reducer;
