import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import HeaderMenu from './components/HeaderMenu';
import Content from './components/Content';

function App() {

  return (

    <Router>
      <div className="App">
        <HeaderMenu />
        <Content />
      </div>
    </Router>
  );
}

export default App;
