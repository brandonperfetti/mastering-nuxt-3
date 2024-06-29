import stripe from 'stripe';
const config = useRuntimeConfig();
const Stripe = new stripe(config.stripeSecret);

export default Stripe;