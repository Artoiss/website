import React from 'react';
import { useState } from 'react'
import github from './icon/GitHub-Mark-Light-32px.png'
import linkedin from './icon/LI-Logo.png'
import so from './icon/so-icon.svg'
import Button from './components/button/Button'

const Drum=() => {

const handleClick = () => {
  console.log("test")
}

  return (
    <div className="Home">
      <header className="Dog-header">
        <p>
          Drum machine
        </p>
      </header>
      <body className="Dog-body">
        <Button  onClick={() => handleClick(false)}> </Button>
      </body>
      <footer className="Home-footer">
      <a href="https://github.com/Artoiss/website" >
        <img className="Home-footerGitIcon" src={github} />
      </a>
      <a href="https://www.linkedin.com/in/arttu--heikura/" >
        <img className="Home-footerLiIcon" src={linkedin} />
      </a>
      <a href="https://stackoverflow.com/users/11823822/artoiss" >
        <img className="Dog-footerGitIcon" src={so} />
      </a>
      </footer>
  </div>


  );
}

export default Drum;
