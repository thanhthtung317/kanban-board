import React,{memo} from 'react'

const PageNotFound = ({className}) => {
  return (
    <main className={className}>
        <h1>page not found</h1>
    </main>
  )
}

export default memo(PageNotFound)