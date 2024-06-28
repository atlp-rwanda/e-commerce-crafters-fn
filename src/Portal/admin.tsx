import React, { useEffect } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { Outlet, useNavigate } from 'react-router-dom';
import Logout from '../services/Logout';
import Sidebar from '../Components/dashboard/Sidebar';

function Admin() {
  const navigate = useNavigate();
  const userData: any = useAuthUser();
  useEffect(() => {
    if (userData.role !== 'admin') {
      navigate(`/${userData.role}`);
    }
  }, [navigate]);
  return (
    <div className="w-full h-screen flex flex-row">
      <Sidebar />
      <Outlet />

    </div>
  );
}

export default Admin;
