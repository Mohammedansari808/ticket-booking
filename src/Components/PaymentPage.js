import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useContext } from "react";
import CheckoutForm from "./CheckoutForm";
import "../styles/paymentpage.css"
import { contx } from "../App";
import { fullLink } from "./link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51MV6exSC4rEaEZLNvOofe5me2XVjOKrd591BK8SFWEVXrKi0GyHtlqeybQKMZ6aRU3zC7fu9XqciET57jh73ys9500glma6aLV");

export default function PaymentPage(props) {


    const token = localStorage.getItem("token")
    const email = localStorage.getItem("email")
    const role_id = localStorage.getItem("role_id")
    const username = localStorage.getItem("username")
    const [clientSecret, setClientSecret] = useState("");
    const { prize } = useContext(contx)
    useEffect(() => {
        toast.success("use 4242 4242 4242 4242 card no for testing", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: false
        })
        const finaldata = {
            prize: prize,
            email: email,
            token: token
        }
        // Create PaymentIntent as soon as the page loads
        fetch(`${fullLink}/pay`, {
            method: "POST",
            headers: {
                "x-auth-token": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(finaldata),
        })
            .then((res) => res.json())
            .then((data) => (setClientSecret(data.clientSecret)));


    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="payment" style={{ display: "flex", justifyContent: "center" }}>
            {clientSecret && (
                <Elements className="appse" options={options} stripe={stripePromise}>
                    <CheckoutForm email={email} username={username} token={token} role_id={role_id} />

                </Elements>
            )}
        </div>
    );
}