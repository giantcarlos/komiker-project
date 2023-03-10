import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import PublisherCard from './PublisherCard';

function Collection({ user, setUser, userPublishers, books }) {

  const publisherList = () => userPublishers.map((publisher, key) => <PublisherCard publisher={publisher} key={key} />)

  if (!user) return <Login setUser={setUser} />;

  return (
    <div>
      <div className="counter">You own {books.length} titles from {userPublishers.length} different publishers.</div>
      <div className="publisherList">{publisherList()}</div>
      <Link to={"/publisherform"}>
        <button className="formBtn">Add a Publisher</button>
      </Link>
    </div>
  )
}

export default Collection