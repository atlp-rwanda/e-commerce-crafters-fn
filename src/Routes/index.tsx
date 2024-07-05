import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet';
import Signin from '../pages/Signin';
import SignUp from '../pages/SignUp';
import Admin from '../Portal/admin';
import Buyer from '../Portal/Buyer';
import Seller from '../Portal/Seller';
import VerifyCode from '../pages/VerifyCode';
import VerifyEmail from '../Lib/VerifyEmail';
import AuthGoogle from '../Lib/authgoogle';
import Users from '../pages/Users';
import Chat from '../pages/chat/Chat';


const AppRoutes: React.FC = () => (
  <div>
    <Routes>
      <Route path="/login" element={<Signin />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/2fa" element={<VerifyCode />} />
      <Route path="/verifyemail" element={<VerifyEmail />} />
      <Route path="/authgoogle" element={<AuthGoogle />} />
      <Route element={<AuthOutlet fallbackPath="/login" />}>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Users />} />
          <Route path="users" element={<Users />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="/buyer" element={<Buyer />} />
        <Route path="/vendor" element={<Seller />} />

      </Route>
    </Routes>

  </div>
);

export default AppRoutes;
