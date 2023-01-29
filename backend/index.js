const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Stripe = require('stripe')
const { randomUUID } = require('uuid')
const stripenew = require('./routes/stripe')
require('dotenv').config()
const app = express()
// const stripe = require('stripe')(
//   'sk_test_51MUngIEqp60OUVoTFU6L7nc11EHlOzG8xLwznczkRxqdGadk7QowK3t8fkJjXlL2mwkdVUuVdBkoCRpO91euzpNB00AIUPcn1K',
// )
const stripe = Stripe(process.env.STRIPE_KEY)
const uuid = require('uuid').v4
app.use(cors())
app.use(express.static('public'))
app.use(express.json())
// const stripe = Stripe(process.env.STRIPE_KEY)

// const router = express.Router()
app.post('/api/checkout', async (req, res) => {
  const items = req.body.items

  let lineItem = []
  items.forEach((item) => {
    lineItem.push({
      amount: item.price * 100,
      quantity: item.quantity,
      id: item.id,
    })
  })

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
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
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  })

  res.redirect(303, session.url)
})

const port = process.env.PORT || 5000
const uri = process.env.DB_URI

app.listen(port, () => console.log('Running on port ', port))

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('mongodb connection successfull'))
  .catch((error) => console.log('mongodb conection failed', error.message))
