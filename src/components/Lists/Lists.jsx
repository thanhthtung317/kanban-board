import clsx from 'clsx';
import React, { memo } from 'react'
import { connect } from 'react-redux'
import selectedList from '../../selectors/lists-selector';
import { StyledList } from '../List';

const Lists = ({className, title, lists}) => {
  // console.log(lists);

  return (
    <div className={clsx(className, "container")}>
        {lists.map(item=><h2 key={item}><StyledList id={item}/></h2>)}
    </div>
  )
}

const mapStateToProps = (state)=>{
  return {
    lists: selectedList(state).ids
  }
}

export default connect(mapStateToProps)(memo(Lists))