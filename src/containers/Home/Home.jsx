import React, { memo } from 'react'
import { StyledLists } from '../../components'

const Home = ({className}) => {
  return (
    <main className={className}>
        <h1>normalizing data and optimizing react app pratice</h1>
        <StyledLists/>
    </main>
  )
}

export default memo(Home)