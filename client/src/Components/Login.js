import React, { useState } from 'react'

function Login({ setUser }) {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log in to your Komiker account</h2>
      <label htmlFor="username">Username: </label>
      <input 
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password: </label>
      <input 
        type="text"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login