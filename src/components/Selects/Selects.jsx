import React, { memo } from 'react'
import { connect } from 'react-redux'
import useListContext from '../../hooks/useListContext'
import selectedList from '../../selectors/lists-selector'
import { listAction } from '../../store/lists-slice'

const Selects = ({className, cardID, lists, switchList}) => {

  const prevListID = useListContext()
  // console.log('list id:', listID)
  const listItems = Object.values(lists.entities);
  // console.log('selected card: ',selectedCard);
  // console.log(lists);
  console.log('Select re-render');

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
  switchList: listAction.switchList
}

const mapStateToProps = (state)=>{
  return {
    lists: selectedList(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Selects))