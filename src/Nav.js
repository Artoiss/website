import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


  export default class Nav extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="navbar-brand">
            <Link to="/" className="navbar-brand">
              <p>
                <img src={require("./dogs/hoppu2.png")} alt=""/>  Hoppu Development
              </p>
            </Link>

            <div className="navbar navbar-dark bg-dark">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/dog">Dog</Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/drum">Drum machine</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      );
    }
  }
