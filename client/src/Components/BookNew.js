import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Login from './Login';

function BookNew ({ user, setUser, books, setBooks, publishers, setPublishers, allPublishers }) {
  const navigate = useNavigate();
  const [ errors, setErrors ] = useState(null);
  const [ formData, setFormData ] = useState({
    publisher_id: "",
    user_id: user?.id,
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
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => addBook(data))
        navigate('/publishers');
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })}

    const addBook = (data) => {
      setBooks([...books, data])
      const publisher = allPublishers.find(p => p.id===data.publisher_id)
      const publisherExists = publishers.findIndex(p => p.id ===data.publisher_id) > -1;
        if (!publisherExists) {
          publishers.push(publisher)
        }
      const updatedPublisher = {...publisher, books: [...publisher?.books, data]}
      setPublishers(publishers.map(p => p.id===updatedPublisher.id ? updatedPublisher : p))
    }

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.id]: e.target.value
    })}

    if (!user) return <Login setUser={setUser} setPublishers={setPublishers} setBooks={setBooks} />;

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
            <label htmlFor="publisher_id">Publisher: 
            <select className="select"
              type="textarea"
              id="publisher_id"
              value={formData.publisher_id}
              onChange={handleChange}
            >
              <option value=""></option>
              {allPublishers.map(p => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
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
        {errors ? (errors.map((error) => {return <p className="errors">{error}</p>})) : null}
      </form>
      <Link to={"/publishers/new"} className="signLink">Don't see a publisher on our list? Add one here.</Link>
    </div>
  )
}

export default BookNew