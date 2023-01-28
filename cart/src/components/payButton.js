// 'pk_test_51MUngIEqp60OUVoTGHpZrJVDmILPzv59laVyke5nImqMSrsB939ozADltTFmwTxDNvuBmYpcQmg1hymdHpMWVhzZ00JQm51gJS',

import { Button } from '@chakra-ui/react'
import axios from 'axios'
const url = 'http://localhost:5000'
const stripeKey = process.env.REACT_APP_KEY
function PayButton({ cartnewProps }) {
  const handleCheckout = async () => {
    console.log(cartnewProps, 'Props')
    // axios.post('http://localhost:8080/api/stripe/payement', {
    //   items: cartnewProps,
    // })
    await fetch
      .post('http://localhost:8080/api/stripe/payement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [
            { id: 1, quantity: 3 },
            { id: 2, quantity: 1 },
          ],
        }),
      })
      .then((response) => {
        if (response.ok) return response.json()
        return response.json().then((json) => Promise.reject(json))
      })
      .then(({ url }) => {
        console.log(url)
        // if (response.url) {
        //   window.location.assign(response.url)
        // }
      })
      .catch((err) => console.error(err.error))
  }
  return <Button onClick={() => handleCheckout()}>Check out</Button>
}

export default PayButton
