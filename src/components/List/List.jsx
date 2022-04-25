import React, { memo } from 'react'

const List = ({className, id}) => {
  return (
    <section className={className}>
        {id}
    </section>
  )
}

export default memo(List)