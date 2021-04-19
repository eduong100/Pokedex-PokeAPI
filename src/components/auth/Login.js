import React from "react";
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import {Button, Col} from 'react-bootstrap';

export default function Login( {logUser} ) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isLoggedIn, switchLogin] = React.useState(false)
    const [loginFlag, switchFlag] = React.useState(false)

    const handleClick = async () => {
        const res = await axios.get("http://localhost:8000/api/users/")
        const size = res.data.length
        for(let i = 0; i < size; i++) {
            if(email === res.data[i]['email'] && password === res.data[i]['password']) {
                switchLogin(true)
                logUser()
                return
            }
        }
        switchFlag(true)
    }
    if(isLoggedIn) {
        return(
            <Redirect to='/pokedex/home' />
        )
    }
    return (
        <form>

            <h3>Pokedex Log In </h3>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" 
                onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input className="form-control" placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            { loginFlag ? (<div>Incorrect Username and/or Password</div>):null}

            <Button onClick={handleClick}>Login</Button>
            <Link to='/pokedex/register'><Button >No Account?</Button></Link>
            
            <div>Insecure!!! DO NOT use an email/password combination that you want to keep secret</div>
            <div>If you cannot login and no notifcation appears on attempt, the backend is disconnected</div>
        </form>
    );
    
}