import React from 'react';
import './App.css';
import Home from './components/Home/index'
import bg from './assets/bg2.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='header'></div>
        <div className="image-block">
          <img src={bg} className="background-image" alt='background' />
          <h2 className="title">Lazy Animation</h2>
        </div>
        <Home />
      </header>
    </div>
  );
}

export default App;
