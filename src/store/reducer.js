import { loginReduser } from "./login/loginReduser";
import { contactsReducer } from "./phonebook/contactsReducer";
import { filterReducer } from "./phonebook/filterReducer";


export const reducer = {
    login: loginReduser,
    phonebok: contactsReducer,
    filter: filterReducer
}