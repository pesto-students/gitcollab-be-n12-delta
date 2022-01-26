import asyncHandler from "express-async-handler";
// const uuid = require("uuid/v4");
// const stripe = require("stripe")("sk_test_51HYmaBJSHnaZ7WbAbM2E7JEL9jSFN67HEou5F8vBRq6TFEXQpF2JpEtxj7G4zoixWLlwiN8gaBuFejN0ZwDcRXac0034sixcy6");
import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51HYmaBJSHnaZ7WbAbM2E7JEL9jSFN67HEou5F8vBRq6TFEXQpF2JpEtxj7G4zoixWLlwiN8gaBuFejN0ZwDcRXac0034sixcy6');
import { uuid } from 'uuidv4';
// @desc    Fetch all categories
// @route   GET /api/categories
// @access  Public
const checkout = asyncHandler(async (req, res) => {
    console.log("Request:", req.body);

    let error;
    let status;
    try {
        const { product, token } = req.body;

        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });

        const idempotency_key = uuid();
        const charge = await stripe.charges.create(
            {
                amount: product.price,
                currency: "inr",
                customer: customer.id,
                receipt_email: token.email,
                description: `Purchased the aaa`,
                // shipping: {
                //     name: token.card.name,
                //     // address: {
                //     //     line1: token.card.address_line1,
                //     //     line2: token.card.address_line2,
                //     //     city: token.card.address_city,
                //     //     country: token.card.address_country,
                //     //     postal_code: token.card.address_zip
                //     // }
                // }
            },
            {
                idempotency_key
            }
        );
        console.log("Charge:", { charge });
        status = "success";
    } catch (error) {
        console.error("Error:", error);
        status = "failure";
    }

    res.json({ error, status });
});


export {
    checkout
};
