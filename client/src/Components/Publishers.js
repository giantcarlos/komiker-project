import React from 'react';
import Login from './Login';
import PublisherCard from './PublisherCard';

function Publishers({ user, setUser }) {

  const publisherList = () => user.publishers.map((publisher, key) => <PublisherCard publisher={publisher} key={key} />)

  if (!user) return <Login setUser={setUser} />;

  return (
    <div>
      <div className="counter">You own {user.books.length} titles from {user.publishers.length} different publishers.</div>
      <div className="publisherList">{publisherList()}</div>
    </div>
  )
}

export default Publishers