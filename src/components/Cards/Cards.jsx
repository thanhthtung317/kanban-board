import React,{memo} from 'react'
import {cards} from '../../normalize-data'
import { StyledCard } from '../Card'

const Cards = ({className}) => {
    const cardItems = Object.values(cards)

  return (
    <div className={className}>
        {cardItems.map(item=><StyledCard key={item.id} {...item}/>)}
    </div>
  )
}

export default memo(Cards)