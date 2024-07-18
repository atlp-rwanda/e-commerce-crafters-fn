import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Admin from "../Portal/admin";
import Buyer from "../Portal/Buyer";
import Seller from "../Portal/Seller";
import VerifyCode from "../pages/VerifyCode";
import VerifyEmail from "../Lib/VerifyEmail";
import AuthGoogle from "../Lib/authgoogle";
import Users from "../pages/Users";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import Test from "../pages/Check";
import Analytics from "../pages/Analytics";
import AdminHome from "../pages/Admin/AdminHome";
import Homepage from "../pages/Homepage";
import Products from "../pages/ProductsPage";
import { OrderTrackingPage } from "../pages/orderTrackingPage";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Singlepage from "../pages/singlePage";
import Requests from "../pages/Requests";
import AdminSettings from "../Components/dashboard/AdminSettings";
import Forgotpassword from "../Lib/ForgotPassword";
import User from "../pages/User";
import Sellers from "../pages/Sellers";
import Signin from "../pages/Signin";

import Chat from "../pages/chat/Chat";
import OrderComponent from "../Components/orders";

const AppRoutes: React.FC = () => (
  <div>
    <Routes>
      
      <Route path="" element={<Homepage />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/2fa" element={<VerifyCode />} />
      <Route path="/verifyemail" element={<VerifyEmail />} />
      <Route path="/authgoogle" element={<AuthGoogle />} />
      <Route path="/singleproduct" element={<Singlepage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/forgot-password" element={<Forgotpassword />} />
      <Route path="/product/:id" element={<Singlepage />} />
      <Route element={<AuthOutlet fallbackPath="/login" />}>
        <Route path="/chat" element={<Chat />} />
        <Route path="/order/:orderId" element={<OrderTrackingPage />} />
        <Route path="/orders" element={<OrderComponent />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminHome />} />
          <Route path="users" element={<Users />} />
          <Route path="sellers" element={<Sellers />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="requests" element={<Requests />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
        <Route path="/user" element={<User />} />
        <Route path="/buyer" element={<Buyer />} />
        <Route path="/vendor" element={<Seller />} />
      </Route>
    </Routes>
  </div>
);
export default AppRoutes;
