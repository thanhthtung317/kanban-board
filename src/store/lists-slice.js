import { createSlice } from "@reduxjs/toolkit";
import {lists} from '../normalize-data'

const listSlice = createSlice({
    name: 'lists',
    initialState: lists,
    reducers: {

    }
})

export const listAction = listSlice.actions;

export default listSlice;