import React from 'react';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/about" component={About}/>
        <Route path="/shop" component={Shop}/>
      </Router>
    </div>
  );
}

export default App;
