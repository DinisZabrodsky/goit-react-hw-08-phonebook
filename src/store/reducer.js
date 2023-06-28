import { contactsReducer } from "./phonebook/contactsReducer";
import { filterReducer } from "./phonebook/filterReducer";


export const reducer = {
    phonebok: contactsReducer,
    filter: filterReducer
}