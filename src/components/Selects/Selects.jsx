import React, { memo } from 'react'
import { connect } from 'react-redux'
import useListContext from '../../hooks/useListContext'
import selectedCard from '../../selectors/cards-selector'
import selectedList from '../../selectors/lists-selector'
import { cardActions } from '../../store/cards-slice'
import { listAction } from '../../store/lists-slice'

const Selects = ({className, cardID, lists, setSelectedCard, selectedCard, switchList}) => {

  const prevListID = useListContext()
  // console.log('list id:', listID)
  const listItems = Object.values(lists.entities);
  // console.log('selected card: ',selectedCard);
  // console.log(lists);

  const handleOnchange = (listID)=>{
    switchList({prevListID, listID, cardID})
  }

  return (
    <select className={className} value={prevListID} onChange={(e)=>{handleOnchange(e.target.value)}}>
        {listItems.map((item)=>{
          return (<option 
            key={item.id} 
            value={item.id}
            >
              {item.title}
          </option>)
        })}
    </select>
  )
}

const mapDispatchToProps = {
  setSelectedCard: cardActions.setSelectedCard,
  switchList: listAction.switchList
}

const mapStateToProps = (state)=>{
  return {
    lists: selectedList(state),
    selectedCard: selectedCard(state).selectedCard
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Selects))