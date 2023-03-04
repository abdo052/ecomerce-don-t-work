import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserSiderBar from "./../../component/User/UserSiderBar";
import UserEditAddress from './../../component/User/UserEditAddress';

const UserEditAddressPage = () => {
  return (
    <Container>
      <Row>
        <Col sm="3" xs="2" md="2">
          <UserSiderBar />
        </Col>
        <Col sm="9" xs="10" md="10">
           <UserEditAddress/>
        </Col>
      </Row>
    </Container>
  );
};

export default UserEditAddressPage;
