import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { Container } from '@mui/material';


const stripePromise = loadStripe('pk_test_51JyYp6GR0aAFrr6dcl9za1EiTmdVHoL94h9d8tsN2UZUekSEZ9K32oOm3HxId8i8bKDXsbCCLc25hK4RfwoGBibI00R9pkES6X')


const Payment = () => {
    const {bookingId} = useParams();
    const [booking, setbooking] = useState({});
    useEffect( () => {
        fetch(`https://stark-gorge-54734.herokuapp.com/bookings/${bookingId}`)
        .then(res => res.json())
        .then(data => setbooking(data))
    } , [bookingId])


    return (
        <Container>
            <h4 style={{color: '#303030', fontFamily:'"Verdana",serif', lineHeight: '1em', padding: '10px'}}>Please Pay for: {booking.clientName} for {booking.productName}</h4>
            <br />

           {booking?.price && <Elements stripe={stripePromise}>
                <CheckoutForm 
                    booking={booking}
                />
            </Elements>}


        </Container>
    );
};

export default Payment;