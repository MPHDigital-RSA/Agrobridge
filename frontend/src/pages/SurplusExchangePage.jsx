import BigTextButton from "../components/BigTextButton";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import '../styles/SurplusExchangePage.css'

const SurplusExchangePage = () => {
    return (
        <div>
            <section className="hero">
                <div className="container">
                    <Navbar />

                    <div className="hero-content">
                        <h1>Food Surplus Exchange</h1>
                        <p>Exchange your surplus fruits and veggies for a different agricultural stock of the same value</p>
                        <BigTextButton buttonText="Post Your Stock" buttonUrl="#" />
                    </div>
                </div>
            </section>

            <section className="search">
                <h2 className="heading-2">Find Your Agric needs.</h2>
                <SearchForm />
            </section>
        </div>
    )
}

export default SurplusExchangePage
