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
        <Route exact path="/" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/Home" component={Home} />
      </div>
    )
  }
}


export default App;
