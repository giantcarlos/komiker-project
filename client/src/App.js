import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Login from './Components/Login';
import Publishers from './Components/Publishers';
import Books from './Components/Books';
import './App.css';

function App() {
  // const [ user, setUser ] = useState(null);
  // const [ publishers, setPublishers ] = useState([]);
  const [ books, setBooks ] = useState([]);

  // useEffect(() => {
  //   fetch("/me").then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user))
  //     }
  //   })
  // }, []);

  // if (user) {
  //   <h2>Welcome, {user.usermame}!</h2>;
  // } else {
  //   <Login onLogin={setUser} />;
  // }
  
  // useEffect(() => {
  //   fetch('http://localhost:3000/publishers')
  //   .then(res => res.json())
  //   .then(data => setPublishers(data))
  // }, [])

  // useEffect(() => {
  //   fetch('http://localhost:3000/books')
  //   .then(res => res.json())
  //   .then(data => setBooks(data))
  // }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/publishers" element={<Publishers />}/>
          <Route exact path="/books" element={<Books />}/>
      </Routes>
    </div>
  );
}

export default App;
