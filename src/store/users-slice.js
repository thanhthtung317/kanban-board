import { createSlice } from "@reduxjs/toolkit";
import { users } from "../normalize-data";

const userSlice = createSlice({
  name: "users",
  initialState: users,
  reducers: {
      
  },
});

export const userAction = userSlice.actions;

export default userSlice;
