import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

function BookPage({ books, setBooks, publishers, setPublishers }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const book = books.find(book => book.id===parseInt(id))
    const publisher = publishers.find(p => p.id===parseInt(book?.publisher_id))

    const handleDelete = () => {
      fetch(`/books/${id}`, 
          { method: "DELETE" })
      .then(() => removeBook(id))
      .then(() => navigate(`/publishers/${publisher.id}`));
  }

  const removeBook = id => {
    setBooks(books.filter(book => book.id !=id));
    const updatedPublisher = {...publisher, books: [...(publisher?.books.filter(book => book.id !=id))]};
    setPublishers(publishers.map(p => p.id===updatedPublisher.id ? updatedPublisher : p));
}

  return (
    <div className="bookContainer">
        <div className="bookImg">
            <img src={book?.image_url} alt=""/>
        </div>
        <h2>{book?.name}</h2>
        <div className="bookDetails">
            <p>Publisher: {book?.publisher.name}</p>
            <p>Writer: {book?.writer}</p>
            <p>Edition: {book?.edition}</p>
        </div>
        <Link to={`/books/${id}/edit`}>
              <button className="bookBtn">Edit Book</button>
        </Link>
        <button className="bookBtn" onClick={handleDelete}>Delete Book</button>
    </div>
  )
}

export default BookPage