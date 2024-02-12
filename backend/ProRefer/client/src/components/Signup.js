import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import "./Signup.css"

export default function Signup() {

    const onHandleChangeEmail = (event) => {
        console.log("Successfully Handled.");
        setEmail(event.target.value);
    }


    const onHandleChangePassword = (event) => {
        console.log("Successfully Handled.");
        setPassword(event.target.value);
    }


    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:3003/signup", {
                email, password
            })
                .then(res => {
                    if (res.data === "exist") {
                        alert("User already exists")
                    }
                    else if (res.data === "notexist") {
                        history("/home", { state: { id: email } })
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
        <div className='signup-container'>
            <h1>Join us today!</h1>
            <div>
                <p>Sign up now to become a member.</p>
            </div>
            <form className="signup-form" action="POST">
                <div className="form-group">
                    <input className="signup-container" type='email' onChange={onHandleChangeEmail} placeholder='Email' id='' name=''></input>
                </div>

                <div className="form-group">
                    <input type='password' onChange={onHandleChangePassword} placeholder='Password' id='' name=''></input>
                </div>

                <div className="form-group">
                    <button type='submit' onClick={submit}>Signup</button>
                </div>
            </form>
            <p>OR</p>
            <span>Already have an account? </span><Link to="/">Login now</Link>
        </div>
    )

}