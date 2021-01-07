import React from 'react'
import {SearchBox} from '../components'
const Nav = () => {
  return (
    <nav className="">
      <div>
          <img style={{ width: "70px" }} src={`${process.env.PUBLIC_URL}/assets/vschool-logo.png`} alt="V School Logo" />
      </div> 
      <SearchBox/>
      <ul>
        <li>Lobby</li>
        <li>Events</li>
        <li>Students</li>
        <li>Learn</li>
      </ul>
    </nav>
  )
}

export default Nav
