import React from "react";
import {Navbar, NavItem} from 'react-materialize'
import "./Nav.css";
 

const Nav = () => (

<div>
<Navbar className="navBar"  brand='Surety' href='/'right >
  {/* <NavItem href='/homepage'>Home</NavItem> */}
  <NavItem href='/account'>Account</NavItem>
  <NavItem href='/policies'>Policies</NavItem>
</Navbar>
{/* <img src= "http://cpde-uat.d.epsilon.com/images/surety-logo.svg"  /> */}
</div>
)

export default Nav;