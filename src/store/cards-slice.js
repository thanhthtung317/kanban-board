import { createSlice } from "@reduxjs/toolkit";
import { cards } from "../normalize-data";


const cardSlice = createSlice({
    name: "cards", 
    initialState: {
        ...cards,
        selectedCard: ''
    }, 
    reducers: {
        setSelectedCard(state, action){
            state.selectedCard = action.payload
        }
    }
})

export const cardActions = cardSlice.actions

export default cardSlice