import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CartIem from './../../component/Cart/CartIem';
import CartCheckout from './../../component/Cart/CartCheckout';

const CartPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <div className="cart-title mt-4"> عربه التسوق </div>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs="12" md="9">
          <CartIem />
          <CartIem />
        </Col>
        <Col xs="6" md="3">
          <CartCheckout />
        </Col>
      </Row>
    </Container>
  );
}

export default CartPage;