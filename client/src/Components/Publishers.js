import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import PublisherCard from './PublisherCard';

function Publishers({ user, setUser, publishers, books }) {

  const publisherList = () => publishers.map((publisher, key) => <PublisherCard publisher={publisher} key={key} />)

  if (!user) return <Login setUser={setUser} />;

  return (
    <div>
      <div className="counter">You own {books.length} titles from {publishers.length} different publishers.</div>
      <div className="publisherList">{publisherList()}</div>
      <Link to={"/publisherform"}>
        <button>Add a Publisher</button>
      </Link>
    </div>
  )
}

export default Publishers