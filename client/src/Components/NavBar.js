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
        <NavLink to="/" end>HOME</NavLink>
        <NavLink to="/publishers">PUBLISHERS</NavLink>
        <NavLink to="/books">BOOKS</NavLink>
        <button className="loginBtn" onClick={handleLogout}>{user ? "LOGOUT" : ""}</button>
    </nav>
  )
}

export default NavBar