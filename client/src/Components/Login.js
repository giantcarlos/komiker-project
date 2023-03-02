import React, { useState } from 'react'

function Login({ setUser }) {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ errors, setErrors ] = useState([]);

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
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })
  }

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <h2>Log in to your Komiker account</h2>
      <div className="formText">
        <label htmlFor="username">Username: 
          <input 
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">Password: 
          <input 
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      {errors && (
      <p>{errors.message}</p>
      )}
      <button className="formBtn" type="submit">L O G I N</button>
    </form>
  );
}

export default Login