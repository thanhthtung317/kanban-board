import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { lists } from '../../normalize-data'

const Home = ({className}) => {
    const listItems = Object.values(lists.entitis)
  return (
    <main className={className}>
        <nav>
            <ul>
                <li>
                    <Link to='about'>
                        about
                    </Link>
                </li>
                <li>
                    <Link to='users'>
                        users
                    </Link>
                </li>
                <li>
                    <Link to='cards'>
                        cards
                    </Link>
                </li>
            </ul>
        </nav>
      <ul>
        {listItems.map(item=><li key={item.id}>{item.title}</li>)}
      </ul>

 
    </main>
  )
}

export default Home