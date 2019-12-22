import React from 'react';
import github from './icon/GitHub-Mark-Light-32px.png'
import linkedin from './icon/LI-Logo.png'
import so from './icon/so-icon.svg'
import DateCountdown from 'react-date-countdown-timer';

const Home=() => {
  return (
    <div className="Home">
      <header className="Dog-header">
        <p>
          Thesis Deadline
        </p>
      </header>
      <body className="Dog-body">
        <DateCountdown dateTo='2020-03-31 00:00:00 GMT+0200'/>
      </body>
      <footer className="Home-footer">
      <a href="https://github.com/Artoiss/website">
        <img className="Home-footerGitIcon" src={github} alt=""/>
      </a>
      <a href="https://www.linkedin.com/in/arttu--heikura/" >
        <img className="Home-footerLiIcon" src={linkedin} alt=""/>
      </a>
      <a href="https://stackoverflow.com/users/11823822/artoiss">
        <img className="Dog-footerGitIcon" src={so} alt=""/>
      </a>
      </footer>
  </div>
  );
}

export default Home;
