import { React, useState } from 'react'
import { useNavigate } from "react-router-dom"
import "./HomePage.css"
import "./RegistrationForm.css"
import { Link } from "react-router-dom";


const RegistrationForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // const [errorMsg, setErrorMsg] = useState(undefined);

    const handleForm = () => {
        if (password === confirmPassword) {
            submitForm();
            // navigate('/login');
        }
        else {
            alert("Passwords do NOT match");
        }
    }

    const submitForm = (e) => {
        // e.preventDefault();

        fetch('https://reqres.in/api/register', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });

        navigate('/login');
    }
    function returnHome(){
        navigate('/');
    }
    return (
        <div className='homepage-2'>
            <button className='btn-home' onClick={returnHome}>Home</button>
            <form action="" className='login-form'>
                <h1> Register </h1>
                <div className='content'>
                    <div className='form-items'>
                        <div className='input-field'>
                            <input type="text" name="email" id="email" autoComplete="off" placeholder='enter email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className='form-items'>
                        <div className='input-field'>
                            <input type="password" name="password" id="password" autoComplete="off" className='input-field' placeholder='enter password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className='form-items'>
                        <div className='input-field'>
                            <input type="password" name="ConfirmPassword" id="ConfirmPassword" autoComplete="off" placeholder="re-enter password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)
                                }
                            />
                        </div>
                        <Link to={"/register"} className="link"></Link>
                    </div>
                    <div className='action'>
                        <button onClick={handleForm} disabled={!email || !password || !confirmPassword}>Register</button>
                    </div>
                </div>
            </form>
        </div>



    )
}

export default RegistrationForm