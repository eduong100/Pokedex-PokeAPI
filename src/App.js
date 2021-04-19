import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Home from './components/layout/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

class App extends Component {
  state = {
    isLoggedIn: false
  }

  render() {
    const logUser = () => {
      this.state.isLoggedIn = true
    }
    return (
      <div className='App'>
        <Route exact path="/pokedex" render={
          () => (<Login logUser={logUser} />
          )} />
        <Route path="/pokedex/register" component={Register} />
        <Route path="/pokedex/home" render={
          () => (<Home isLoggedIn={this.state.isLoggedIn} />)} />
      </div>
    )
  }
}


export default App;
