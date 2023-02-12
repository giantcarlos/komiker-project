import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
        <div className="site-title">K O M I K E R</div>
        <NavLink to="/" end>HOME</NavLink>
        <NavLink to="/publishers">PUBLISHERS</NavLink>
        <NavLink to="/books">BOOKS</NavLink>
    </nav>
  )
}

export default NavBar