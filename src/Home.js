import React from 'react';
import { useState } from 'react'
import github from './icon/GitHub-Mark-Light-32px.png'
import linkedin from './icon/LI-Logo.png'


const Home=() => {
  return (
    <div className="Home">
      <header className="Home-header">
        <p>
          Hoppu Development under maintenance.
        </p>
      </header>
      <footer className="Home-footer">
      <a href="https://github.com/Artoiss/website" >
        <img className="Home-footerGitIcon" src={github} />
      </a>
      <a href="https://www.linkedin.com/in/arttu--heikura/" >
        <img className="Home-footerLiIcon" src={linkedin} />
      </a>
      </footer>
  </div>


  );
}

export default Home;
