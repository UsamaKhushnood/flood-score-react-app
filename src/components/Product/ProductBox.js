import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Product.css'

import BreadCrumb from './BreadCrumb'
import DiscoverImg from '../../assets/images/Discover.svg'

const ProductBox = (props) => {
  // if (!localStorage.getItem("cartProducts")) {
  //   localStorage.setItem("cartProducts" , JSON.stringify([{id:2}]));
  // }
  const {
    // handleAddToCart,
    title,
    category,
    breadcrumb,
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
    props.history.push('/cart')

    // localStorage.setItem("cartProducts", {})

  }
  return (
    <Container>
      <Row>
        <Col>
          <img src={img ? img : DiscoverImg} className="productImg" alt="Discover Product" />
        </Col>
        <Col>
          <BreadCrumb data={breadcrumb} />
          <h1 className="product-title">{title}</h1>
          <p className="price">${showPrice}</p>
          <div className="quantity">
            <label className="screen-reader-text">{title} quantity</label>
            <input type="number" className="input-text qty text" step="1" min="1" max="100" defaultValue="1" name="quantity" title="Qty" size="4" inputMode="numeric" />
          </div>
          <Button
            onClick={onHandleAddToCart}
            variant="primary"
            type="submit"
            name="add-to-cart"
            className="add-to-cart-button">
              ADD TO CART
            </Button>
          <div className="product_meta">	
            <span>Category: <Link to={category.link}>{category.name}</Link></span>	
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default withRouter(ProductBox)
