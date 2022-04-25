import { createSelector } from "@reduxjs/toolkit";

const cardSelector = (state) => state.cards;

const selectedCard = createSelector(cardSelector, (cards) => cards);

export default selectedCard;
