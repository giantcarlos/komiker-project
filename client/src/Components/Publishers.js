import React from 'react';
import Login from './Login';
import PublisherCard from './PublisherCard';

function Publishers({ user, setUser, books, setBooks, publishers, setPublishers }) {

  const publisherList = () => publishers.map((publisher, key) => <PublisherCard publisher={publisher} key={key} />)

  if (!user) return <Login setUser={setUser} setPublishers={setPublishers} setBooks={setBooks} />;

  return (
    <div>
      <div className="counter">You own {books.length} titles from {publishers.length} different publishers.</div>
      <div className="publisherList">{publisherList()}</div>
    </div>
  )
}

export default Publishers