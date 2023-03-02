import React, { useState } from 'react'

function Login({ onLogin }) {
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
        r.json().then((user) => onLogin(user))
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>

    </form>
  )
}

export default Login