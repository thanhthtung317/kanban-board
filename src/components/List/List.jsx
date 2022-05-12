import React, { createContext, memo } from 'react'
import { StyledCards } from '../Cards'
import { StyledNewCard } from '../NewCard';
export const listContext = createContext();

const List = ({className, id, title}) => {
  return (
    <listContext.Provider value={id}>
      <section className={className}>
        <h2>{title}</h2>
        <StyledNewCard/>
        <StyledCards listID={id}/>
      </section>
    </listContext.Provider>
  )
}

export default memo(List)