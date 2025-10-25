import { useState } from "react";
import Logo from "../assets/logo.png";
import '../styles/Navbar.css';
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="navbar">
            <a href="#" className="logo-link">
                <img src={Logo} alt="" />
                <p className="company-name">
                    Agro bridge
                </p>
            </a>

            {/* desktop nav */}
            {/* <nav className="desktop-nav">
                <ul>
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/exchange" className="nav-link">exchange</Link></li>
                    <li><Link to="/guide" className="nav-link">guide</Link></li>
                    <li><Link to="/network" className="nav-link">network</Link></li>
                </ul>
            </nav> */}

            {/* hamburger menu */}
            {/* <button className="hamburger" onClick={() => setIsMobileMenuOpen(true)}>
                <IoIosMenu />
            </button> */}

            {/* mobile menu */}
            {/* {
                isMobileMenuOpen &&
                <nav className="mobile-nav">
                    <ul>
                        <button className="close-btn" onClick={() => setIsMobileMenuOpen(false)}><IoClose /></button>
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li><Link to="/exchange" className="nav-link">exchange</Link></li>
                        <li><Link to="/guide" className="nav-link">guide</Link></li>
                        <li><Link to="/network" className="nav-link">network</Link></li>
                    </ul>
                </nav>
            } */}

        </div>
    )
}

export default Navbar
