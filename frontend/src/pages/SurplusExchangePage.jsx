import { useEffect, useState } from "react";
import BigTextButton from "../components/BigTextButton";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import '../styles/SurplusExchangePage.css'
import axios from "axios";
import InventoryCard from "../components/InventoryCard";

const SurplusExchangePage = () => {

    const [data, setData] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);


    useEffect(() => {

        // remove this code later after using a statemanagement solution to fetch data from an API (Zustand)
        console.log("page loaded");

        axios.get('/public/data.json')
            .then(res => {
                // console.log(res.data);
                setData(res.data);
                setIsDataLoaded(true);
            }).catch(err => {
                console.log(err);
                setIsDataLoaded(false);
            })

    }, [])

    return (
        <>
            <section className="hero">
                <div className="container">
                    <Navbar />

                    <div className="hero-content">
                        <h1>Food Surplus Exchange</h1>
                        <p>Exchange your surplus fruits and veggies for a different agricultural stock of the same value</p>
                        <BigTextButton buttonText="Post Your Stock" buttonUrl="/post" />
                    </div>
                </div>
            </section>

            <section className="search">
                <h2 className="heading-2">Find Your Agric needs.</h2>
                <SearchForm />
            </section>

            <section className="container search-results-container">
                {/* render cards max of 6 desktop and 3 mobile */}

                {
                    isDataLoaded ? <div className="search-results">
                        {
                            data.map(item => (
                                // create a single card and pass the relevant information
                                <InventoryCard item={item} key={item.id} />
                            ))
                        }
                    </div> : <p className="loader">Loading...</p>
                }

            </section>
        </>
    )
}

export default SurplusExchangePage
