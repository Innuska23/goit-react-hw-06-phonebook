import { createSlice, nanoid } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                return [...state, action.payload];
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
        deleteContact: {
            reducer(state, action) {
                return state.filter(contact => contact.id !== action.payload.id);
            },
            prepare(id) {
                return {
                    payload: {
                        id,
                    },
                };
            },
        },
        filterContact: {
            reducer(state, action) {
                return state.filter(contact =>
                    contact.name.toLowerCase().includes(action.payload.name)
                );
            },
            prepare(name) {
                return {
                    payload: {
                        name,
                    },
                };
            },
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;