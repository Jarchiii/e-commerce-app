import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Home'
import Products from './Products.jsx'

import './index.css'


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/products" component={Products}/>

    </Switch>
  );
}

export default App;
