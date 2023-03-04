import React from 'react'
import { Row } from 'react-bootstrap';
import AdminAllOrdersItem from './AdminAllOrdersItem';

const AdminAllOrders = () => {
  return (
    <div>
      <div className="admin-content-text"> ادراة جميع المنجات </div>
      <Row className="justify-content-center">
            <AdminAllOrdersItem/>
            <AdminAllOrdersItem/>
            <AdminAllOrdersItem/>
      </Row>
    </div>
  );
}

export default AdminAllOrders;