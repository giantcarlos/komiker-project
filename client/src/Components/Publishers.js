import React from 'react';
import Login from './Login';

function Publishers({ user, setUser }) {
  if (!user) return <Login setUser={setUser} />;

  return (
    <div>Publishers</div>
  )
}

export default Publishers