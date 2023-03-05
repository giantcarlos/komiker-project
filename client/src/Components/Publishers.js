import React from 'react';
import Login from './Login';
import PublisherCard from './PublisherCard';

function Publishers({ user, setUser, publishers, books }) {

  const publisherList = () => publishers.map((publisher, key) => <PublisherCard publisher={publisher} key={key} />)

  if (!user) return <Login setUser={setUser} />;

  return (
    <div>
      <div className="counter">You own {books.length} titles from {publishers.length} different publishers.</div>
      <div>{publisherList()}</div>
    </div>
  )
}

export default Publishers