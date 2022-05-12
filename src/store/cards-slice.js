import { createSlice } from "@reduxjs/toolkit";
import { cards } from "../normalize-data";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    ...cards,
    selectedCard: "",
  },
  reducers: {
    setSelectedCard(state, action) {
      state.selectedCard = action.payload;
    },
    createCard(state, action) {
      const {cardID, cardData} = action.payload
      const defaultCardData = {
        title: "",
        description: "",
        assignedTo: "",
      };
      const newCard = {
          id: cardID,
        ...defaultCardData,
        ...cardData,
      };
      state.entities = { ...state.entities, [cardID]: newCard };
      state.ids = [...state.ids, cardID];
    },
  },
});

export const cardActions = cardSlice.actions;

export default cardSlice;
