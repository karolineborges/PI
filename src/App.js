import './App.css';
import Navbar from './components/Navbar'
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Adoption from './pages/Adoption';
import Donation from './pages/Donation';
import Home from './pages/Home';
import Login from './pages/Login';
import Administration from './pages/Administration';
import Container from './components/Container';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route exact path="/adoption" element={<Adoption />} />
            <Route exact path="/donation" element={<Donation />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/administration" element={<Administration />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
