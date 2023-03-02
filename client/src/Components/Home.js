import React from 'react'
import Login from './Login';

function Home({ user, setUser }) {
  if (!user) return <Login onLogin={setUser} />;
  
  return (
    <div>Home</div>
  )
}

export default Home