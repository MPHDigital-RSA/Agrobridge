import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import '../styles/SignInLogInAndPostForm.css';

import { useLoadUserData, useLoggedStateOfUser } from '../store/UserContext';

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isPwdVisible, setIsPwdVisible] = useState(false);

    const user = useLoadUserData();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
    }

    return (
        <div className='form-container'>

            <Link to='/exchange' className='form-back-button'>
                Back to Exchange
            </Link>

            <div className="container">
                <div className="form-col">
                    <h2>Log In</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="form-group password">
                            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

                            {
                                isPwdVisible ? <button onClick={(e) => { e.preventDefault(); setIsPwdVisible(!isPwdVisible) }}><IoIosEyeOff /></button> : <button onClick={(e) => { e.preventDefault(); setIsPwdVisible(!isPwdVisible) }}><IoIosEye /></button>
                            }

                        </div>

                        <p className='already-has-account'>Don't have an account? <Link to="/signup" className='form-link'>Sign Up</Link></p>

                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <div className="image-col">

                </div>
            </div>
        </div>
    )
}

export default LoginPage
