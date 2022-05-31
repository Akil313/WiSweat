import React from "react";
import "./Navbar.css";
import { MdOutlineMenu } from "react-icons/md";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
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
      <MdOutlineMenu size={35} />
      <strong>WiSweat</strong>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </NavBarContainer>
  );
};

export default Navbar;
