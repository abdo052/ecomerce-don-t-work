import React from 'react'
import UserAdressCard from './UserAdressCard';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserAllAdress = () => {
  return (
    <div>
      <div className="admin-content-text pb-4"> اهلا محمد علي </div>
      <UserAdressCard />
      <UserAdressCard />
      <UserAdressCard />

      <Row className="justify-content-center">
        <Col sm="5" className="d-flex justify-content-center">
          <Link to="/user/add-address" style={{ textDecoration: "none" }}>
            <button className="btn-add-address">اضافه عنوان جديد</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default UserAllAdress;