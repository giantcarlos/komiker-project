import React from 'react';
import { useParams } from 'react-router-dom';
import BookCard from './BookCard';

function PublisherPage({ publishers }) {
    const { id } = useParams();
    const publisher = publishers.find(publisher => publisher.id===parseInt(id))

    const bookCards = () => publisher.books.map((book, key) => <BookCard book={book} key={key}/>)

  return (
    <div>
      <h2 className="counter">You have {publisher.books.length} titles from {publisher.name}.</h2>
      <div className="cardGrid">{bookCards()}</div>
    </div>
  )
}

export default PublisherPage