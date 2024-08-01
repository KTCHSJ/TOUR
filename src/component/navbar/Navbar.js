import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaLine, FaTiktok } from 'react-icons/fa';
import logo from "../../asset/logo-blue.svg"
import { Link } from 'react-scroll';
import './NavbarStyle.css';

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                {/* Add logo here if needed */}
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<RxHamburgerMenu className='icon' />) : (<AiOutlineClose style={{ color: '#3333FF' }} className='icon' />)}
            </div>
            <ul className="nav-menu">
                <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
                <Link to='about' smooth={true} duration={500}><li>About Us</li></Link>
                <Link to='destinations' smooth={true} duration={500}><li>Destinations</li></Link>
                <Link to='packages' smooth={true} duration={500}><li>Packages</li></Link>
                <Link to='gallery' smooth={true} duration={500}><li>Gallery</li></Link>
                <Link to='contact' smooth={true} duration={500}><li>Contact Us</li></Link>
            </ul>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
            <div className="mobile-logo">
                    <img src={logo} alt="TiewTour" className="navbar-logo" />
                </div>
                <ul className="mobile-nav">
                    <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
                    <Link to='about' smooth={true} duration={500}><li>About Us</li></Link>
                    <Link to='destinations' smooth={true} duration={500}><li>Destinations</li></Link>
                    <Link to='packages' smooth={true} duration={500}><li>Packages</li></Link>
                    <Link to='gallery' smooth={true} duration={500}><li>Gallery</li></Link>
                    <Link to='contact' smooth={true} duration={500}><li>Contact Us</li></Link>
                </ul>
                <div className="social-icons">
                    <FaFacebook className='icon' />
                    <FaLine className='icon' />
                    <FaTiktok className='icon' />
                    <FaInstagram className='icon' />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
