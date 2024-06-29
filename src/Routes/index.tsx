import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import Signin from "../pages/Signin";
import SignUp from "../pages/SignUp";
import Admin from "../Portal/admin";
import Buyer from "../Portal/Buyer";
import Seller from "../Portal/Seller";
import VerifyCode from "../pages/VerifyCode";
import VerifyEmail from "../Lib/VerifyEmail";
import AuthGoogle from "../Lib/authgoogle";
import Users from "../pages/Users";
import Sellers from "../pages/Sellers";
import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";
import AdminHome from "../pages/Admin/AdminHome";
import Homepage from "../pages/Homepage";
import Products from "../pages/ProductsPage";
import SingleProduct from "../pages/SingleProduct";
import { OrderTrackingPage } from "../pages/orderTrackingPage";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Singlepage from "../pages/singlePage";
import Forgotpassword from "../Lib/ForgotPasword";

const AppRoutes: React.FC = () => (
  <div>
    <Routes>
      <Route path="" element={<Homepage />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<Forgotpassword />} />
      <Route path="/2fa" element={<VerifyCode />} />
      <Route path="/verifyemail" element={<VerifyEmail />} />
      <Route path="/authgoogle" element={<AuthGoogle />} />
      <Route path="/singleproduct" element={<Singlepage />} />
      <Route path="/products" element={<Products />} />

      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/order-tracking" element={<OrderTrackingPage />} />
      <Route element={<AuthOutlet fallbackPath="/login" />}>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminHome />} />
          <Route path="users" element={<Users />} />
          <Route path="sellers" element={<Sellers />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/buyer" element={<Buyer />} />
        <Route path="/vendor" element={<Seller />} />
      </Route>
    </Routes>
  </div>
);

export default AppRoutes;
