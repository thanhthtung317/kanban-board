import React from 'react'

const Selects = ({className, options=['default option']}) => {
  return (
    <select className={className}>
        {options.map((option,index)=><option key={index}>{option}</option>)}
    </select>
  )
}

export default Selects