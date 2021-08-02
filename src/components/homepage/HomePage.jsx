import React from 'react'
import './homePage.css';
import BookingSteps from '../bookingSteps/BookingSteps';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Games from '../games/Games';
import About from '../about/About';

function HomePage() {
    return (
        <div className="Homepage">
            <Header />
            <BookingSteps />
            <About />
            <Games />
            <Footer />
        </div>
    )
}

export default HomePage
