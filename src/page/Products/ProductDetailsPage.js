import React from 'react'
import { Container } from 'react-bootstrap';
import CategoryHeader from '../../component/Category/CategoryHeader'
import ProductDetails from './../../component/Products/ProductDetails';
import RateContainer from './../../component/Rate/RateContainer';
import CardProductsContainer from './../../component/Products/CardProductsContainer';

const ProductDetailsPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContainer />
        <CardProductsContainer title="منتجات قد تعجبك" />
      </Container>
    </div>
  );
}

export default ProductDetailsPage;