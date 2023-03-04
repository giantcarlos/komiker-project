import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Publishers from './Components/Publishers';
import Books from './Components/Books';
import SignUp from './Components/SignUp';
import './App.css';

function App() {
  const [ user, setUser ] = useState(null);
  const [ publishers, setPublishers ] = useState([]);
  const [ books, setBooks ] = useState([]);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user))
      }
    })
  }, []);
  
  useEffect(() => {
    fetch('/publishers')
    .then(res => res.json())
    .then(data => setPublishers(data))
  }, [])

  useEffect(() => {
    fetch('/books')
    .then(res => res.json())
    .then(data => setBooks(data))
  }, [])

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
          <Route exact path="/" element={<Home user={user} setUser={setUser}/>}/>
          <Route exact path="/signup" element={<SignUp setUser={setUser} />} />
          <Route exact path="/publishers" element={<Publishers user={user} setUser={setUser} publishers={publishers}/>}/>
          <Route exact path="/books" element={<Books user={user} setUser={setUser} books={books}/>}/>
      </Routes>
    </div>
  );
}

export default App;
