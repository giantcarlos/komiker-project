import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Publishers from './Components/Publishers';
import PublisherPage from './Components/PublisherPage';
import PublisherForm from './Components/PublisherForm';
import BookNew from './Components/BookNew';
import BookPage from './Components/BookPage';
import BookEdit from './Components/BookEdit';
import SignUp from './Components/SignUp';
import './App.css';

function App() {
  const [ user, setUser ] = useState(null);
  const [ publishers, setPublishers ] = useState([]);
  const [ books, setBooks ] = useState([]);
  const [ allPublishers, setAllPublishers ] = useState([]);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user)
          setBooks(user.books)
          setPublishers(user.publishers_userbooks)
        })
      }
    })
  }, []);
  
  useEffect(() => {
    if (user) {
    fetch('/publishers')
    .then(res => res.json())
    .then(data => setAllPublishers(data))
  }}, [user])

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
          <Route exact path="/" element={<Home user={user} setUser={setUser} setBooks={setBooks} setPublishers={setPublishers} books={books} />}/>
          <Route exact path="/signup" element={<SignUp setUser={setUser} setBooks={setBooks} setPublishers={setPublishers}/>} />
          <Route exact path="/books/:id" element={<BookPage books={books} setBooks={setBooks} publishers={publishers} setPublishers={setPublishers} />}/>
          <Route exact path="/books/:id/edit" element={<BookEdit books={books} setBooks={setBooks} publishers={publishers} setPublishers={setPublishers}/>}/>
          <Route exact path="/books/new" element={<BookNew books={books} setBooks={setBooks} user={user} setUser={setUser} publishers={publishers} setPublishers={setPublishers} allPublishers={allPublishers} />}/>
          <Route exact path="/publishers" element={<Publishers user={user} setUser={setUser} books={books} publishers={publishers} setBooks={setBooks} setPublishers={setPublishers} />}/>
          <Route exact path="/publishers/:id" element={<PublisherPage publishers={publishers} />}/>
          <Route exact path="/publishers/new" element={<PublisherForm allPublishers={allPublishers} setAllPublishers={setAllPublishers} />}/>
      </Routes>
    </div>
  );
}

export default App;
