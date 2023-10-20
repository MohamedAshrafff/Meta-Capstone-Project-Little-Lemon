import React, { useState } from 'react';
import '../Styles/App.css'
export default function BookingForm(props) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        props.submitForm({ date, time, guests, occasion })
    };

    const isValid = () => {
        return (date && time && guests && occasion && firstName && lastName)
    }

    const handleTimeChange = async (event) => {
        setTime(event.target.value)
        props.dispatch({ type: 'Update_Times', payload: event.target.value })
    }
    const options = props.availableTimes.map(time => <option key={time}>{time}</option>)

    return (
        <section className='form-section'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="res-fname">First Name:</label>
                    <input type="text" id="res-fname" value={firstName} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} required />
                </div>

                <div>
                    <label htmlFor="res-lname">Last Name:</label>
                    <input type="text" id="res-lname" value={lastName} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="res-date">Choose date:</label>
                    <input type="date" id="res-date" value={date} onChange={(event) => setDate(event.target.value)} required />
                </div>
                <div>
                    <label htmlFor="res-time">Choose time:</label>
                    <select id="res-time" value={time} onChange={handleTimeChange}>
                        {options}
                    </select>
                </div>
                <div>
                    <label htmlFor="guests"># of guests:</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(event) => setGuests(event.target.value)} minLength={1} />
                </div>
                <div>
                    <label htmlFor="occasion">Occasion:</label>
                    <select id="occasion" value={occasion} onChange={(event) => setOccasion(event.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>

                <button type="submit" className="form-btn" disabled={!isValid()} aria-label="On Click" >Make Your reservation</button>
            </form>
        </section>
    );
}
