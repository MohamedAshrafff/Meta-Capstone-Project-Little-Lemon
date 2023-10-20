import React from 'react';
import Colors from '../Styles/GlobalStyles';

function FoodCard(props) {
    return (
        <div style={styles.container}>
            <img style={styles.photo} src={props.img} />
            <div style={styles.headings}>
                <p style={styles.nameText}>{props.name}</p>
                <p style={styles.priceText}>{props.price}</p>
            </div>
            <p style={styles.descText}>{props.desc}</p>
            <p>Order a Delivery</p>
        </div>
    );
}

export default FoodCard;

const styles = {
    photo: {
        width: '80%',
        borderRadius: '1rem',
    },
    container: {
        backgroundColor: "#D9D9D9",
        borderRadius: '1rem',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '2rem',
    },
    headings: {
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    nameText: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    priceText: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: Colors.titlesColor,
    },
    descText: {
        fontSize: '1.2rem',
        textAlign: 'left',
    }
}