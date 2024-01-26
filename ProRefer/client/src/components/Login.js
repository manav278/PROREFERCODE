import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import './Login.css';
export default function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onHandleChangeEmail = (event) => {
        console.log("Successfully Handled.");
        setEmail(event.target.value);
    }


    const onHandleChangePassword = (event) => {
        console.log("Successfully Handled.");
        setPassword(event.target.value);
    }

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:3003/", {
                email, password
            })
                .then(res => {
                    if (res.data === "exist") {
                        history("/home", { state: { id: email } })
                    }
                    else if (res.data === "notexist") {
                        alert("User have not sign up")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }
    return (
        <div className='login-container'>
            <h1>Welcome back!</h1>
            <div>
                <p>Log in to access your account.</p>
            </div>
            <form className="login-form" action="POST">
                <div className="form-group">
                    <input className="login-container" type='email' onChange={onHandleChangeEmail} placeholder='Email Address' id='' name=''></input>
                </div>

                <div className="form-group">
                    <input type='password' onChange={onHandleChangePassword} placeholder='Password' id='' name=''></input>
                </div>

                <div className="form-group">
                    <button type='submit' onClick={submit}>Login</button>
                </div>
            </form>
            <p>OR</p>
            <span>Don't have an account? </span><Link to="/signup">Signup now</Link>
        </div>
    )
}
