import React, { memo, useMemo } from 'react'
import { connect } from 'react-redux'
import getAllListTypeIDs from '../../helpers/list-helpers/getAllListTypeIDs';
import selectedCard from '../../selectors/cards-selector';
import selectedList from '../../selectors/lists-selector';
import { StyledSelect } from '../Selects';

const Card = ({className, card , lists}) => {

  const allListType = useMemo(()=>getAllListTypeIDs(lists.entities),[lists.entities])
    // const allListType = getAllListType(lists)
  const {id, title, description} = card;
  // console.log(allListType);

  // console.log(listItems);

  // console.log(card);

  return (
    <article className={className}>
        <h4>{title}</h4>
        <p>{description}</p>
        <StyledSelect options={allListType} cardID={id}/>
    </article>
  )
}

const mapStateToProps = (state, ownProps)=>{
  return {
    card: selectedCard(state).entities[ownProps.id],
    lists: selectedList(state)
  }
}

export default connect(mapStateToProps)(memo(Card))