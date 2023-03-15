import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp({ setUser }) {
    const navigate = useNavigate();
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ errors, setErrors ] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username,
                email,
                password
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
                navigate('/');
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

  return (
    <div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2>Create a Komiker account</h2>
        <div className="formText">
          <label htmlFor="username">Username: 
            <input 
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor="email">E-mail: 
            <input 
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
        <button className="formBtn" type="submit">S I G N U P</button>
        {errors ? (errors.map((error) => {return <p className="errors">{error}</p>})) : null}
      </form>
    </div>
  );
}

export default SignUp