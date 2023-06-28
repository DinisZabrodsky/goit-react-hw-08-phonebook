import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import {ContactForm} from "./ContactForm/ContactForm";
import { FilterEl } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { useDispatch, useSelector } from 'react-redux'

import cssPhone from "./Phonebook.module.css";
import { addContactThunk, deleteContactThunk, getPhonebookThunk } from "store/phonebook/thunkPhonebook";
import { addFilterReducer } from "store/phonebook/filterReducer";
import { Loading } from "./Loading/Loading";


const getSelector = (state) => state.phonebok
const getFilter = (state) => state.filter
export function App () {
    
    const dispatch = useDispatch()
    const {contacts:{items, isLoading, error}} = useSelector(getSelector)
    const {value: filter} = useSelector(getFilter)
    const [first, setFirst] = useState(true)

    useEffect(()=>{
     dispatch(getPhonebookThunk())   
    },[dispatch])

    function addContact(e) {
        e.preventDefault();
        const newContact = {
            id: 'id-' + nanoid(5),
            name: e.target.name.value,
            number: e.target.number.value,
        };

        if (items.find(contact => contact.name === e.target.name.value)) {
            alert(`${newContact.name} is already in contacts.`);
            return;
        }


        setFirst(false);
        dispatch(addContactThunk(newContact))
        e.currentTarget.reset();

    }

    const onFilter = ({target: {value}}) => {
        dispatch(addFilterReducer(value))
    }

    const getContacts = () => {
        if(filter !== "") {
            const filterItem = items.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
            return filterItem
        }
        
    }

    const deleteContact = (e) => {
        if(first) {
            setFirst(false)
        }

        const id = e.target.dataset.id
        dispatch(deleteContactThunk(id))
    }


    return ( 
        <div className={cssPhone.conteiner}>
            <h1>Phonebook</h1>
            <ContactForm addContact={addContact}/>

            <h2>Contacts</h2>
            <FilterEl onFilter={onFilter} filterValue={filter} />

            <ul>
                {isLoading && <Loading />}
                {error && <li><p>Під час запиту виникла помилка</p></li>}
                {items.length !== 0 && !isLoading && 
                    <ContactList contacts={items} filterValue={filter} getContacts={getContacts()} deleteContact={deleteContact}/>
                }
                {items.length === 0 && !isLoading &&  <li><p>Список контактів пустий</p></li>}
            </ul>
    </div>
    )
}
