import clsx from 'clsx'
import React,{memo} from 'react'
import { connect } from 'react-redux'
import selectedList from '../../selectors/lists-selector'
import { StyledCard } from '../Card'


const Cards = ({className, cards=[]}) => {

  // console.log(cards);

  return (
    <div className={clsx(className, 'cards-container')}>
        {cards.map(item=><StyledCard key={item} id={item}/>)}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    cards: selectedList(state).entities[ownProps.listID].cards
  }
}

export default connect(mapStateToProps)(memo(Cards))