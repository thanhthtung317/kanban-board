import React, { memo } from "react";
import { connect } from "react-redux";
import useInput from "../../hooks/useInput";
import useListContext from "../../hooks/useListContext";
import { cardActions } from "../../store/cards-slice";
import { listAction } from "../../store/lists-slice";

const NewCard = memo(({ className, createCard, addCardToList }) => {
    const [title, resetTitle, titleAttr] = useInput('')
    const [description, resetDesc, descAttr] = useInput('')
    const currentListID = useListContext()
  const handleSubmit = (e) => {
      e.preventDefault();
      // console.log("create new card testing");
      // console.log(title);
      // console.log(description);
      console.log(currentListID);
    resetTitle()
    resetDesc()
    const cardID = Date.now().toString();
    const cardData = {
        title,
        description
    }
    createCard({cardID, cardData})
    addCardToList({currentListID, cardID})
  };
  return (
    <form className={className} onSubmit={handleSubmit}>
      <h5>create new card</h5>
      <div className="field">
        <label htmlFor="">title</label>
        <textarea name="" id="" {...titleAttr}></textarea>
      </div>
      <div className="field">
        <label htmlFor="">description</label>
        <textarea name="" id="" {...descAttr}></textarea>
      </div>
      <button type="submit">submit</button>
    </form>
  );
});

const mapDispatchToProps = {
    createCard: cardActions.createCard,
    addCardToList: listAction.addCardToList
}

export default connect(null, mapDispatchToProps)(NewCard);
