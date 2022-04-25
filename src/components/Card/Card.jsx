import React, { memo } from 'react'
import { connect } from 'react-redux'
import selectedCard from '../../selectors/cards-selector';

const Card = ({className, card}) => {

  const {id, title, description} = card;

  // console.log(card);
  return (
    <article className={className}>
        <h4>{title}</h4>
        <p>{description}</p>
    </article>
  )
}

const mapStateToProps = (state, ownProps)=>{
  return {
    card: selectedCard(state).entities[ownProps.id]
  }
}

export default connect(mapStateToProps)(memo(Card))