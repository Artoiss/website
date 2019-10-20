import React from 'react';
import hoppu from './hoppu.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hoppu} className="App-logo" alt="logo" />
        <p>
          Hoppu Development in progress.
        </p>
        <a
          className="App-link"
          href="https://github.com/Artoiss/website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github page
        </a>
      </header>
    </div>
  );
}

export default App;
