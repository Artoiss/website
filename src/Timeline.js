import React from 'react';

import github from './icon/GitHub-Mark-Light-32px.png'
import linkedin from './icon/LI-Logo.png'
import so from './icon/so-icon.svg'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import hoppu from './dogs/hoppu.jpg';

const Timel=() => {
  return (
    <div className="Timel">
      <header className="Dog-header">
        <p>
          Thesis Timeline
        </p>
      </header>
      <body className="Dog-body">
      <Timeline lineColor={'#ddd'}>
<TimelineItem
key="001"
dateText=":D"

style={{ color: '#ddd' }}
>
<h3>:D</h3>
<h4>:D</h4>
<p>
  :D
</p>
</TimelineItem>
<TimelineItem
key="002"
dateText=":D"
dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
bodyContainerStyle={{
  background: '#ddd',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
}}
>
<h3 style={{ color: '#61b8ff' }}>:D</h3>
<h4 style={{ color: '#61b8ff' }}>:D</h4>
<p>
  :D
</p>
</TimelineItem>
<TimelineItem
key="003"
dateComponent={(
  <div
    style={{
      display: 'block',
      float: 'left',
      padding: '10px',
      background: 'rgb(150, 150, 150)',
      color: '#fff',
    }}
  >
    :D
  </div>
)}
>
<h3>:D</h3>
<h4>:D</h4>
<p>
  :D
</p>
</TimelineItem>
<TimelineItem
key="004"
dateText=":D"
dateInnerStyle={{ background: '#76bb7f' }}
>
<h3>:D</h3>
<h4>:D</h4>
<p>
  :D
</p>
</TimelineItem>
</Timeline>
      </body>
      <footer className="Dog-footer">
      <a href="https://github.com/Artoiss/website" >
        <img className="Dog-footerGitIcon" src={github} />
      </a>
      <a href="https://www.linkedin.com/in/arttu--heikura/" >
        <img className="Dog-footerLiIcon" src={linkedin} />
      </a>
      <a href="https://stackoverflow.com/users/11823822/artoiss" >
        <img className="Dog-footerGitIcon" src={so} />
      </a>
      </footer>
  </div>


  );
}

export default Timel;
