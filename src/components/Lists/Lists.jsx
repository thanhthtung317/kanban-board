import clsx from 'clsx';
import React, { memo } from 'react'
import { connect } from 'react-redux'
import selectedList from '../../selectors/lists-selector';
import { StyledList } from '../List';

const Lists = ({className, lists}) => {
  // console.log(lists);
  const listItems = Object.values(lists.entitis)

  return (
    <div className={clsx(className, "container")}>
        {listItems.map(item=><StyledList key={item.id} {...item}/>)}
    </div>
  )
}

const mapStateToProps = (state)=>{
  return {
    lists: selectedList(state)
  }
}

export default connect(mapStateToProps)(memo(Lists))