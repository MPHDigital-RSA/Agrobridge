import { IoSearchOutline } from "react-icons/io5";
import '../styles/SearchForm.css';
import { useState } from "react";

const SearchForm = ({ searchedItem, setSearchedItem }) => {
    console.log(searchedItem)
    const handleSubmit = () => {
        alert(inputText)
    }

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input type="text" placeholder="Tomatoes" onChange={(e) => setSearchedItem(e.target.value)} />
            <button type="submit">
                <IoSearchOutline />
                Find
            </button>
        </form>
    )
}

export default SearchForm
