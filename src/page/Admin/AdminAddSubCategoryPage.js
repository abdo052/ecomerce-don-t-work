import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../component/Admin/AdminSideBar";
import AdminAddSubCategory from './../../component/Admin/AdminAddSubCategory';

const AdminAddSubCategoryPage = () => {
  return (
    <Container>
      <Row>
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminAddSubCategory />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddSubCategoryPage;
