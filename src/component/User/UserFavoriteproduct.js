import React from 'react'
import Pagination from '../Utilty/Pagination';
import ProductCard from './../Products/ProductCard';
import { Row } from 'react-bootstrap';

const UserFavoriteproduct = () => {
  return (
    <div>
      <div className="admin-content-text pb-4"> اهلا محمد علي </div>
      <Row className="justify-content-start">
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
      </Row>
      <Pagination/>
    </div>
  );
}

export default UserFavoriteproduct;