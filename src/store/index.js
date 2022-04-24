import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";

export default configureStore({
    reducer: {
        data: dataSlice.reducer
    },
    devTools: process.env.NODE_ENV !== 'production'
})
