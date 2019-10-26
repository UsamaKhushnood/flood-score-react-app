import React from 'react'
import {  withRouter } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import './Product.css'
import DiscoverImg from '../../assets/images/Discover.svg' 

const SimpleProduct = (props) => {
  const {
    handleAddToCart,
    title,
    price,
    img,
  } = props
  const showPrice = (price.type === 'once') ? price.amount.toFixed(2) : `${price.amount.toFixed(2)} / ${price.type}`
  let onHandleAddToCart = () => {
    let localCartProduct = [];

    if (localStorage.getItem("cartProducts")) {
      localCartProduct = JSON.parse(  localStorage.getItem("cartProducts") );
      console.log("locerec", localStorage);
      localCartProduct.push({title:title, img:img, price:price})
      localStorage.setItem("cartProducts" , JSON.stringify( localCartProduct ));
    } else {
      localStorage.setItem("cartProducts" , JSON.stringify(  [{title:title, img:img, price:price}]  ));
    }
    console.log("handleAddToCart", localStorage.getItem("cartProducts") );
    // handleAddToCart();
    props.history.push('/cart')

    // localStorage.setItem("cartProducts", {})

  }
  return (
    <Container>

        <div id="pdetail" onClick={() => props.history.push(`/product/${props.pdetail}`)} >
          <img src={img ? img : DiscoverImg} className="productImg" id="sPImg" alt="Discover Product" />
          <h1 className="product-title" id="sPTitle">{title}</h1>
          <p className="price" id="sPPrice">${showPrice}</p>
        </div>
        <Button 
            onClick={onHandleAddToCart}
            variant="primary"
            type="submit"
            name="add-to-cart"
            className="add-to-cart-button">
              ADD TO CART
        </Button>

    </Container>
  )
}

export default withRouter(SimpleProduct)
