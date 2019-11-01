import React from 'react';
import { useState } from 'react'
import {BrowserRouter as Router, Route, Link, 
  Redirect, withRouter} from 'react-router-dom'
import hoppu from './dogs/hoppu.jpg';
import hubert from './dogs/hubert.jpg';
import Dog from './Dog'
import Home from './Home'
import './App.css';


const App=() => {
  const padding = { padding: 6}
  return (
    <div>
     <Router>
      <div>
        <div>
          <Link style={padding} to="/">home</Link>
          <Link style={padding} to="/">dog</Link>
        </div>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/Dog" render={() => <Dog />} />

      </div>
     </Router>
    </div>


  );
}

export default App;
