import React from 'react';
import NavBar from '../components/NavBar';

export default function AboutPage() {
    return (
        <>
            <NavBar />
            <h1>About</h1>
            <section>
                <h2>Our Story</h2>
                <p>
                    Little Lemon is a restaurant that serves delicious food.
                </p>
            </section>
        </>
    );
}