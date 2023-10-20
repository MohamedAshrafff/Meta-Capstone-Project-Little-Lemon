import React, { useReducer, useState } from 'react';
import BookingForm from '../components/BookingForm';
import NavBar from '../components/NavBar';
import { fetchAPI, submitAPI, } from '../APIs/bookingApi';
import { useNavigate } from 'react-router-dom';

export default function BookingPage() {
    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());
    const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date));

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate('/confirmation')
        }
    }

    const initializeTimes = (date) => {
        return fetchAPI(date);
    }

    const updateTimes = (date) => {
        const dateObj = new Date(date)
        return fetchAPI(dateObj)
    }


    const reducer = (state, action) => {
        let newState
        switch (action.type) {
            case 'updateTimes':
                newState = updateTimes(new Date(action.payload));
                break;
            default:
                throw new Error();
        }
        return newState
    }


    return (
        <>
            <NavBar />
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </>
    );
}