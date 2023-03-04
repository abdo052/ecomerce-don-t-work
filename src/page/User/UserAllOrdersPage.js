import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserSiderBar from "./../../component/User/UserSiderBar";
import UserAllOrder from "../../component/User/UserAllOrder";

const UserAllOrdersPage = () => {
  return (
    <Container>
      <Row>
        <Col sm="3" xs="2" md="2">
          <UserSiderBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <UserAllOrder />
        </Col>
      </Row>
    </Container>
  );
};

export default UserAllOrdersPage;
