import { createSlice } from "@reduxjs/toolkit";
import {filterInitialState} from './initialState'



const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        addFilterReducer: (state, {payload}) => {
            state.value = payload
        }
    }
})

export const filterReducer = filterSlice.reducer
export const {addFilterReducer} = filterSlice.actions