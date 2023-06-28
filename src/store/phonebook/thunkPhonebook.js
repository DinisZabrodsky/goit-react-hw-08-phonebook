import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContact, deleteContact, getPhonebook } from "api/phonebookAPI";


export const getPhonebookThunk = createAsyncThunk('phonebook/get', async () => {
    return await getPhonebook()
})

export const addContactThunk = createAsyncThunk('phonebook/add', async (data) => {
    return await addContact(data)
})

export const deleteContactThunk = createAsyncThunk('phonebook/delete', async (id) => {
    return await deleteContact(id)
})