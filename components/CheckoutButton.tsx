"use client";
// components/CheckoutButton.tsx
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

// Load Stripe using your public key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

const CheckoutButton: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        setLoading(true);

        const stripe = await stripePromise;

        // Call your backend to create the Checkout Session
        const res = await fetch('/api/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const { id } = await res.json();

        // Redirect to Stripe Checkout
        if (stripe) {
            const result = await stripe.redirectToCheckout({ sessionId: id });

            if (result.error) {
                console.error(result.error.message);
            }
        }

        setLoading(false);
    };

    return (
        <button onClick={handleCheckout} disabled={loading}>
            {loading ? 'Processing...' : 'Checkout'}
        </button>
    );
};

export default CheckoutButton;
