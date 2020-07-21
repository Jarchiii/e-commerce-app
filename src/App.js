import React, {useState} from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Home'
import Products from './Products.jsx'

import './index.css'


import UserCart from "./context/userCart"

function App() {
  const [currentCart, setCurrentCart] = useState(null)



const UserContextValue = {currentCart, setCurrentCart}

  return (
    <UserCart.Provider value={UserContextValue}>
      <div>
        <Switch className="App">
          <Route exact path="/" component={Home}/>
          <Route exact path="/products" component={Products}/>

        </Switch>
      </div>
      </UserCart.Provider>
  );
}

export default App;
