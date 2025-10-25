import React, { useState } from 'react';
import '../styles/SignInLogInAndPostForm.css';
import { Link } from 'react-router-dom';

const PostForm = () => {

    const [formData, setFormData] = useState({
        title: "",
        number: "",
    });

    const [title, setTitle] = useState("");
    const [number, setNumber] = useState("");
    const [file, setFile] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // update form data

        if (title == "" && number == "") {
            alert("Add title and number")
            return
        }

        else {
            await setFormData([
                title,
                number,
            ])
        }

        console.log(formData)

        // reset the title input
        setTitle('');
        setNumber("");

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
                            <input type="text" value={title} placeholder='Enter your title' onChange={(e) => setTitle(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <input type="number" placeholder='weight in Kg' value={number} onChange={(e) => setNumber(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <input type="file" />
                        </div>

                        <button>Submit</button>
                    </form>
                </div>
                <div className="image-col">

                </div>
            </div>
        </div>
    )
}

export default PostForm
