import React from 'react';
import github from './icon/GitHub-Mark-Light-32px.png'
import linkedin from './icon/LI-Logo.png'
import so from './icon/so-icon.svg'

const Home=() => {
  return (
    <div className="Home">
      <header className="Home-header">
      <p> Hoppu Development under maintenance. </p>
        <img src={require("./dogs/hoppu2.png")} className="rotate2" width="100" height="120" alt="" />
        <img src={require("./dogs/hubert2.png")} className="rotate" width="100" height="120" alt=""/>
      </header>
      <footer className="Home-footer">
      <a href="https://github.com/Artoiss/website" >
        <img className="Home-footerGitIcon" src={github} alt=""/>
      </a>
      <a href="https://www.linkedin.com/in/arttu--heikura/" >
        <img className="Home-footerLiIcon" src={linkedin} alt=""/>
      </a>
      <a href="https://stackoverflow.com/users/11823822/artoiss" >
        <img className="Dog-footerGitIcon" src={so} alt=""/>
      </a>
      </footer>
  </div>


  );
}

export default Home;
