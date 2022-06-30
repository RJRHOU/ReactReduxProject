import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import { useSelector } from "react-redux";

const PUBLIC_KEY =
  "pk_test_51LEePsBCyqMqUvCvHbaPwU4keWHA8neBBF4URdA0pcpCz95R4jy6AoooLs949PlcRd4ev4eOguHB2PxFftOo7T3y00Knzyr8gb";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  const totalPrice = useSelector((state) => state);
  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    const sumPrices = () => {
      let amt=0
      
      totalPrice.shop.cart.map((c) => {
        
        amt += c.price

      });
      setTotalAmt(amt)
    };

    sumPrices();
  }, []);
  return (
    <div>
      
   {totalAmt !== 0 && 
    <Elements stripe={stripeTestPromise}>
    <PaymentForm totalAmt={totalAmt} />
  </Elements>
  }
  </div>
    
  );
}
