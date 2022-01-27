import asyncHandler from "express-async-handler";
// const uuid = require("uuid/v4");
// const stripe = require("stripe")("sk_test_51HYmaBJSHnaZ7WbAbM2E7JEL9jSFN67HEou5F8vBRq6TFEXQpF2JpEtxj7G4zoixWLlwiN8gaBuFejN0ZwDcRXac0034sixcy6");
import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51HYmaBJSHnaZ7WbAbM2E7JEL9jSFN67HEou5F8vBRq6TFEXQpF2JpEtxj7G4zoixWLlwiN8gaBuFejN0ZwDcRXac0034sixcy6');
// import { uuid } from 'uuidv4';
import { v4 as uuidv4 } from 'uuid';




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

        const idempotencyKey = uuidv4();
        const stripeResponse = await stripe.charges.create(
            {
                amount: product.price * 100,
                currency: "inr",
                customer: customer.id,
                receipt_email: token.email,
                description: `Pharma products purchased`,
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
                idempotencyKey
            }
        );
        status = "success";
        let data = {
            id: stripeResponse.id,
            status: stripeResponse.status,
            email_address: stripeResponse.receipt_email,
            update_time: "",
            paid: stripeResponse.paid
        }
        res.send(data);
    } catch (error) {
        console.error("Error:", error);
        status = "failure";
    }

});


export {
    checkout
};
