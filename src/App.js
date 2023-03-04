import React from "react";
import "@fontsource/almarai";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/Home/HomePage";
import NavbarLogin from "./component/Utilty/NavbarLogin";
import Footer from "./component/Utilty/Footer";
import LoginPage from "./page/Auth/LoginPage";
import RegisterPage from "./page/Auth/RegisterPage";
import AllCategoryPage from "./page/Category/AllCategoryPage";
import AllBrandPage from "./page/Brand/AllBrandPage";
import ShopProductsPage from "./page/Products/ShopProductsPage";
import ProductDetailsPage from "./page/Products/ProductDetailsPage";
import CartPage from "./page/Cart/CartPage";
import ChoosePayMethoudPage from "./page/Checkout/ChoosePayMethoudPage";
import AdminAllProductPage from "./page/Admin/AdminAllProductPage";
import AdminAllOrdersPage from "./page/Admin/AdminAllOrdersPage";
import AdminAllOrderDetalisPage from "./page/Admin/AdminAllOrderDetalisPage";
import AdminAddBrandPage from "./page/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./page/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./page/Admin/AdminAddSubCategoryPage";
import AdminAddProductsPage from "./page/Admin/AdminAddProductsPage";
import UserAllOrdersPage from "./page/User/UserAllOrdersPage";
import UserFavoriteproductsPage from "./page/User/UserFavoriteproductsPage";
import UserAllAdresPage from './page/User/UserAllAdresPage';
import UserAddAdressPage from './page/User/UserAddAdressPage';
import UserEditAddressPage from './page/User/UserEditAddressPage';
import UserProfilePage from './page/User/UserProfilePage';

function App() {
  return (
    <div style={{ fontFamily: "Almarai" }}>
      <NavbarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/paymethoud" element={<ChoosePayMethoudPage />} />
          <Route path="/admin/allproducts" element={<AdminAllProductPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
          <Route
            path="/admin/orders/:id"
            element={<AdminAllOrderDetalisPage />}
          />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route
            path="/admin/addsubcategory"
            element={<AdminAddSubCategoryPage />}
          />
          <Route path="/admin/addproduct" element={<AdminAddProductsPage />} />
          <Route path="/user/allorders" element={<UserAllOrdersPage />} />
          <Route path="/user/favoriteproducts" element={<UserFavoriteproductsPage />}/>
          <Route path="user/addresses" element={<UserAllAdresPage />} />
          <Route path="/user/add-address" element={<UserAddAdressPage />} />
          <Route path="/user/edit-address" element={<UserEditAddressPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
