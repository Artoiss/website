import React from 'react';
import { useState } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import hoppu from './dogs/hoppu.jpg';
import hubert from './dogs/hubert.jpg';
import github from './icon/GitHub-Mark-Light-32px.png'
import linkedin from './icon/LI-Logo.png'
import so from './icon/so-icon.svg'


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
        <img className="Dog-footerGitIcon" src={github} alt="logo"/>
      </a>
      <a href="https://www.linkedin.com/in/arttu--heikura/" >
        <img className="Dog-footerLiIcon" src={linkedin} alt="logo"/>
      </a>
      <a href="https://stackoverflow.com/users/11823822/artoiss" >
        <img className="Dog-footerGitIcon" src={so} alt="logo"/>
      </a>
      </footer>
    </div>


  );
}

export default Dog;
