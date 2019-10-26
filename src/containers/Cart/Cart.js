import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import DiscoverImg from '../../assets/images/Discover.svg'

const Cart = (props) => {
    const {
      } = props
    let products = JSON.parse(localStorage.getItem("cartProducts"));
    console.log("products", products.length);
    let totalSome = 0;
    
    let DPRODUCTS = products.map((product, index) => (
        <Row key={index} className="cartItemsCSS">
            <span> {totalSome = totalSome + product.price.amount}</span>
            <Col sm={2} className="cartImages"><img src={product.img ? product.img : DiscoverImg} className="productImg" id="sPImg" /></Col>
            <Col sm={4}><h1 className="product-title">{product.title}</h1></Col>
            <Col sm={2}><p className="price" >${product.price.amount}</p></Col>
            <Col sm={2} className="product-title"  >
                <input type="number" className="input-text qty text" step="1" min="1" max="1" defaultValue="1" name="quantity" title="Qty" size="4" inputMode="numeric" />
            </Col>
            <Col sm={2} className="price">${product.price.amount}</Col>
        </Row>
    ));
    JSON.stringify(localStorage.setItem("totalPrice", totalSome))
    JSON.stringify(localStorage.setItem("totalItems", products.length))

    let gotoShop = () => {
        props.history.push('/shop')
    }

    let gotoCheckout = () => {
        props.history.push('/checkout-free')
    }


    return (

        <div>
            <Container className="mt-5">
            <div className="cartFlexBox">
            <div className="FlexItems">
              “Discover – Homeowner” has been added to your cart.
            </div>
            <div className="FlexItems flexButton">
                <Button variant="primary" onClick={gotoShop}>CONTINUE SHOPPING</Button>
            </div>
        </div>
            </Container>
            <Container className="mt-5">
                <Row>
                    <Col sm={8}>
                        <div>

                            <Row>
                                <Col sm={2}></Col>
                                <Col sm={4}>Product</Col>
                                <Col sm={2}>Price</Col>
                                <Col sm={2}>Qunatity</Col>
                                <Col sm={2}>Total</Col>
                            </Row>
                            <hr />

                            {DPRODUCTS}


                        </div>
                    </Col>

                    <Col sm={4}>
                        <div className="order-details">
                            <div className="cartSubTotalAmount">
                                Subtotal
                            <span className="cart-amount">$ {totalSome}</span>
                            </div>
                            <div className="cartTotalAmount">
                                Total
                            <span className="cart-amount">${totalSome}</span>
                            </div>
                            <Col sm={12}></Col>
                            <label onClick={gotoCheckout} htmlFor="submit-form" tabIndex="0" id="cartPlaceOrderBtn" className={"place-order-button add-to-cart-button btn btn-primary btn-primary"} >
                                Proceed to checkout
                         </label>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
} 

export default withRouter(Cart)