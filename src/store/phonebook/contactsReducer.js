import { createSlice } from "@reduxjs/toolkit";
import {initialState} from './initialState'
import { addContactThunk, deleteContactThunk, getPhonebookThunk } from "./thunkPhonebook";

const phonebookSlice = createSlice({
    name: 'phonebook',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getPhonebookThunk.pending, getPending)
        .addCase(getPhonebookThunk.fulfilled, getFulfilled)
        .addCase(getPhonebookThunk.rejected, getRejected)
        .addCase(addContactThunk.pending, getPending)
        .addCase(addContactThunk.fulfilled, addContact)
        .addCase(addContactThunk.rejected, getRejected)
        .addCase(deleteContactThunk.pending, getPending)
        .addCase(deleteContactThunk.fulfilled, deleteContact)
        .addCase(deleteContactThunk.rejected, getRejected)
    }
})

export const contactsReducer = phonebookSlice.reducer

function getPending ({contacts}) {
    contacts.isLoading = true
}

function getFulfilled ({contacts}, {payload}) {
    contacts.isLoading = false
    contacts.error = null
    contacts.items = payload

}

function getRejected({contacts}, {payload}) {
    contacts.isLoading = false
    contacts.error = payload
}

function addContact({contacts}, {payload}) {
    contacts.isLoading = false
    contacts.error = null
    contacts.items.push(payload)
}

function deleteContact ({contacts}, {payload}) {
    contacts.isLoading = false
    contacts.error = null
    const index = contacts.items.findIndex(contact => contact.id === payload);
    contacts.items.splice(index, 1);
}


// const phonebookSlice = createSlice({
//     name: 'phonebook',
//     initialState, 
//     reducers: {
//         addContactsReducer: (state, { payload }) => {
//             state.contacts.push(payload)
//         },

//         deleteContactsReducer: (state, { payload }) => {
//             const filterList = state.contacts.filter(({id}) => id !== payload)
//             state.contacts = [...filterList]
//         },

//         addFilterReducer: (state, {payload}) => {
//             state.filter = payload
//         }
//     }
// })


// export const {addContactsReducer, deleteContactsReducer, addFilterReducer} = phonebookSlice.actions
