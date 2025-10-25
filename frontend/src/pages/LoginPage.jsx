import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import '../styles/SignInLogInAndPostForm.css';

import { useUserData } from '../store/UserContext';

const LoginPage = () => {

    const [isPwdVisible, setIsPwdVisible] = useState(false);

    // retrieve data from the store
    const { logingIn } = useUserData();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData);

        // validation

        if (formData.get('email') == "" && formData.get('password') == "") {
            alert("Enter email and password")
            return
        } else if (formData.get('email') == "" && formData.get('password')) {
            alert("Enter email")
            return
        } else if (formData.get('email') && formData.get('password') == "") {
            alert("Enter password")
            return
        }
        else {
            // do a post request here
            // call create products and pass in form values
            logingIn(formValues);
        }

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
                            <input type="text" name='email' placeholder='Email' />
                        </div>

                        <div className="form-group password">
                            <input type="password" placeholder='Password' name='password' />

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
