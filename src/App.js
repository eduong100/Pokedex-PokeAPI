import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Home from './components/layout/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route exact path="/pokedex" component={Login} />
        <Route path="/pokedex/hegister" component={Register} />
        <Route path="/pokedex/home" component={Home} />
      </div>
    )
  }
}


export default App;
