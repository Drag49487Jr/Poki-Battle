import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokiApi from './components/PokiApi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PokiApi />
      </header>
    </div>
  );
}

export default App;
