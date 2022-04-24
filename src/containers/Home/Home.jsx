import React from 'react'
import { Routes } from 'react-router-dom'
import { lists } from '../../normalize-data'

const Home = () => {
    const listItems = Object.values(lists.entitis)
  return (
    <main>
      <ul>
        {listItems.map(item=><li key={item.id}>{item.title}</li>)}
      </ul>
    </main>
  )
}

export default Home