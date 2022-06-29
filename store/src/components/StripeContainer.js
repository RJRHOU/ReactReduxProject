import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = 'pk_test_51LEePsBCyqMqUvCvHbaPwU4keWHA8neBBF4URdA0pcpCz95R4jy6AoooLs949PlcRd4ev4eOguHB2PxFftOo7T3y00Knzyr8gb'

const stripeTestPromise= loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm />
        </Elements>
  )
}
