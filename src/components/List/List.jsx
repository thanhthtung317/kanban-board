import React, { createContext, memo } from 'react'
import { StyledCards } from '../Cards'
export const listContext = createContext();

const List = ({className, id, title}) => {
  return (
    <listContext.Provider value={id}>
      <section className={className}>
        <h2>{title}</h2>
        <StyledCards listID={id}/>
      </section>
    </listContext.Provider>
  )
}

export default memo(List)