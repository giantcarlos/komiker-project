import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Collection from './Components/Collection';
import PublisherPage from './Components/PublisherPage';
import PublisherForm from './Components/PublisherForm';
import About from './Components/About';
import BookPage from './Components/BookPage';
import BookForm from './Components/BookForm';
import SignUp from './Components/SignUp';
import './App.css';

function App() {
  const [ user, setUser ] = useState(null);
  const [ publishers, setPublishers ] = useState([]);
  const [ userPublishers, setUserPublishers ] = ([]);
  // const [ books, setBooks ] = useState([]);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user)
          setUserPublishers(user.publishers)
        })
      }
    })
  }, []);
  
  useEffect(() => {
    if (user) {
    fetch('/publishers')
    .then(res => res.json())
    .then(data => setPublishers(data))
  }}, [user])

  // useEffect(() => {
  //   if (user) {
  //     fetch('/books')
  //     .then(res => res.json())
  //     .then(data => setBooks(data))
  // }}, [user])

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
          <Route exact path="/" element={<Home user={user} setUser={setUser}/>}/>
          <Route exact path="/signup" element={<SignUp setUser={setUser} />} />
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/books/:id" element={<BookPage />}/>
          <Route exact path="/newbook" element={<BookForm />}/>
          <Route exact path="/collection" element={<Collection user={user} setUser={setUser} userPublishers={userPublishers} />}/>
          <Route exact path="/publishers/:id" element={<PublisherPage userPublishers={userPublishers}/>}/>
          <Route exact path="/publisherform" element={<PublisherForm userPublishers={userPublishers} setPublishers={setPublishers} publishers={publishers} />}/>
      </Routes>
    </div>
  );
}

export default App;
