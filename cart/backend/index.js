const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const stripe = require('stripe')

const app = express()
app.use(cors())
require('dotenv').config()

const Stripe = stripe(process.env.STRIPE_KEY)
console.log(Stripe, 'STRIP')
const router = express.Router()

// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         // price: '{{PRICE_ID}}',
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${YOUR_DOMAIN}/success.html`,
//     cancel_url: `${YOUR_DOMAIN}/cancel.html`,
//   })
//   //   devstrapi

//   res.redirect(303, session.url)
// })
const port = process.env.PORT || 5000
const uri = process.env.DB_URI

app.listen(port, () => console.log('Running on port 4242'))

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('mongodb connection successfull'))
  .catch((error) => console.log('mongodb conection failed', error.message))
