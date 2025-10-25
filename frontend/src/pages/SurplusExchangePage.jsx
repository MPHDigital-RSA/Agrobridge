import { useEffect, useState } from "react";
import BigTextButton from "../components/BigTextButton";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import '../styles/SurplusExchangePage.css';
import InventoryCard from "../components/InventoryCard";

import { useProducts } from "../store/ProductContext";
import { Link } from "react-router-dom";

const SurplusExchangePage = () => {

    const { products, updateProducts, loadProducts, areProductsLoaded, loadSingleProducts } = useProducts();
    // const areProductsLoaded = useProductsLoadingState();
    // const updateProducts = useProductsUpdate();
    // const loadProducts = useLoadProducts();

    const [searchedItem, setSearchedItem] = useState('');

    useEffect(() => {
        loadProducts();
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

                    <div className="login-signup">
                        <Link to="/login" className="nav-button">Log In</Link>
                        <Link to="/signup" className="nav-button">Sign Up</Link>
                    </div>

                    <div className="hero-content">
                        <h1>Food Surplus Exchange</h1>
                        <p>Exchange your surplus fruits and veggies for a different agricultural stock of the same value</p>
                        <BigTextButton buttonText="Post Your Stock" buttonUrl="/post" />

                        {/* <button onClick={updateProducts}>State Management Test</button> */}
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
                            products.slice(0, 6).map(item => (
                                // create a single card and pass the relevant information
                                <InventoryCard item={item} key={item.id} />
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
