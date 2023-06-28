import axios from 'axios';

axios.defaults.baseURL= 'https://649332ad428c3d2035d17c89.mockapi.io'

export const getPhonebook = async () => {
    const {data} = await axios('/contacts')
    return data
}

export const addContact = async ({ name, number }) => {
    const {data} = await axios.post('/contacts', {name, number})
    return data
}

export const deleteContact = async (id) => {
    const {data} = await axios.delete(`/contacts/${id}`)
    return data
}