import React from 'react'
import BrandContainer from '../../component/Brand/BrandContainer';
import Pagination from '../../component/Utilty/Pagination';

const AllBrandPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <BrandContainer />
      <Pagination />
    </div>
  );
};

export default AllBrandPage;