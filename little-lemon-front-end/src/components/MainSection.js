import React from 'react';
import Colors from '../Styles/GlobalStyles'
import photo from '../assets/images/restauranfood.jpg'
import MainButton from './MainButton';

export default function MainSection() {
    return (
        <main style={styles.container}>
            <div style={styles.textContainer}>
                <h1>Little Lemon</h1>
                <h4>Chicago</h4>
                <p>Little Lemon is a restaurant that serves delicious food.</p>
                <MainButton info={"Reserve a Table"} />
            </div>
            <div style={styles.photoContainer}>
                <img style={styles.photoElement} src={photo} alt='logo' />
            </div>
        </main>
    )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '40vh',
        padding: '0 2rem',
        backgroundColor: Colors.mainColor,
        color: Colors.titlesColor,
        padding: '1.5rem',
    },
    textContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: Colors.secondaryColor,
        fontSize: '1.3rem',
    },
    photoContainer: {
        margin: '2rem',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: "center",
    },
    photoElement: {
        height: "100%",
        borderRadius: '20px',
    }
}
