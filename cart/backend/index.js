const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Stripe = require('stripe')
const { randomUUID } = require('uuid')
const stripe = require('./routes/stripe')
require('dotenv').config()
const app = express()
app.use(cors())

// const stripe = Stripe(process.env.STRIPE_KEY)

// const router = express.Router()
app.use('/stripe', stripe)

const port = process.env.PORT || 5000
const uri = process.env.DB_URI

app.listen(port, () => console.log('Running on port 5000'))

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('mongodb connection successfull'))
  .catch((error) => console.log('mongodb conection failed', error.message))
