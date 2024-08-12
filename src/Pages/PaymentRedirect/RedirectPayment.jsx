import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { loadStripe } from "@stripe/stripe-js";

function RedirectPayment() {
  const { id } = useParams();

  useEffect(() => {
    // Define an async function to handle the redirect
    const redirectToCheckout = async () => {
      const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
      
      if (!stripe) {
        console.error("Stripe failed to load.");
        return;
      }

      const result = await stripe.redirectToCheckout({ sessionId: id });

      if (result.error) {
        console.error(result.error.message);
      }
    };

    // Call the async function
    redirectToCheckout();
  }, [id]);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <HashLoader size={50} color={"#123abc"} loading={true} />
    </div>
  );
}

export default RedirectPayment;
