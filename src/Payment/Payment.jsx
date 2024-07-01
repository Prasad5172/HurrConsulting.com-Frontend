import React, { useState, useEffect } from "react";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import PaymentStatus from "./PaymentStatus";
import { Routes, Route } from "react-router-dom"



// Load Stripe with your publishable key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function Payment() {
    const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Fetch the client secret from your backend
    const fetchClientSecret = async () => {
      try {
        const response = await fetch('http://localhost:8000/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const { clientSecret } = await response.json();
        console.log(clientSecret)
        setClientSecret(clientSecret);
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };

    fetchClientSecret();
  }, []);

   

  const appearance = {
    theme: "light",
  };

  const options = {
    clientSecret,
    appearance,
  };
  return (
    <div>
        {clientSecret ? (
          <Elements stripe={stripePromise} options={options}>
          <Routes>
            <Route exact path='/' element={ <CheckoutForm />}></Route>
            <Route exact path='/status' element={ <PaymentStatus/>}></Route>
          </Routes>
          
            
          </Elements>
        ) : (
          <p>Loading...</p>
        )}
    </div>
  )
}

export default Payment