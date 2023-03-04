import React from 'react'
import { Row } from 'react-bootstrap';
import UserAllOrderItem from './UserAllOrderItem';

const UserAllOrder = () => {
  return (
    <div>

    {/*  This is a title and import card  */}  
      <div className="admin-content-text pb-4"> اهلا محمد علي </div>
      <Row className="justify-content-between">
        {/*import all order from >>> UserAllOrderItem <<<  */}
        <UserAllOrderItem />
        <UserAllOrderItem />
        <UserAllOrderItem />  
      </Row>
    </div>
  );
}

export default UserAllOrder;
