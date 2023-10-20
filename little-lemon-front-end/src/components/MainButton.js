import React from 'react';
import Colors from '../Styles/GlobalStyles';
function MainButton(props) {
    return (
        <button style={styles.button}>{props.info}</button>
    );
}

export default MainButton;


const styles = {
    button: {
        backgroundColor: Colors.titlesColor,
        color: Colors.white,
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.8vh',
        fontWeight: 'bold',
        margin: '10px 0',
        width: '100%',
        maxWidth: '250px',
        '&:hover': {
            backgroundColor: Colors.primaryDark,
        }
    }
}
