import React from 'react';
import img from "../../assets/Dating-playbook.png"
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner-container'>
            {/* left side */}
            <div className='left-side'>
                <h1 className='banner-title'>Books to freshen up your bookshelf</h1>
                <button className=' nav-btn-1'>View The List</button>
            </div>
            {/* right side */}
            <div className='right-side'>
                <img className='banner-image' src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;