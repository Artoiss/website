import React from 'react';
import { useState } from 'react'
import hoppu from './hoppu.jpg';
import hubert from './hubert.jpg';
import './App.css';


function App() {
  const dogs = [hoppu, hubert]
  const[selected, setSelected] = useState(Math.floor(Math.random() * dogs.length))

  const handle = (props) => {
    setSelected(Math.abs(props - 1))
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Click button to change dog.
        </p>
        <button type="button" onClick= {() => handle(selected)}>Dog button</button>
        <img src={dogs[selected]} className="App-logo" alt="logo" />
        <p>
          Hoppu Development in maintenance.
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
