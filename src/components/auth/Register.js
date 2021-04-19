import React from "react";
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import {Button} from 'react-bootstrap';

export default function Register() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [emailUsed, setEmailUsed] = React.useState(false)
    const [success, setSuccess] = React.useState(false)
    const handleClick = async () => {
        if (!email || !password) {
            console.log("EMPTY FIELD")
            return
        }
        const res = await axios.get("http://localhost:8000/api/users/")
        const size = res.data.length
        console.log(res)
        for(let i = 0; i < size; i++) {
            if(email === res.data[i]['email']) {
                setEmailUsed(true)
                return
            }
        }
        axios.post("http://localhost:8000/api/users/create", {
            "email":email, "password": password
        })
        setSuccess(true)
    }
    if(success) {
        return(
            <Redirect to="/pokedex" />
        )
    }
    return (
        <form>

            <h3>Pokedex Register</h3>

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
            {emailUsed ? (<div>Email Taken</div>) : null}
            <Button onClick={handleClick}>Register</Button>
            <Link to='/pokedex'><Button >Go Back To Login Page</Button></Link>
        </form>
    );
}