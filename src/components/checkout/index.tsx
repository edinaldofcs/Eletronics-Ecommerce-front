import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import type { NextPage } from "next";

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_TEST_KEY}`
);

const Checkout: NextPage = ()=>{

  async function handleClick(event:any) {
    console.log("teste");
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe:any = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1LmpqkFb5tpQxri84H33xMuJ", // Replace with the ID of your price
          quantity: 1,
        },
      ],
      mode: "subscription",
      successUrl: "http://localhost:3000/sucesso",
      cancelUrl: "http://localhost:3000/falha",
    });

    if (error){
      console.log(error);
    }
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  }
  return (
    <button role="link" onClick={handleClick}>
      clique
    </button>
  )
};

export default Checkout;
