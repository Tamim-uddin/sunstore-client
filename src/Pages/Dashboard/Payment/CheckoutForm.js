import { Alert, Button, CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hook/useAuth';

const CheckoutForm = ({ booking }) => {
    const {price, clientName, _id} = booking;
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth();


    const [error, seterror] = useState('');
    const [success, setsuccess] = useState('');
    const [processing, setprocessing] = useState(false);
    const [clientSecret, setclientSecret] = useState('');
    useEffect( () => {
        fetch('https://stark-gorge-54734.herokuapp.com/create-payment-intent', {
           
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
        .then(res => res.json())
        .then(data => setclientSecret(data.clientSecret));
    } , [price]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
          }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        setprocessing(true);
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
          });

          if(error){
              seterror(error.message);
              console.log(error);
              setsuccess('');
          }
          else{
              seterror('');
              console.log(paymentMethod);
          }

        //   payment intent
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: clientName,
                  email: user.email
                },
              },
            },
          );

          if(intentError){
              seterror(intentError.message);
              setsuccess('');
          }
          else{
              seterror('');
              console.log(paymentIntent);
              setsuccess('Your Payment Processed Successfully');
              setprocessing(false);

            //   save payment
            const payment ={
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }
            const url = `https://stark-gorge-54734.herokuapp.com/bookings/${_id}`;
            fetch(url, {
                
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => console.log(data));

          }

        
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            {processing ? <CircularProgress /> :  <Button variant="outlined" type="submit" disabled={!stripe || success}>
                Pay ${price}
            </Button>}
            </form>
            {error && <Alert sx={{width: '50%', textAlign: 'center'}} severity="error">{error}</Alert>}
            {success && <Alert sx={{width: '50%', textAlign: 'center'}} severity="success">{success}</Alert>}
        </div>
    );
};

export default CheckoutForm;