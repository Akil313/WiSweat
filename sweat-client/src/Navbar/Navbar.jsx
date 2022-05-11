import React from 'react'
import "./Navbar.css"
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='nav-main-container'>
      <MdOutlineMenu size={35}/>
      <strong>WiSweat</strong>
      <button>Login</button>
    </div>
  )
}

export default Navbar