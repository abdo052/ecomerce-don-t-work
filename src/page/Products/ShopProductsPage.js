import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CategoryHeader from '../../component/Category/CategoryHeader';
import SearchCountResult from '../../component/Utilty/SearchCountResult';
import SideFilter from './../../component/Utilty/SideFilter';
import CardProductsContainer from './../../component/Products/CardProductsContainer';
import Pagination from '../../component/Utilty/Pagination';

const ShopProductsPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult title=" 400 نتيجه بحث " />
        <Row className="d-flex flex-row">
          <Col sm="2" xs="2" md="2">
            <SideFilter />
          </Col>
          <Col sm="10" xs="10" md="10">
            <CardProductsContainer title="" btntitle=""  />
          </Col>
        </Row>
        <Pagination/> 
      </Container>
    </div>
  );
}

export default ShopProductsPage;