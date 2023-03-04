import React from 'react'
import BrandFeatured from '../../component/Brand/BrandFeatured';
import DiscountSection from '../../component/Home/DiscountSection';
import HomeCategory from '../../component/Home/HomeCategory';
import Slider from '../../component/Home/Slider';
import CardProductsContainer from '../../component/Products/CardProductsContainer';




const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory />
      <CardProductsContainer
        btntitle="المزيد"
        title="الاكثر مبيعا"
        pathText="/products"
      />
      <DiscountSection />
      <CardProductsContainer
        btntitle="المزيد"
        title="احدث الازياء"
        pathText="/products"
      />
      <BrandFeatured btntitle="المزيد" title="احدث الماركات" />
    </div>
  );
}

export default HomePage