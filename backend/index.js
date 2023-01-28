const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Stripe = require('stripe')
const { randomUUID } = require('uuid')
const stripe = require('./routes/stripe')
require('dotenv').config()
const app = express()
app.use(
  cors({
    origin: 'http://localhost:5500',
  }),
)

// const stripe = Stripe(process.env.STRIPE_KEY)

// const router = express.Router()
app.use('/api/stripe', stripe)

const port = process.env.PORT || 8080
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
