import React, { memo } from 'react'
import { StyledLists } from '../../components'

const Home = ({className}) => {
  return (
    <main className={className}>
        hello world
        <StyledLists/>
    </main>
  )
}

export default memo(Home)