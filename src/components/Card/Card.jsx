import React, { memo } from 'react'

const Card = ({className, title}) => {
  return (
    <article className={className}>
        <h3>{title}</h3>
    </article>
  )
}

export default memo(Card)