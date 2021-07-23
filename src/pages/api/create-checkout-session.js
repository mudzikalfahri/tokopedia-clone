const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    const {items, email} = req.body;

    const transformedItems = items.map((item) => ({
        description: item.description,
        quantity: item.quantity,
        price_data: {
            currency: "sgd",
            unit_amount: item.price * 100,
            product_data: {
                name: item.title,
                images: [item.image],
            },
        },
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_rates: ['shr_1JGEMLDR0fLlUAbHM220m9qb'],
        shipping_address_collection: {
            allowed_countries: ['SG', 'MY']
        },
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/mycart`,
        metadata: {
            email,
            images: JSON.stringify(items.map((item) => item.image))
        }
    })

    res.status(200).json({id: session.id});
};