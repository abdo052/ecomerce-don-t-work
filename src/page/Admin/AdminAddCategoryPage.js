import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../component/Admin/AdminSideBar";
import AdminAddCategory from './../../component/Admin/AdminAddCategory';


const AdminAddCategoryPage = () => {
  return (
    <Container>
      <Row>
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminAddCategory />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddCategoryPage;
