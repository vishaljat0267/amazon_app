import React from 'react'
import axios from 'axios';
import Image from '../images/am.jpeg'
import { useLocation } from 'react-router-dom';

export default function Payment() {
    const {state} = useLocation()
   console.log("lllllllllll",state)

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const result = await axios.post("http://localhost:5000/orders");

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        const { amount, id: order_id, currency } = result.data;

        const options = {
        key: "rzp_test_hyiNR7w0F4L6M8", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "vishal.",
            description: "Test Transaction",
            image: {  Image },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post("http://localhost:5000/success", data);

                alert(result.data.msg);
            },
            prefill: {
                name: "vishal",
                email: "vishaljat0267@gmail.com",
                contact: "9752464830",
            },
            notes: {
                address: "vishal Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
  return (<>
   <div className="App">
  
   
            <header className="App-header">
                <img src={Image} className="App-logo" alt="logo" />
                <p>Buy React now!</p>
                <button className="App-link" onClick={displayRazorpay}>
                    Pay ₹{ state}
                  
                </button>
            </header>
        </div>
  
  
  </>
   
  )
}