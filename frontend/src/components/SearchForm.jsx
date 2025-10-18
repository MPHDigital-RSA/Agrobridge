import { IoSearchOutline } from "react-icons/io5";
import '../styles/SearchForm.css';
import { useState } from "react";

const SearchForm = () => {

    // this is the variable to store the text content as the user types it.
    // when the key is pressed the system should search through the database for matching items and display them on the results page.
    const [inputText, setInputText] = useState("");


    const handleSubmit = () => {
        alert(inputText)
    }

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input type="text" placeholder="Tomatoes" onChange={(e) => setInputText(e.target.value)} value={inputText} />
            <button type="submit">
                <IoSearchOutline />
                Find
            </button>
        </form>
    )
}

export default SearchForm
