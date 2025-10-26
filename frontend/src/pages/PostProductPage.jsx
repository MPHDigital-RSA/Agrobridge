import React, { useState } from 'react';
import '../styles/SignInLogInAndPostForm.css';
import { Link } from 'react-router-dom';

import { useProducts } from '../store/ProductContext';

const PostForm = () => {

    const { createProduct } = useProducts();
    const [image, setImage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData);
        // console.log(formValues);

        // update form data

        if (formData.get('title') == "" && formData.get('weight') == "") {
            alert("Add title and weight")
            return
        } else if (formData.get('title') == "" && formData.get('weight')) {
            alert("Add title")
            return
        } else if (formData.get('title') && formData.get('weight') == "") {
            alert("Add weight")
            return
        }
        else {
            // do a post request here
            // call create products and pass in form values
            createProduct(formValues);
        }

    }

    return (
        <div className='form-container'>
            <Link to='/exchange' className='form-back-button'>
                Back to Exchange
            </Link>
            <div className="container">
                <div className="form-col">
                    <h2>Post your stock</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" name='title' placeholder='Enter your title' />
                        </div>

                        <div className="form-group">
                            <input type="number" placeholder='weight in Kg' name='weight' />
                        </div>

                        <div className="form-group">
                            <input type="file" name='images' />
                        </div>

                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <div className="image-col">

                </div>
            </div>
        </div>
    )
}

export default PostForm
