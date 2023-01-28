// 'pk_test_51MUngIEqp60OUVoTGHpZrJVDmILPzv59laVyke5nImqMSrsB939ozADltTFmwTxDNvuBmYpcQmg1hymdHpMWVhzZ00JQm51gJS',

import { Button } from '@chakra-ui/react'
import axios from 'axios'
const url = 'http://localhost:5000'
const stripeKey = process.env.REACT_APP_KEY
function PayButton({ cartnewProps }) {
  const handleCheckout = async () => {
    console.log(cartnewProps, 'Props')
    await fetch
      .post(`http://localhost:5000/stripe/payement`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cartnewProps }),
      })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url)
        }
      })
  }
  return <Button onClick={() => handleCheckout()}>Check out</Button>
}

export default PayButton
