import React from 'react'
import { useParams } from 'react-router-dom'

function BookPage({ books }) {
    const { id } = useParams();
    const book = books.find(book => book.id===parseInt(id))

  return (
    <div className="bookContainer">
        <div className="bookImg">
            <img src={book.image_url} alt=""/>
        </div>
        <h2>{book.name}</h2>
        <div className="bookDetails">
            <p>Writer: {book.writer}</p>
            <p>Edition: {book.edition}</p>
        </div>
    </div>
  )
}

export default BookPage