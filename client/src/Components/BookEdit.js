import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function BookEdit ({ books, setBooks }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const book = books.find(book => book.id===parseInt(id))
  const [ errors, setErrors ] = useState(null);
  const [ formData, setFormData ] = useState({
    name: "",
    writer: "",
    edition: "",
    image_url: "",
    publisher_id: book.publisher_id
  });

  useEffect(() => {
    setFormData(book);
  }, [book])

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => updateBook(data))
        navigate('/');
      } else {
        r.json().then((err) => setErrors(err.error));
      }
    })}

  const updateBook = (data) => {
    setBooks(books.map(book => book.id===data.id ? data : book));
  }

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.id]: e.target.value
    })}

  return (
    <div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <h3>Edit {book.name}</h3>
        <div className="formText">
          <label htmlFor="name">Title: 
            <input 
              type="textarea"
              id="name"
              value={formData.name}
              onChange={handleChange}
              autoFocus={true}
            />
            </label>
            <label htmlFor="writer">Writer: 
            <input 
              type="textarea"
              id="writer"
              value={formData.writer}
              onChange={handleChange}
            />
            </label>
            <label htmlFor="edition">Edition: 
            <select className="select"
              type="textarea"
              id="edition"
              value={formData.edition}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="Softcover">Softcover</option>
              <option value="Hardcover">Hardcover</option>
              <option value="Leatherbound">Leatherbound</option>
              <option value="Box Set">Box Set</option>
            </select>
            </label>
            <label htmlFor="image_url">Image URL: 
            <input 
              type="textarea"
              id="image_url"
              value={formData.image_url}
              onChange={handleChange}
            />
            </label>
        </div>
        <button className="formBtn" type="submit">S U B M I T</button>
        {errors ? <p className="errors">{errors}</p> : null}
      </form>
    </div>
  )
}

export default BookEdit