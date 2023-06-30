import { createSlice } from "@reduxjs/toolkit";
import {initialState} from './initialState';
import { logOutUserThunk, loginUserThunk, registerUserThunk } from './thunkLogin';


const loginSlice = createSlice({
    name: 'login',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(registerUserThunk.pending, loginPending)
        .addCase(registerUserThunk.fulfilled, loginFulfilled)
        .addCase(registerUserThunk.rejected, loginRejected)
        .addCase(loginUserThunk.pending, loginPending)
        .addCase(loginUserThunk.fulfilled, loginFulfilled)
        .addCase(loginUserThunk.rejected, loginRejected)
        .addCase(logOutUserThunk.pending, loginPending)
        .addCase(logOutUserThunk.fulfilled, logOutFulfilled)
        .addCase(logOutUserThunk.rejected, loginRejected)
    }
})

export const loginReduser = loginSlice.reducer

function loginFulfilled ({login}, {payload}) {
    login.token = payload.token
    login.name = payload.user.name
    login.email = payload.user.email
    login.error = false
    login.loading = false
}

function logOutFulfilled ({login}) {
    login.token = ''
    login.name = ''
    login.email = ''
    login.error = false
    login.loading = false
}

function loginPending ({login}) {
    login.loading = true
    login.error = false
}

function loginRejected ({login}) {
    login.error = true
    login.loading = false
}