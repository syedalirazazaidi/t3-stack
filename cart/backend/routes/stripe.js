const express = require('express')
const cors = require('cors')
require('dotenv').config()
// const app = express()

// const Stripe = require('stripe')
// app.use(cors())
// const mongoose = require('mongoose')
// const stripe = Stripe(process.env.STRIPE_KEY)
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const router = express.Router()

router.post('/payement', async (req, res) => {
  const { cartnewProps } = req.body
  console.log(cartnewProps, '???')

  // Create a PaymentIntent with the order amount and currency
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_date: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  })

  res.send({ url: session.url })
})

module.exports = router
