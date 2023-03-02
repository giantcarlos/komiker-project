import React from 'react'
import Login from './Login';

function Home({ user, setUser }) {
  if (!user) return <Login setUser={setUser} />;
  
  return (
    <div>Home</div>
  )
}

export default Home