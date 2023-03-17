import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login({ setUser, setBooks, setPublishers }) {
  const navigate = useNavigate();
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ errors, setErrors ] = useState(null);

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
        r.json().then((user) => {
          setUser(user)
          setBooks(user.books)
          setPublishers(user.publishers_userbooks)
        })
        navigate('/');
      } else {
        r.json().then((err) => setErrors(err.error));
      }
    })
  }

  return (
    <div>
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
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button className="formBtn" type="submit">L O G I N</button>
        {errors ? <p className="errors">{errors}</p> : null}
      </form>
      <Link to={"/signup"} className="signLink">New to Komiker? Create an account.</Link>
    </div>
  );
}

export default Login