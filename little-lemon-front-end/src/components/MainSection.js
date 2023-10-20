import React from 'react';
import photo from '../assets/images/restauranfood.jpg'
import { Link } from 'react-router-dom';
import '../Styles/App.css'

export default function MainSection() {
    return (
        <section className='main-section'>
            <div className='banner'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p> We are a family owned Mediterraneran restaurant, focused on
                    traditional recipes servred with a modern twist.</p>
                <Link to="/bookings" >
                    <button aria-label="On Click">
                        Reserve a table
                    </button>
                </Link>
            </div>
            <div className='banner-img'>
                <img src={photo} alt='logo' />
            </div>
        </section>
    )
}
