import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

function BookNew ({ user, setUser, books, setBooks }) {
  const navigate = useNavigate();
  const [ errors, setErrors ] = useState(null);
  const [ formData, setFormData ] = useState({
    name: "",
    writer: "",
    edition: "",
    image_url: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((book) => setBooks([books, book]))
        navigate('/');
      } else {
        r.json().then((err) => setErrors(err.error));
      }
    })}

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.id]: e.target.value
    })}

    if (!user) return <Login setUser={setUser} />;

  return (
    <div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <h3>Add a book to your collection</h3>
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
            <label htmlFor="publisher">Publisher: 
            <select className="select"
              type="textarea"
              id="publisher"
              value={formData.edition}
              onChange={handleChange}
            >
              <option value=""></option>
            </select>
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

export default BookNew