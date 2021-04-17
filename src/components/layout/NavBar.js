import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">Pokedex</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/pokedex'><button>Logout</button></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
