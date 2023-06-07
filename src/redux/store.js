import { configureStore, createAction, createReducer, createSlice } from '@reduxjs/toolkit'

// export const addContact = createAction('contacts/addContact');
// export const deleteContact = createAction('contacts/deleteContact');
// export const updateFilter = createAction('filter/updateFilter');

const initialContacts = [
  { id: 'id-1', name: 'Rosie', number: '459-12-56' },
  { id: 'id-2', name: 'Hermion', number: '443-89-12' },
  { id: 'id-3', name: 'Eden', number: '645-17-79' },
  { id: 'id-4', name: 'Annie', number: '227-91-26' },
]

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact(state, action) {
      return [...state, action.payload]
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload)
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilter(state, action) {
      return action.payload
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const { updateFilter } = filterSlice.actions;
// const contactsReducer = createReducer(initialContacts, {
//   [addContact]: (state, action) => [...state, action.payload],
//   [deleteContact]: (state, action) => state.filter(contact => contact.id !== action.payload),
// });

// const filterReducer = createReducer('', {
//   [updateFilter]: (state, action) => action.payload
// });

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});