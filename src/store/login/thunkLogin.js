import { createAsyncThunk } from "@reduxjs/toolkit"
import { logOutUser, loginUser, registerUser } from "api/phonebookAPI"


export const registerUserThunk = createAsyncThunk('login/singUp', async (newUser) => {
    return await registerUser(newUser)
})

export const loginUserThunk = createAsyncThunk('login/singIn', async (user) => {
    return await loginUser(user)
})

export const logOutUserThunk = createAsyncThunk('login/logOut', async () => {
    return await logOutUser()
})