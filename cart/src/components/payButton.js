// 'pk_test_51MUngIEqp60OUVoTGHpZrJVDmILPzv59laVyke5nImqMSrsB939ozADltTFmwTxDNvuBmYpcQmg1hymdHpMWVhzZ00JQm51gJS',

import { Button } from '@chakra-ui/react'
import axios from 'axios'
const url = 'http://localhost:5000'
const stripeKey = process.env.REACT_APP_KEY
function PayButton({ cartnewProps }) {
  const handleCheckout = async () => {
    console.log(cartnewProps, 'Props')
    axios
      .post('http://localhost:5000/api/checkout', {
        items: cartnewProps,
      })
      // await fetch
      //   .post('http://localhost:5000/api/checkout', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({
      //       items: cartnewProps,
      //     }),
      //   })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url
        }
      })

      .catch((err) => console.log(err.message))
  }
  return <Button onClick={() => handleCheckout()}>Check out</Button>
}

export default PayButton
