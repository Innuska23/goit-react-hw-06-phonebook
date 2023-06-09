import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_CONTACTS } from 'components/Constants';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: DEFAULT_CONTACTS,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
        },
        deleteContact(state, action) {
            const i = state.findIndex(contact => contact.id === action.payload);
            state.splice(i, 1);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;