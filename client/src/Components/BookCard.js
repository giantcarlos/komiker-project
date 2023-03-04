import React from 'react';
import { Link } from 'react-router-dom';

function BookCard({ book }) {
  return (
    <Link to={`/books/${book.id}`}>
        <div className="card">
            <div className="cardImg">
                <img src={book.image_url} alt="Not found."/>
            </div>
            <div className="cardName">{book.name}</div>
        </div>
    </Link>
  )
}

export default BookCard