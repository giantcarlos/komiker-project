import React from 'react'
import Login from './Login';
import BookCard from './BookCard';

function Home({ user, setUser, setPublishers, setBooks, latest }) {
  if (!user) return <Login setUser={setUser} setPublishers={setPublishers} setBooks={setBooks} />;

  const bookCards = () => latest.map((book, key) => <BookCard book={book} key={key}/>)

  
  return (
    <div>
      <div className="counter"><br />Welcome {user.username}!<br /><br /><br /><br/>
        <div>{latest.length===0 ? "You don't have any books yet. Add some to your collection." : "Here are the lastest titles in your collection:"}</div>
      </div>
      <div className="cardGrid">{bookCards()}</div>
    </div>
  )
}

export default Home