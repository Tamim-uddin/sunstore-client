import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51JyYp6GR0aAFrr6dcl9za1EiTmdVHoL94h9d8tsN2UZUekSEZ9K32oOm3HxId8i8bKDXsbCCLc25hK4RfwoGBibI00R9pkES6X')


const Payment = () => {
    const {bookingId} = useParams();
    const [booking, setbooking] = useState({});
    useEffect( () => {
        fetch(`http://localhost:5000/bookings/${bookingId}`)
        .then(res => res.json())
        .then(data => setbooking(data))
    } , [bookingId])


    return (
        <div>
            <h4>Please Pay for: {booking.clientName} for {booking.productName}</h4>
            <h4>Pay: ${booking.price}</h4>

            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>


        </div>
    );
};

export default Payment;