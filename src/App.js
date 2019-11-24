import React from 'react';
import { useState } from 'react'
import {BrowserRouter as Router, Route, Link,
  Redirect, withRouter} from 'react-router-dom'
import hoppu from './dogs/hoppu.jpg';

import hubert from './dogs/hubert.jpg';
import Dog from './Dog'
import Home from './Home'
import './App.css';
import Nav from './Nav';
import Timer from './Timer'
import Timel from './Timeline'
import Drum from './Drum'
import { HashRouter } from "react-router-dom";

const App=() => {
  const padding = { padding: 6}
  return (
    <div>
     <HashRouter>

      <div>
      <Nav />
        <Route exact path="/" render={() => <Home />} />
        <Route path="/dog" render={() => <Dog />} />
        <Route path="/timer" render={() => <Timer />} />
        <Route path="/timel" render={() => <Timel/>} />
        <Route path="/drum" render={() => <Drum/>} />
      </div>

     </HashRouter>
    </div>





  );
}

export default App;
