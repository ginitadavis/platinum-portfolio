import './App.css';
import React, { useState } from 'react';
import HeaderMenu from './components/HeaderMenu';
import Content from './components/Content';

function App() {

  return (
    <div className="App">
      <HeaderMenu />
      <Content />
    </div>
  );
}

export default App;
