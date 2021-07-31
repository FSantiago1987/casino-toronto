import React from 'react';
import Navbar from '../navbar/Navbar';
import TopSection from '../topSection/TopSection';
import './header.css';

function Header() {
    return (
        <div className="Header">
            <Navbar />
            <TopSection />
        </div>
    )
}

export default Header
