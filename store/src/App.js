import React from 'react';
import { BrowserRouter as Router,
  Switch, Route, Redirect, } from "react-router-dom";
import './App.css';
import {connect} from "react-redux"
import Navbar from "./components/Navbar/Navbar"
import Products from './components/Products/Products';
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";
import Home from './components/Home.js/Home';

function App({ currentItem }) {
  return (
    <Router>
      <div className='app'>
        {/* <Heading/> */}
        <Navbar />
        <Switch>
          <Route exact path='/' component={Products} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/cart' component={Cart} />
          {!currentItem ? (<Redirect to="/home" />) : (
          <Route exact path='/product/:id' component={SingleItem} />
          )}
        </Switch>
      </div>
    </Router>
  )
}

const mapStateToProps = state => {
  return {
    currentItem :state.shop.currentItem
  }
}

export default connect(mapStateToProps) (App);
