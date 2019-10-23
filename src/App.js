import React from 'react';
import { useState } from 'react'
import {BrowserRouter as Router, Route, Link, 
  Redirect, withRouter} from 'react-router-dom'
import hoppu from './dogs/hoppu.jpg';
import hubert from './dogs/hubert.jpg';
import './App.css';


const App=() => {
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
