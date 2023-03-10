import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function BookNew ({ user, setUser }) {
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
    fetch("/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((book) => setUser([...user.books, book]))
        navigate('/');
      } else {
        r.json().then((err) => setErrors(err.error));
      }
    })
  }

  return (
    <div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <h3>Add a book to your collection</h3>
        <div className="formText">
          <label htmlFor="name">Title: 
            <input 
              type="text"
              id="name"
              value={formData}
              onChange={(e) => setFormData(e.target.value)}
              autoFocus={true}
            />
            </label>
            <label htmlFor="writer">Writer: 
            <input 
              type="text"
              id="writer"
              value={formData}
              onChange={(e) => setFormData(e.target.value)}
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