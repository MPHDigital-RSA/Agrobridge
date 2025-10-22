import React, { useState } from 'react'
import '../styles/PostForm.css'

const PostForm = () => {

    const [formData, setFormData] = useState({
        title: "",
        number: 0
    });

    const [title, setTitle] = useState("");
    const [number, setNumber] = useState("");
    const [file, setFile] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(title, number);
        console.log(file);

        // reset the title input
        setTitle('');
        setNumber("");

    }

    return (
        <div className='form-container'>
            <div className="container">
                <div className="form-col">
                    <h2>Post your stock</h2>

                    <form action="" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" value={title} placeholder='Enter your title' onChange={(e) => setTitle(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <input type="number" placeholder='weight in Kg' value={number} onChange={(e) => setNumber(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <input type="file" value={file} onChange={(e) => setFile(e.target.value)} />
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
