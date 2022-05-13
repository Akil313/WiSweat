import React from 'react'
import "./Navbar.css"
import { MdOutlineMenu } from "react-icons/md";
import styled from 'styled-components'

const NavBarContainer = styled.div`
  background-color: ${props => props.theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 5vh;
  padding-left: 30px;
  padding-right: 30px;
`;

const Navbar = () => {
  return (
    <NavBarContainer>
      <MdOutlineMenu size={35}/>
      <strong>WiSweat</strong>
      <button>Login</button>
    </NavBarContainer>
  )
}

export default Navbar