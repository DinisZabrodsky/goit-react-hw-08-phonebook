import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'

import { loginReduser } from "./login/loginReduser";
import { contactsReducer } from "./phonebook/contactsReducer";
import { filterReducer } from "./phonebook/filterReducer";


const persistLogin = {
	key: 'login',
	storage,
}

const persistPhonebook = {
    key: 'phonebook',
    storage
}

const persistPhonebookReduser = persistReducer(persistPhonebook, contactsReducer)

const persistLoginReduser = persistReducer(persistLogin, loginReduser)

export const reducer = {
    login: persistLoginReduser,
    phonebok: persistPhonebookReduser,
    filter: filterReducer
}