import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ProductDetails = (props) => {
  const {
    handleAddToCart,
    title,
    price,
    img,
  } = props
  
  return (
    <div>

      <Row>
        <Col sm={2}></Col>  
        <Col sm={4}>Product</Col>  
        <Col sm={2}>Price</Col>  
        <Col sm={2}>Qunatity</Col>  
        <Col sm={2}>Total</Col>  
      </Row> 
      <hr />
      <Row>
        <Col sm={2}><img src={img} className="productImg" id="sPImg" alt="Discover Product" /></Col>  
        <Col sm={4}><h1 className="product-title" id="sPTitle">{title}</h1></Col>  
        <Col sm={2}><p className="price" id="sPPrice">${price}</p></Col>  
        <Col sm={2}>Qunatity</Col>  
        <Col sm={2}>Total</Col>  
      </Row> 

    </div>
  )
}


export default ProductDetails
