import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./lists-slice";
import cardSlice from "./cards-slice";
import userSlice from "./users-slice";

export default configureStore({
  reducer: {
    lists: listSlice.reducer,
    cards: cardSlice.reducer,
    users: userSlice.reducer
  },
  devTools: process.env.NODE_ENV !== "production",
});
