import React from 'react'
import Login from './Login';
import BookCard from './BookCard';

function Home({ user, setUser, setPublishers, setBooks, books }) {
  if (!user) return <Login setUser={setUser} setPublishers={setPublishers} setBooks={setBooks} />;

  const latestBooks = books.slice(Math.max(books.length -5, 0))
  const bookCards = () => latestBooks.map((book, key) => <BookCard book={book} key={key}/>)

  return (
    <div>
      <div className="counter"><br />Welcome {user.username}!<br /><br /><br /><br/>
        <div>{latestBooks.length===0 ? "You don't have any books yet. Add some to your collection." : "Here are the lastest titles in your collection:"}</div>
      </div>
      <div className="cardGrid">{bookCards()}</div>
    </div>
  )
}

export default Home