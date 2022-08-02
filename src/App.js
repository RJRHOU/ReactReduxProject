import React, { useState } from 'react';
import { BrowserRouter as Router,
  Switch, Route, Redirect, } from "react-router-dom";
import './App.css';
import './components/PaymentForm.css';
import {connect} from "react-redux"
import Navbar from "./components/Navbar/Navbar"
import Products from './components/Products/Products';
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";
import Home from './components/Home.js/Home';
import StripeContainer from './components/StripeContainer';

function App({ currentItem }) {
  
  const [showItem, setShowItem] = useState(false)
  
  
  return (
    <Router>
      <div className='app'>
       
        <Navbar />
        <Switch>
          <Route exact path='/products' component={Products} />
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          {!currentItem ? (<Redirect to="/" />) : (
          <Route exact path='/product/:id' component={SingleItem} />
          )}
          
         <Route exact path='/stripeContainer' component={StripeContainer}  />
         {/* {showItem ? <StripeContainer/> : <> <button onClick={() => setShowItem(true)}>Purchase</button> </>} */}
         
        
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
