import axios from 'axios';

// axios.defaults.baseURL= 'https://649332ad428c3d2035d17c89.mockapi.io'
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const setToken = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const delToken = () => {
    axios.defaults.headers.common.Authorization = "";
}

export const registerUser = async (newUser) => {
        const {data} = await axios.post("/users/signup", newUser)
        if (data.token) {
            setToken(data.token)
        }
        return data 
}


export const loginUser = async (user) => {
    const {data} = await axios.post("/users/login", user)
    if (data.token) {
        setToken(data.token)
    }
    return data
}

export const logOutUser = async (user) => {
    const {data} = await axios.post("/users/logout")
    delToken()
    return data
}



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