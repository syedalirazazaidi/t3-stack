const express = require('express')
const cors = require('cors')
require('dotenv').config()
// const app = express()

// const Stripe = require('stripe')
// app.use(cors())
// const mongoose = require('mongoose')
// const stripe = Stripe(process.env.STRIPE_KEY)
const stripe = require('stripe')(
  'sk_test_51MUngIEqp60OUVoTFU6L7nc11EHlOzG8xLwznczkRxqdGadk7QowK3t8fkJjXlL2mwkdVUuVdBkoCRpO91euzpNB00AIUPcn1K',
)
const router = express.Router()

router.post('/payement', async (req, res) => {
  res.json({ url: 'Hi' })
  console.log(req.body, 'BODY')
  const cartnewProps = req.body.items
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
    success_url: `http://localhost:3000/success`,
    cancel_url: `${process.env.CLIENT_URL}/cancel`,
  })

  res.send(
    JSON.stringify({
      url: session.url,
    }),
  )
})

module.exports = router
