import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <header>
                <Link to="/" className="logo">Logo</Link>
                <nav>
                    <NavLink to="/" activeClassName="navlink" className='link'>Home</NavLink>
                    <NavLink to="/blog" activeClassName="navlink" className='link'>Blog</NavLink>
                    <NavLink to="/services" activeClassName="navlink" className='link'>Services</NavLink>
                    <NavLink to="/location" activeClassName="navlink" className='link'>Location</NavLink>
                </nav>
            </header>
        </div>
    )
}

export default Navbar

