import React from 'react';
import { useState } from 'react'
import {BrowserRouter as Router, Route, Link,
  Redirect, withRouter} from 'react-router-dom'
import hoppu from './dogs/hoppu.jpg';
import hubert from './dogs/hubert.jpg';
import github from './icon/GitHub-Mark-Light-32px.png'
import linkedin from './icon/LI-Logo.png'

const Dog=() => {
  const dogs = [hoppu, hubert]
  const[selected, setSelected] = useState(Math.floor(Math.random() * dogs.length))

  const handle = (props) => {
    setSelected(Math.abs(props - 1))
  }

  return (
    <div className="Dog">
      <body className="Dog-body">
        <p>
        Click button to change dog.
        </p>
        <button type="button" onClick= {() => handle(selected)}>Dog button</button>
        <img src={dogs[selected]} className="App-logo" alt="logo" />
      </body>
      <footer className="Dog-footer">

      <a href="https://github.com/Artoiss/website" >
        <img className="Dog-footerGitIcon" src={github} />
      </a>
      <a href="https://www.linkedin.com/in/arttu--heikura/" >
        <img className="Dog-footerLiIcon" src={linkedin} />
      </a>
      </footer>
    </div>


  );
}

export default Dog;
