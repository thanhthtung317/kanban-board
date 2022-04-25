import { createSlice } from "@reduxjs/toolkit";
import { cards } from "../normalize-data";


const cardSlice = createSlice({
    name: "cards", 
    initialState: cards, 
    reducers: {

    }
})

export const cardActions = cardSlice.actions

export default cardSlice