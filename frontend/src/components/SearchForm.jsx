import { IoSearchOutline } from "react-icons/io5";
import '../styles/SearchForm.css';

const SearchForm = () => {

    const handleSubmit = () => {
        alert("Submitted!")
    }

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input type="text" placeholder="Tomatoes" />
            <button type="submit">
                <IoSearchOutline />
                Find
            </button>
        </form>
    )
}

export default SearchForm
