import React from 'react'
import { StyledCard } from '../Card'

const Lists = ({className, title}) => {
  return (
    <section className={className}>
        <h2>{title}</h2>
    </section>
  )
}

export default Lists