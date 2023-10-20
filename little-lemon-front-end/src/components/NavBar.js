import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useRef } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import logo from '../assets/images/Logo.png'
import '../Styles/NavBar.css'

export default function NavBar() {
    const navigate = useNavigate()
    const navRef = useRef()

    const ShowNavBar = () => {
        navRef.current.classList.toggle("responsive-nav");
    }

    return (
        <header>
            <nav ref={navRef} >
                <div onClick={() => navigate('/')}><img className="logo" src={logo} /></div>
                <Link to="/" className='nav-item'>Home</Link>
                <Link to="/about" className='nav-item'>About</Link>
                <Link to="/menu" className='nav-item'>Menu</Link>
                <Link to="/bookings" className='nav-item'>Bookings</Link>
                <Link to="/orderOnline" className='nav-item'>OrderOnline</Link>
                <Link to="/login" className='nav-item' >Login</Link>
                <button className="nav-btn nav-close-btn" onClick={ShowNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <div className='mobile-nav'>
                <div onClick={() => navigate('/')}><img className="logo" src={logo} /></div>
                <button className="nav-btn" onClick={ShowNavBar}>
                    <FaBars />
                </button>
            </div>
        </header >
    );
}
