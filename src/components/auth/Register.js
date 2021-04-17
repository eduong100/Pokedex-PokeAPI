import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Register extends Component {
    render() {
        return (
            <form>

                <h3>Pokedex Register</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <Link to='/pokedex'><button>Register</button></Link>
            </form>
        );
    }
}