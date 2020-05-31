import React from 'react';
import Advice from "./Components/Advice.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Advice/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
