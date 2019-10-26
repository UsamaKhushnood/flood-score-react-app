import React from 'react'
import { Container } from 'react-bootstrap'
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom'


const CartDetails = () => {
 
  return (
  <Container className="emptyCartTxt">
      Your cart is currently empty.
      <Link to={ROUTES.SHOP} style={{ cursor: 'pointer'}}  className="return-to-shop"  href="product/discover-homeowner"> 
        return to shop
      </Link>
  </Container>
  )
}


export default CartDetails
