import React, { memo } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { lists } from '../../normalize-data'

const Home = ({className}) => {
    const listItems = Object.values(lists.entitis)
  return (
    <main className={className}>
        hello world
    </main>
  )
}

export default memo(Home)