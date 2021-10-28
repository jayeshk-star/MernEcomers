import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useState, useEffect } from 'react'
import axios from 'axios'
const KEY =
  'pk_test_51JpahvSESQFJFYqNyavqmK22ggpQHviIPZkS64T8LkXZbby4DCn08BMUg7d2whxaB37FpL2aODwYVCAmaQb5LlAH00dAVnv7tm'

const Pay = () => {
  const [stripeToken, setstripeToken] = useState(null)

  const onToken = token => {
    setstripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          'http://localhost:5000/api/checkout/payment',
          { tokenId: stripeToken.id, amount: 2000 }
        )
        console.log(res.data)
      } catch (err) {
        alert('error occured in payment')
      }
    }
    stripeToken && makeRequest()
  }, [stripeToken])
  return (
    <div>
      <StripeCheckout
        name='Al collection'
        image='https://cdn3.vectorstock.com/i/1000x1000/56/72/al-logo-monogram-with-piece-circle-ribbon-style-vector-29545672.jpg'
        billingAddress
        shippingAddress
        description='Your total is $20'
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            height: '30px',
            width: '100px',
            backgroundColor: 'black',
            color: 'red',
            margin: 'auto'
          }}
        >
          Pay now
        </button>
      </StripeCheckout>
    </div>
  )
}

export default Pay
