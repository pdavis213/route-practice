import React from 'react';
import './App.css';
import { Router, Redirect } from "@reach/router";
import Home from './components/Home';
import Hello from './components/Hello';
import Page4 from './components/Page4';
import HelloColor from './components/Color';

function App() {

  return (
    <div className="appContainer">
      <Router>
        <Redirect from="/" to="/home" noThrow/>
        <Home path="/home" />
        <Hello path="/:hello" />
        <Page4 path="/:id" />
        <HelloColor path="/:hello/:color1/:color2" />
      </Router>
    </div>
  );
}

export default App;
