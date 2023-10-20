import React from 'react';
import MainButton from './MainButton';
import FoodCard from './FoodCard';
import LD from '../assets/images/lemon-dessert.jpg';
import greekSalad from '../assets/images/greek-salad.jpg';


function SpecialsSection() {
    return (
        <div style={styles.container}>
            <div style={styles.headerInfo}>
                <p>This weeks Special</p>
                <MainButton info={"Online Menu"} />
            </div>
            <div style={styles.specialsContainer}>
                <FoodCard img={LD} name={"Lemon Dessert"} price={"$12.99"} desc={"Fresh and crisp lettuce, juicy tomatoes, crunchy cucumbers, and tangy feta cheese come together in this classic Greek salad. Topped with Kalamata olives and a zesty vinaigrette dressing, this salad is the perfect light and refreshing meal for any time of day."} />
                <FoodCard img={LD} name={"Greek Salad"} price={"$12.99"} desc={"Fresh and crisp lettuce, juicy tomatoes, crunchy cucumbers, and tangy feta cheese come together in this classic Greek salad. Topped with Kalamata olives and a zesty vinaigrette dressing, this salad is the perfect light and refreshing meal for any time of day."} />
                <FoodCard img={LD} name={"Greek Salad"} price={"$12.99"} desc={"Fresh and crisp lettuce, juicy tomatoes, crunchy cucumbers, and tangy feta cheese come together in this classic Greek salad. Topped with Kalamata olives and a zesty vinaigrette dressing, this salad is the perfect light and refreshing meal for any time of day."} />
            </div>
        </div>
    );
}

export default SpecialsSection;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: '2rem',
    },
    headerInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
    },
    specialsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '80%',
    }
}