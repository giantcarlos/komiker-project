import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function PublisherForm({ userPublishers, setUserPublishers }) {
    const navigate = useNavigate();
    const [ name, setName ] = useState("");
    const [ errors, setErrors ] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/publishers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((publisher) => setUserPublishers([...userPublishers, publisher]))
            navigate('/');
          } else {
            r.json().then((err) => setErrors(err.error));
          }
        })
      }

  return (
    <div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2>Add a publisher to your collection</h2>
        <div className="formText">
          <label htmlFor="name"> Publisher Name: 
            <input 
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            </label>
        </div>
        <button className="formBtn" type="submit">S U B M I T</button>
        {errors ? <p className="errors">{errors}</p> : null}
      </form>
    </div>
  )
}

export default PublisherForm