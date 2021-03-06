import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Dog from './Dog'
import Home from './Home'
import './App.css';
import Nav from './Nav';
import Timer from './Timer'
import Timel from './Timeline'
import Drum from './Drum'
import Covid from './Covid'
import { HashRouter } from "react-router-dom";

const App=() => {
  return (
    <div>
     <HashRouter>

      <div>
      <Nav />
        <Route exact path="/" render={() => <Home />} />
        <Route path="/dog" render={() => <Dog />} />
        <Route path="/drum" render={() => <Drum/>} />
        <Route path="/timer" render={() => <Timer/>} />
      </div>

     </HashRouter>
    </div>





  );
}

export default App;
