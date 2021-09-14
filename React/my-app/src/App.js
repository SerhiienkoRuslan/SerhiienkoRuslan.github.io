import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './home';
import Home2 from './home2';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home2} />
    </Switch>
  );
}

export default App;
