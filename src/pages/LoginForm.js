import React, { useState } from 'react'
import "./LoginForm.css"
import "./HomePage.css"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        fetch('https://reqres.in/api/login', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("userToken", data.token)
                if (!data.error) navigate('/users');
                else alert('Incorrect Email or Password')
            })
            .catch((error) => console.error('Error:', error));
    }
    function returnHome(){
        navigate('/');
    }
    return (

        <div className='homepage-2'>
            <button className='btn-home' onClick={returnHome}>Home</button>
            <form action="" className='login-form'>
                <h1> Login </h1>
                <div className='content'>
                    <div className='form-items'>
                        <div className='input-field'>
                            <input type="text" name="email" id="email" autoComplete="off" placeholder='enter email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='form-items'>
                        <div className='input-field'>
                            <input name="password" id="password" type="password" autoComplete="off" className='input-field' placeholder='enter password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <Link to={"/register"} className="link">Forgot your password?</Link>
                </div>
                <div className='action'>
                    <button onClick={submitForm} disabled={!email || !password}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm