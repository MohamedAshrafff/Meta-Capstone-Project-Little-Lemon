export default function ConfirmedBooking() {
    return (
        <main style={styles.confirmedContainer}>
            <p style={styles.title}>Booking Confirmed!!!</p>
            <p style={styles.subTitle}>Please provide your name and contact number at the reception upon arrival</p>
            <p style={styles.subTitle}>We are excited to serve you</p>
        </main>
    )
}

const styles = {
    confirmedContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#4CAF50',
    },
    subTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#4CAF50',
    }
}

