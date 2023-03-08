import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Publishers from './Components/Publishers';
import PublisherPage from './Components/PublisherPage';
import PublisherForm from './Components/PublisherForm';
import Books from './Components/Books';
import BookPage from './Components/BookPage';
import BookForm from './Components/BookForm';
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
    if (user) {
    fetch('/publishers')
    .then(res => res.json())
    .then(data => setPublishers(data))
  }}, [user, publishers])

  useEffect(() => {
    if (user) {
      fetch('/books')
      .then(res => res.json())
      .then(data => setBooks(data))
  }}, [user, books])

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
          <Route exact path="/" element={<Home user={user} setUser={setUser}/>}/>
          <Route exact path="/signup" element={<SignUp setUser={setUser} />} />
          <Route exact path="/books" element={<Books user={user} setUser={setUser} books={books}/>}/>
          <Route exact path="/books/:id" element={<BookPage books={books}/>}/>
          <Route exact path="/newbook" element={<BookForm />}/>
          <Route exact path="/publishers" element={<Publishers user={user} setUser={setUser} publishers={publishers} books={books}/>}/>
          <Route exact path="/publishers/:id" element={<PublisherPage publishers={publishers}/>}/>
          <Route exact path="/publisherform" element={<PublisherForm setPublishers={setPublishers}/>}/>
      </Routes>
    </div>
  );
}

export default App;
