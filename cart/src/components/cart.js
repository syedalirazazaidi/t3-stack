import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { Products } from '../types'
import StripeCheckout from 'react-stripe-checkout'
import PayButton from './payButton'
// export interface IAppProps {}

export default function Cart(props) {
  const cartnew = useSelector((state) => state.product.cartproduct)
  console.log(cartnew, '??')
  const makePayement = (token) => {
    const body = {
      token,
      // product,
    }
    const headers = {
      'Content-Type': 'application/json',
    }
    return fetch(`http://localhost:5000/payment`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })
      .then((resp) => {
        console.log(resp, 'RESPO')
        const { status } = resp
        console.log(status, 'STATUS')
      })
      .catch((err) => {
        console.log(err, 'ERROR')
      })
  }
  return (
    <>
      <Grid
        templateColumns="repeat(4, 2fr)"
        gap={8}
        marginTop="40px"
        mx="210px"
      >
        {cartnew?.map((prod) => (
          <GridItem
            _hover={{
              background: 'white',
              color: 'teal.500',
              pointer: 'curser',
            }}
            w="180px"
            h="210px"
          >
            <div style={{ display: 'flex', gap: '25px', cursor: 'pointer' }}>
              <p>{prod.price}</p>
              <p>{prod.name}</p>
            </div>
            <img
              style={{ cursor: 'pointer' }}
              src={prod.imageUrl}
              alt="myimage"
            />
          </GridItem>
        ))}
      </Grid>
      <Center>
        <PayButton cartnewProps={cartnew} />
      </Center>
    </>
  )
}
