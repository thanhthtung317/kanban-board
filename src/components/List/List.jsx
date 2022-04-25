import React, { memo } from 'react'
import { StyledCards } from '../Cards'

const List = ({className, id, title}) => {
  return (
    <section className={className}>
        <h2>{title}</h2>
        <StyledCards listID={id}/>
    </section>
  )
}

export default memo(List)