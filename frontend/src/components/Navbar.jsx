import { useState } from "react";
import Logo from "../assets/logo.png";
import '../styles/Navbar.css';
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

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
            <nav className="desktop-nav">
                <ul>
                    <li><a href="#" className="nav-link">Home</a></li>
                    <li><a href="#" className="nav-link">Exchange</a></li>
                    <li><a href="#" className="nav-link">Guide</a></li>
                    <li><a href="#" className="nav-link">Network</a></li>
                </ul>
            </nav>

            {/* hamburger menu */}
            <button className="hamburger" onClick={() => setIsMobileMenuOpen(true)}>
                <IoIosMenu />
            </button>

            {/* mobile menu */}
            {
                isMobileMenuOpen &&
                <nav className="mobile-nav">
                    <ul>
                        <button className="close-btn" onClick={() => setIsMobileMenuOpen(false)}><IoClose /></button>
                        <li><a href="#" className="nav-link">Home</a></li>
                        <li><a href="#" className="nav-link">Exchange</a></li>
                        <li><a href="#" className="nav-link">Guide</a></li>
                        <li><a href="#" className="nav-link">Network</a></li>
                    </ul>
                </nav>
            }

        </div>
    )
}

export default Navbar
