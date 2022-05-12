import { createSlice } from "@reduxjs/toolkit";
import { lists } from "../normalize-data";

const listSlice = createSlice({
  name: "lists",
  initialState: { ...lists },
  reducers: {
    switchList(state, action) {
      const { prevListID, listID, cardID } = action.payload;
      //   console.log(listID, cardID);
      const isExisted = state.entities[listID].cards.some(
        (item) => item === cardID
      );
      if (!isExisted) {
        // console.log("not existed");
        state.entities[prevListID].cards = state.entities[
          prevListID
        ].cards.filter((item) => item !== cardID);
        state.entities[listID].cards.unshift(cardID);
      }
    },
    addCardToList(state, action) {
      const { currentListID, cardID } = action.payload;
      state.entities[currentListID].cards = [
        ...state.entities[currentListID].cards,
        cardID,
      ];
    },
  },
});

export const listAction = listSlice.actions;

export default listSlice;
