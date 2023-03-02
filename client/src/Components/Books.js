import React from 'react';
import Login from './Login';

function Books({ user, setUser }) {
  if (!user) return <Login setUser={setUser} />;

  return (
    <div>Books</div>
  )
}

export default Books