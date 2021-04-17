import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <form>

                <h3>Pokedex Log In</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <Link to='/Home'><button>Login</button></Link>
                <Link to='/Register'><button>No Account?</button></Link>
            </form>
        );
    }
}