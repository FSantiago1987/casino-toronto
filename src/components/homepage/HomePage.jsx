import React from 'react'
import './homePage.css';
import BookingSteps from '../bookingSteps/BookingSteps';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function HomePage() {
    return (
        <div className="Homepage">
            <Header />
            <BookingSteps />
            <Footer />
        </div>
    )
}

export default HomePage
