import React from 'react'
import Login from './Login';
import BookCard from './BookCard';

function Home({ user, setUser, books }) {
  if (!user) return <Login setUser={setUser} />;

  const bookCards = () => books.map((book, key) => <BookCard book={book} key={key}/>)

  
  return (
    <div>
      <div className="counter">Welcome back {user.username}!<br /><br /><br />
        <div>Here are the lastest titles in your collection:</div>
      </div>
      <div className="cardGrid">{bookCards()}</div>
    </div>
  )
}

export default Home