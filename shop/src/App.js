

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, { Component } from 'react';
import Header from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart';


class App extends Component {
  render() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route path='/home' >

          <Home />            
          </Route>

        </Switch>

        <Switch>
          <Route path='/Cart' exact >

          <Cart />
          </Route>
        </Switch>  

        

    </Router>
  );
}
}

export default App;
