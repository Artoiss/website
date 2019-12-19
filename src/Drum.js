import React from 'react';
import github from './icon/GitHub-Mark-Light-32px.png'
import linkedin from './icon/LI-Logo.png'
import so from './icon/so-icon.svg'
import Button from './components/button/Button'
import snare from './audio/Tr-8_sample_snare.mp3'
import Sound from 'react-sound'

const Drum=() => {
  const audio = new Audio(snare)
  const handleClick = (props) => {
    audio.currentTime = 0
    audio.play()
  }

  return (
    <div className="Home">
      <header className="Dog-header">
        <p>
          Drum machine
        </p>
      </header>
      <body className="Dog-body">
        <button type="button" size="lg" onClick={() => handleClick(audio)}> Snare</button>
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
