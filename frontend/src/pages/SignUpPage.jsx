import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import '../styles/SignInLogInAndPostForm.css';

const SignUpPage = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isPwdVisible, setIsPwdVisible] = useState(false);

    const handleSubmit = () => {

    }

    return (
        <div className='form-container'>

            <Link to='/exchange' className='form-back-button'>
                Back to Exchange
            </Link>

            <div className="container">
                <div className="form-col">
                    <h2>Sign Up</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" value={username} placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <input type="text" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="form-group password">
                            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

                            {
                                isPwdVisible ? <button onClick={(e) => { e.preventDefault(); setIsPwdVisible(!isPwdVisible) }}><IoIosEyeOff /></button> : <button onClick={(e) => { e.preventDefault(); setIsPwdVisible(!isPwdVisible) }}><IoIosEye /></button>
                            }

                        </div>

                        <p className='already-has-account'>Already has an account? <Link to="/login" className='form-link'>Login</Link></p>

                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <div className="image-col">

                </div>
            </div>
        </div>
    )
}

export default SignUpPage
