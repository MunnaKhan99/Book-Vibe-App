import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import "./navbar.css"
const Navbar = () => {
    const [open, setOpen] = useState(false);
    useEffect(()=>{
        const handleResize = ()=>{
            if(window.innerWidth >= 769){
                setOpen(false);
            }
        };
        window.addEventListener('resize',handleResize);
        return ()=>window.removeEventListener('resize',handleResize);
    }
        
    ,[])
    return (
        <nav className='nav-container'>
            {/* image */}
            <div>
                <h1 className='nav-image'>Book Vibe</h1>
            </div>
            {/* link */}
            <div className='link-btn desktop-only'>
                <Link to='/'> <button className='nav-link-btn-1'>Home</button></Link>
                <button className='nav-link-btn-2'>Listed Books</button>
                <button className='nav-link-btn-3'>Pages to read</button>
            </div>
            {/* desktop-btn */}
            <div className='desktop-only'>
                <button className='nav-btn-1'>Sign In</button>
                <button className='nav-btn-2'>Sign Up</button>
            </div>


            {/* hamburger menu */}
            <button className='hamburger mobile-only' onClick={() => setOpen(!open)}>
                ☰
            </button>
            {/* Mobile Menu (toggle) */}
            {
                open && (
                    <div className='mobile-menu'>
                        <button className='nav-link-btn-1'>Home</button>
                        <button className='nav-link-btn-2'>Listed Books</button>
                        <button className='nav-link-btn-3'>Pages to Read</button>
                        <hr />
                        <button className='nav-btn-1'>Sign In</button>
                        <button className='nav-btn-2'>Sign Up</button>
                    </div>
                )
            }
        </nav>
    );
};

export default Navbar;