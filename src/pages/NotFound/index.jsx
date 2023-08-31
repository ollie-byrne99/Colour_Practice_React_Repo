import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NotFound = () => {
    const location = useLocation()
    
  return (
    <>
    <h1>Page <span style={{ color: "firebrick" }}>{location.pathname}</span> not found
      </h1>
    <Link to='/colours' style={{ color: "firebrick", fontWeight: "bold "}}>COLOUR PAGE HERE!?!? &rarr;</Link>
    </>
  )
}

export default NotFound
