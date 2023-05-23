import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import HeaderMenu from './components/HeaderMenu';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {

  return (

    <Router>
      <div className="App">
        <div className="headerAndContent">
          <HeaderMenu />
          <Content />
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
