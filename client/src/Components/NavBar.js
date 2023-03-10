import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar({ user, setUser }) {

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <nav>
        <div className="site-title">K O M I K E R</div>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/collection">COLLECTION</NavLink>
        <NavLink to="/books/new">ADD TO COLLECTION</NavLink>
        <button className="loginBtn" onClick={handleLogout}>{user ? "LOGOUT" : ""}</button>
    </nav>
  )
}

export default NavBar