import { createSelector } from "@reduxjs/toolkit";

const listSelector = state => state.lists;

const selectedList = createSelector(listSelector, (list)=>list)

export default selectedList