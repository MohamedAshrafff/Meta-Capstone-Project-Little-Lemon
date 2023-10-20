import React from 'react';
import NavBar from '../components/NavBar';
import MainSection from '../components/MainSection';
import SpecialsSection from '../components/SpecialsSection';

export default function HomePage() {
    return (
        <>
            <NavBar />
            <MainSection />
            <SpecialsSection />
        </>
    );
}