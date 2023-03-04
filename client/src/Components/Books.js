import React from 'react';
import Login from './Login';
import BookCard from './BookCard';

function Books({ user, setUser, books }) {
  const bookCards = () => books.map((book, key) => <BookCard book={book} key={key}/>)

  if (!user) return <Login setUser={setUser} />;

  return (
    <div>
      <h2 className="counter">You have {books.length} titles in your collection.</h2>
      <div className="cardGrid">{bookCards()}</div>
    </div>
  )
}

export default Books