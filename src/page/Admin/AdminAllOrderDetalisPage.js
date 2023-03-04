import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../component/Admin/AdminSideBar";
import AdminOrderDetalis from './../../component/Admin/AdminOrderDetalis';

//this page reloaded component >> AdminAllProductPage and cliked on any product

const AdminAllOrderDetalisPage = () => {
  return (
    <Container>
      <Row>
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminOrderDetalis />          
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllOrderDetalisPage;
