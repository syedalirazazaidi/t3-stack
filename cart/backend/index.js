const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const stripe = require('stripe')
const { randomUUID } = require('uuid')

const app = express()
app.use(cors())
require('dotenv').config()

const Stripe = stripe(process.env.STRIPE_KEY)

const router = express.Router()
app.get('/', (req, res) => {
  res.send('IT WORK AT')
})
app.post('/payment', async (req, res) => {
  const { product, token } = req.body()
  console.log(product,'PROD')
  console.log(token,'token')
  const ideKey = uuid()
  const session = await stripe.customers.create({
    email: 'customer@example.com',
    source: token.id

  }).then(customer => {

    Stripe.charges.create({
      amount: product.price,

      currency: 'usd',
      customer: customer.id,
      receipt_email: token.email,
      description: `purchase of product name`,
      shipping:{
        name:token.card.name,
        address:{
          country:token.card.address_country
        }
      }
    }, { ideKey })
  }).then(result => res.status(200).json(result)).catch(err => console.log(err))
})
const port = process.env.PORT || 5000
const uri = process.env.DB_URI

app.listen(port, () => console.log('Running on port 5000'))

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('mongodb connection successfull'))
  .catch((error) => console.log('mongodb conection failed', error.message))
