import { useEffect, useState } from "react";
import BigTextButton from "../components/BigTextButton";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import '../styles/SurplusExchangePage.css';
import InventoryCard from "../components/InventoryCard";

import { useProducts } from "../store/ProductContext";
import { Link, useNavigate } from "react-router-dom";

// function to check if user is logged
import { isUserLogged } from "../utilities/sessionStorage";
import { useUserData } from "../store/UserContext";

const SurplusExchangePage = () => {

    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const navigate = useNavigate();

    const { products, updateProducts, loadProducts, areProductsLoaded, loadSingleProducts } = useProducts();
    const { logingOut, userData, message } = useUserData();
    const [searchedItem, setSearchedItem] = useState('');

    useEffect(() => {
        loadProducts();
        // console.log(products);
    }, [searchedItem]);

    function filterProducts() {
        const filteredProducts = [];

        products.forEach(product => {
            product.name.filter()
        });
    }

    return (
        <>
            <section className="hero">
                <div className="container">
                    <Navbar />


                    {
                        isUserLogged() ?
                            <div>
                                <p style={{ color: "red", textAlign: "center" }}>profile</p>
                            </div> : <div className="login-signup">
                                <Link to="/login" className="nav-button">Log In</Link>
                                <Link to="/signup" className="nav-button">Sign Up</Link>
                            </div>
                    }


                    <div className="hero-content">
                        <h1>Food Surplus Exchange</h1>
                        <p>Exchange your surplus fruits and veggies for a different agricultural stock of the same value</p>
                        <BigTextButton buttonText="Post Your Product" buttonUrl="/post" />

                        <button onClick={() => { logingOut(), navigate("/") }}>LogOut</button>
                    </div>
                </div>
            </section>

            <section className="search">
                <h2 className="heading-2">Find Your Agric needs.</h2>
                <SearchForm searchedItem={searchedItem} setSearchedItem={setSearchedItem} />
            </section>

            <section className="container search-results-container">
                {/* render cards max of 6 desktop and 3 mobile */}

                {

                    searchedItem == "" ? areProductsLoaded ? <div className="search-results">
                        {
                            products.map(item => (
                                // create a single card and pass the relevant information
                                <InventoryCard item={item} key={item._id} />
                            ))
                        }
                    </div> : <p className="loader">Loading...</p>

                        : areProductsLoaded ? <div>
                            Searching
                        </div> : <p className="loader">Loading...</p>
                }

            </section>
        </>
    )
}

export default SurplusExchangePage
